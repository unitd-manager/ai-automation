import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

type Article = {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  sections: { heading: string; paragraphs: string[] }[];
};

const articles: Article[] = [
  {
    slug: "how-ai-automation-is-transforming-business-operations",
    tag: "Operations",
    title: "How AI Automation Is Transforming Business Operations",
    excerpt: "AI-powered workflows can automate repetitive processes, connect business systems, improve response times, and help teams focus on higher-value work.",
    sections: [
      { heading: "The opportunity is in the handoffs", paragraphs: ["Most operational friction does not come from one difficult task. It comes from the repeated handoffs between people, inboxes, calendars, CRMs, and documents.", "AI automation creates value when it keeps information moving without requiring someone to copy, paste, check, and remind at every step."] },
      { heading: "Start with a critical moment", paragraphs: ["The best first workflow is usually connected to a moment where speed matters: a new lead, an urgent service request, a patient inquiry, or an estimate waiting for approval.", "Start there, define the desired outcome, and automate the repeatable steps around it. This gives the team a clear result to measure instead of a vague promise of efficiency."] },
      { heading: "Keep people in control", paragraphs: ["A strong workflow does not hide the human role. It makes the handoff explicit, sends the right context to the right person, and escalates requests that fall outside the system's scope.", "The result is a more responsive operation with fewer repetitive tasks and better visibility into what needs attention."] },
    ],
  },
  {
    slug: "what-is-ai-automation-a-practical-guide-for-businesses",
    tag: "Foundations",
    title: "What Is AI Automation? A Practical Guide for Businesses",
    excerpt: "Understand what AI automation means, how it differs from traditional automation, and where businesses can start.",
    sections: [
      { heading: "AI automation combines judgment with action", paragraphs: ["Traditional automation follows fixed rules. AI automation can interpret language, classify requests, extract information, and choose the next step before an action is executed.", "That makes it useful for workflows that begin with unstructured input such as a phone call, email, document, or customer message."] },
      { heading: "Good use cases are repeatable and measurable", paragraphs: ["Look for work that happens often, follows a recognizable pattern, and has a clear business outcome. Lead response, appointment reminders, document processing, and CRM updates are common starting points.", "A useful automation should save time, improve response speed, reduce errors, or increase the amount of work a team can handle."] },
      { heading: "Build around the systems you already use", paragraphs: ["The goal is not to replace every tool. It is to connect the tools your team already relies on and remove the manual movement between them.", "Begin with one workflow, establish a baseline, and expand once the first system is working reliably."] },
    ],
  },
  {
    slug: "10-business-processes-you-can-automate-with-ai",
    tag: "Operations",
    title: "10 Business Processes You Can Automate With AI",
    excerpt: "Discover practical opportunities across customer communication, follow-ups, documents, and data entry.",
    sections: [
      { heading: "Customer communication", paragraphs: ["AI can answer common questions, capture details, qualify inquiries, route conversations, and create records for your team.", "These workflows reduce the time between a customer reaching out and receiving a useful response."] },
      { heading: "Scheduling and follow-up", paragraphs: ["Appointment booking, confirmations, rescheduling, quote follow-up, and reactivation are all structured workflows with clear next actions.", "Automating them creates consistency without forcing employees to remember every reminder manually."] },
      { heading: "Documents and data", paragraphs: ["Forms, invoices, reports, work orders, and applications can be classified, extracted, and routed into business systems.", "The highest-value opportunities usually combine document processing with a follow-on action such as updating a CRM or notifying a team member."] },
    ],
  },
  {
    slug: "ai-agents-vs-traditional-automation-whats-the-difference",
    tag: "AI Agents",
    title: "AI Agents vs Traditional Automation: What's the Difference?",
    excerpt: "Learn how rule-based automation compares with AI-powered agents and when each approach makes sense.",
    sections: [
      { heading: "Rules are predictable; agents are adaptive", paragraphs: ["Traditional automation is excellent when the inputs and decisions are consistent. It is fast, reliable, and easy to audit.", "AI agents are useful when requests vary, language matters, or the system needs to interpret context before deciding what to do next."] },
      { heading: "Most useful systems combine both", paragraphs: ["A practical workflow often uses an AI agent at the front to understand the request, then dependable rules and integrations to complete the action.", "The combination keeps conversations flexible while making important business actions controlled and observable."] },
    ],
  },
  {
    slug: "how-ai-voice-agents-handle-customer-calls",
    tag: "Voice AI",
    title: "How AI Voice Agents Handle Customer Calls",
    excerpt: "Explore how voice AI understands conversations, performs actions, and transfers calls when needed.",
    sections: [
      { heading: "A call becomes a structured workflow", paragraphs: ["A voice agent can understand what a caller needs, ask the right follow-up questions, retrieve approved information, and create a record for the next step.", "It can also schedule an appointment or transfer the conversation when the request needs human judgment."] },
      { heading: "Boundaries make voice automation useful", paragraphs: ["The best voice systems have clear service areas, escalation rules, approved answers, and fallback behavior. The goal is not to pretend every call is simple.", "It is to handle routine conversations consistently and give your team the context they need when a person takes over."] },
    ],
  },
  {
    slug: "how-to-calculate-the-roi-of-ai-automation",
    tag: "ROI",
    title: "How to Calculate the ROI of AI Automation",
    excerpt: "Learn which costs, time savings, productivity improvements, and operational metrics matter.",
    sections: [
      { heading: "Start with the current workload", paragraphs: ["Estimate monthly volume, the people involved, time spent on repetitive work, and the cost of that time. Include the manual handoffs that are easy to overlook.", "A rough baseline is more useful than a perfect guess that delays the decision."] },
      { heading: "Measure more than labor savings", paragraphs: ["Response time, recovered leads, booked appointments, reduced errors, and capacity gained can all contribute to the value of automation.", "Compare the estimated annual benefit with implementation and ongoing operating costs, then use payback period as a practical decision check."] },
    ],
  },
  {
    slug: "how-to-identify-the-right-processes-for-automation",
    tag: "Strategy",
    title: "How to Identify the Right Processes for Automation",
    excerpt: "Find repetitive, high-volume, rule-driven processes that may provide strong automation opportunities.",
    sections: [
      { heading: "Look for repeatability and volume", paragraphs: ["A strong candidate happens often, follows a recognizable pattern, and consumes meaningful team time. High-volume customer inquiries and follow-up sequences are common examples.", "The work should also have a clear definition of success so improvement can be measured after launch."] },
      { heading: "Avoid automating confusion", paragraphs: ["If the process changes every time or nobody agrees on the desired outcome, automation will amplify the uncertainty.", "Clarify the process first, define exceptions, and choose a smaller workflow that the team can validate confidently."] },
    ],
  },
];

function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  return buildMetadata({
    title: article?.title ?? "AI & Automation Insights",
    description: article?.excerpt ?? "Practical ideas for building smarter businesses with AI automation.",
    path: `/resources/blog/${slug}`,
  });
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return <div className={styles.notFound}><div className="container"><h1>Article not found.</h1><Button href="/resources/blog">Back to Insights</Button></div></div>;
  }

  return (
    <>
      <article>
        <header className={styles.articleHero}>
          <div className="container">
            <Link href="/resources/blog" className={styles.backLink}><ArrowLeft size={15} /> Back to Insights</Link>
            <p className={styles.articleTag}>{article.tag}</p>
            <h1>{article.title}</h1>
            <p className={styles.articleExcerpt}>{article.excerpt}</p>
          </div>
        </header>
        <div className={styles.articleBody}>
          <div className="container">
            <div className={styles.articleLayout}>
              <aside className={styles.articleAside}><span>INSIGHTS</span><p>Practical ideas for building smarter, more efficient operations.</p><Link href="/resources/ai-audit">Find your opportunity <ArrowRight size={14} /></Link></aside>
              <div className={styles.articleContent}>
                {article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
                <div className={styles.articleCta}><h2>Ready to apply this to your business?</h2><p>Start with an AI Audit to identify the first workflow worth improving.</p><Button href="/resources/ai-audit">Get an AI Audit <ArrowRight size={16} /></Button></div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
