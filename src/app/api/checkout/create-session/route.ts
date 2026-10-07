import crypto from "crypto";
import { NextResponse } from "next/server";
import { findTier, MAX_QUANTITY, parseTierPrice } from "@/lib/payment";
import { getSiteUrl, getStripe, getStripeCurrency } from "@/lib/stripe";

export const runtime = "nodejs";

type Body = {
  customer?: { name?: string; email?: string; company?: string; country?: string };
  items?: { id?: string; quantity?: number }[];
};

const clean = (value: unknown, max = 200) => (typeof value === "string" ? value.trim().slice(0, max) : "");

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = clean(body.customer?.name);
  const email = clean(body.customer?.email);
  const company = clean(body.customer?.company);
  const country = clean(body.customer?.country, 60);

  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter your name and a valid email address." }, { status: 400 });
  }
  if (!Array.isArray(body.items) || body.items.length === 0) {
    return NextResponse.json({ error: "Your cart is empty." }, { status: 400 });
  }

  // Prices always come from the server-side pricing data, never from the browser.
  const lines: { code: string; title: string; quantity: number; unitAmount: number }[] = [];
  for (const item of body.items) {
    const tier = findTier(item.id);
    if (!tier) {
      return NextResponse.json({ error: "One of the packages in your cart is no longer available." }, { status: 400 });
    }
    const quantity = Math.min(MAX_QUANTITY, Math.max(1, Math.trunc(Number(item.quantity) || 1)));
    const existing = lines.find((line) => line.code === tier.code);
    if (existing) {
      existing.quantity = Math.min(MAX_QUANTITY, existing.quantity + quantity);
    } else {
      lines.push({ code: tier.code, title: tier.name, quantity, unitAmount: parseTierPrice(tier) });
    }
  }

  const currency = getStripeCurrency();
  const checkoutReference = `chk_${Date.now()}_${crypto.randomBytes(4).toString("hex")}`;
  const siteUrl = getSiteUrl(request);

  try {
    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      client_reference_id: checkoutReference,
      billing_address_collection: "required",
      allow_promotion_codes: true,
      success_url: `${siteUrl}/checkout/success?checkout_reference=${checkoutReference}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/checkout?cancelled=1`,
      metadata: {
        checkoutReference,
        customerName: name,
        company,
        country,
        items: lines.map((line) => `${line.code}x${line.quantity}`).join(","),
      },
      line_items: lines.map((line) => ({
        quantity: line.quantity,
        price_data: {
          currency,
          unit_amount: Math.round(line.unitAmount * 100),
          product_data: { name: line.title },
        },
      })),
    });

    if (!session.url) {
      return NextResponse.json({ error: "Stripe did not return a checkout URL." }, { status: 502 });
    }
    return NextResponse.json({ url: session.url, sessionId: session.id, checkoutReference });
  } catch (error) {
    console.error("Stripe checkout session creation failed:", error);
    const detail = error instanceof Error ? error.message : "Unknown error";
    const message =
      error instanceof Error && error.message.startsWith("STRIPE_SECRET_KEY")
        ? error.message
        : process.env.NODE_ENV !== "production"
          ? `Stripe error: ${detail}`
          : "Stripe could not start checkout. Please try again or contact us.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}