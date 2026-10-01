import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactSubmission = {
  name: string;
  company: string;
  email: string;
  industry: string;
  website: string;
  crm: string;
  volume: string;
  interest: string;
  challenge: string;
};

const fields: Array<keyof ContactSubmission> = [
  "name",
  "company",
  "email",
  "industry",
  "website",
  "crm",
  "volume",
  "interest",
  "challenge",
];

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[character];
  });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid form submission." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const input = body as Record<string, unknown>;
  const submission = Object.fromEntries(
    fields.map((field) => [field, typeof input[field] === "string" ? input[field].trim() : ""]),
  ) as ContactSubmission;

  if (!submission.name || !submission.company || !submission.email || !submission.industry) {
    return Response.json({ error: "Please complete all required fields." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email) || submission.email.length > 254) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (submission.website) {
    try {
      new URL(submission.website);
    } catch {
      return Response.json({ error: "Enter a valid website URL." }, { status: 400 });
    }
  }
  if (fields.some((field) => submission[field].length > 5000)) {
    return Response.json({ error: "One or more fields are too long." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD, SMTP_FROM, CONTACT_RECEIVER_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USERNAME || !SMTP_PASSWORD || !SMTP_FROM || !CONTACT_RECEIVER_EMAIL) {
    console.error("Contact form email is missing SMTP environment configuration.");
    return Response.json({ error: "Email is temporarily unavailable. Please try again later." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: SMTP_USERNAME, pass: SMTP_PASSWORD },
  });

  const rows = fields.map((field) =>
    `<tr><th align="left" style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(field)}</th><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(submission[field] || "—").replace(/\n/g, "<br>")}</td></tr>`,
  ).join("");

  try {
    await transporter.sendMail({
      from: SMTP_FROM,
      to: CONTACT_RECEIVER_EMAIL,
      replyTo: submission.email,
      subject: `AI Audit request from ${submission.name}`,
      text: fields.map((field) => `${field}: ${submission[field] || "—"}`).join("\n"),
      html: `<h2>New AI Audit request</h2><table style="border-collapse:collapse">${rows}</table>`,
    });
    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return Response.json({ error: "We couldn't send your request. Please try again shortly." }, { status: 502 });
  }
}