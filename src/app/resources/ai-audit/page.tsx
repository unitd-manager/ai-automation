import type { Metadata } from "next";
import { Check, Clock, TrendingUp, Map, ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "AI Automation Audit",
  description: "A clear map of where automation will return the most for your business, and in what order to build it.",
  path: "/resources/ai-audit",
});

const included = [
  "A review of how leads, calls, and appointments currently move through your business",
  "An automation opportunity map ranked by business impact",
  "Identification of your business's peak-emergency moments",
  "Specific AI workflow recommendations, not generic suggestions",
  "A prioritized implementation roadmap with timeline and cost",
];

const whyPoints = [
  {
    icon: Clock,
    title: "Buy back your time",
    text: "Every hour you spend chasing calls, texts, and follow-ups is an hour not spent growing the business. The audit shows which tasks to hand to automation first, so your time goes to the work only you can do.",
  },
  {
    icon: TrendingUp,
    title: "Know the return before you spend",
    text: "You see what each automation is likely to recover, what it will cost, and how long it will take. You decide with numbers in front of you, not a hunch.",
  },
  {
    icon: Map,
    title: "Start with the biggest win",
    text: "Most businesses try to automate everything at once and stall. We rank every opportunity by impact, so you start with the one workflow that moves the needle and build from there.",
  },
  {
    icon: ShieldCheck,
    title: "A low-risk first step",
    text: "It is a one-time $500, not a retainer. The plan is yours to keep, whether or not you build it with us.",
  },
];

const auditSteps = [
  { number: "01", title: "Map the workflow", body: "We trace how an inquiry moves from first contact through qualification, booking, handoff, and follow-up." },
  { number: "02", title: "Find the leverage", body: "We identify the slowdowns, drop-off points, and repetitive work where automation can create measurable capacity." },
  { number: "03", title: "Prioritize the build", body: "You get a sequenced plan showing what to automate first, what it connects to, and what success should look like." },
];

const auditOutcomes = [
  { title: "A clear starting point", body: "Know which workflow deserves attention first instead of trying to automate everything at once." },
  { title: "A business case", body: "See the likely time, response, and revenue impact behind each recommendation." },
  { title: "A practical next step", body: "Leave with an implementation sequence your team can discuss, budget, and act on." },
];

const faqs = [
  { question: "How long does the audit take?", answer: "Most audits are completed within one focused working session, followed by a written opportunity map and recommendations." },
  { question: "Do I need to prepare anything?", answer: "Bring a basic view of your lead sources, scheduling process, CRM, and the moments where work tends to slow down. We will guide the conversation." },
  { question: "Is the audit only for businesses ready to buy?", answer: "No. The audit is designed to give you a useful prioritization whether you implement immediately, later, or with another partner." },
  { question: "What happens after the audit?", answer: "You receive the findings and roadmap. From there, you can use it internally or ask us to scope and build the first workflow." },
];

export default function AiAuditPage() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <p className={styles.heroEyebrow}>AI Automation Audit</p>
          <h1 className={styles.heroTitle}>
            Find the First Workflow
            <span className={styles.heroAccent}>You Should Automate</span>
          </h1>
          <p className={styles.heroCopy}>
            The AI Audit is a business process review — not a sales pitch. You&apos;ll leave with a specific,
            prioritized plan, whether or not you build it with us.
          </p>
          <div className={styles.heroCta}>
            <Button href="/contact" size="lg">Talk to Us</Button>
          </div>
        </div>
      </section>

      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <SectionHeader
            title="How the Audit Works"
            description="A focused review that turns operational friction into a short list of high-confidence automation opportunities."
          />
          <div className={styles.processGrid}>
            {auditSteps.map((step) => (
              <article key={step.number} className={styles.processCard}>
                <span className={`${styles.stepNumber} mono`}>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <SectionHeader
            title="What You Leave With"
            description="The result is designed to be useful in an operations meeting, a planning conversation, or a build brief."
          />
          <div className={styles.outcomesGrid}>
            {auditOutcomes.map((outcome) => (
              <article key={outcome.title} className={styles.outcomeCard}>
                <span className={styles.outcomeMark}><Check size={16} /></span>
                <h3>{outcome.title}</h3>
                <p>{outcome.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <div className={styles.faqLayout}>
            <div>
              <p className={styles.faqEyebrow}>Before you book</p>
              <h2>Questions about the audit?</h2>
              <p className={styles.faqIntro}>A few practical answers about the time, preparation, and next steps involved.</p>
            </div>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <SectionHeader title="How an AI Audit Creates Business Value" />
          <p className={styles.whyLead}>
            Think of the audit as buying back your time and your clarity. For one small, one-time
            investment, you stop guessing where automation fits and start working from a plan.
          </p>

          <div className={styles.whyGrid}>
            {whyPoints.map(({ icon: Icon, title, text }) => (
              <article key={title} className={styles.whyCard}>
                <span className={styles.whyIcon} aria-hidden>
                  <Icon size={20} />
                </span>
                <h3 className={styles.whyTitle}>{title}</h3>
                <p className={styles.whyText}>{text}</p>
              </article>
            ))}
          </div>

          <div
            className={styles.mathBox}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
              gap: "var(--space-7)",
              alignItems: "center",
            }}
          >
            <div>
              <p className={styles.mathLabel}>The simple math</p>
              <p className={styles.mathText} style={{ marginBottom: "var(--space-6)" }}>
                If a single recovered job, or a few hours a week handed back to you, is worth more than
                $500 to your business, the audit pays for itself. Everything after that is upside.
              </p>
              <p style={{ margin: 0, color: "#d5e3ff", fontSize: "0.9rem", lineHeight: 1.6 }}>
                A practical, prioritized AI Automation Blueprint. One payment, no retainer, and the plan is yours to keep.
              </p>
            </div>

            <div>
              <p style={{ margin: "0 0 var(--space-3)", color: "#bfdbfe", fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Your $500 AI Opportunity Diagnostic
              </p>
              <ul style={{ display: "grid", gap: "var(--space-3)", margin: "0 0 var(--space-6)", padding: 0, listStyle: "none" }}>
                {included.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-3)", color: "#ffffff", fontSize: "0.9rem", lineHeight: 1.5 }}>
                    <Check size={18} color="#bfdbfe" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: "grid", gap: "var(--space-5)" }}>
                <div>
                  <strong style={{ display: "block", color: "#ffffff", fontSize: "2.5rem", lineHeight: 1 }}>$500</strong>
                  <span style={{ display: "block", marginTop: "var(--space-2)", color: "#d5e3ff", fontSize: "0.85rem" }}>One-time payment</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-start", gap: "var(--space-3)" }}>
                  <Button href="/pricing" variant="light" size="md">Check Other Packages</Button>
                  <Button href="/contact" variant="light" size="lg">Talk to Us</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Not Ready for a Full Audit?"
        description="Try the ROI Calculator first to see a rough estimate of what automation could recover."
        primaryLabel="Try the ROI Calculator"
        primaryHref="/resources/roi-calculator"
      />
    </>
  );
}