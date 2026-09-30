import type { Metadata } from "next";
import { Check } from "lucide-react";
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
          <h1 className={styles.heroTitle}>Find the First Workflow You Should Automate.</h1>
          <p className={styles.heroCopy}>
            The AI Audit is a business process review — not a sales pitch. You&apos;ll leave with a specific,
            prioritized plan, whether or not you build it with us.
          </p>
          <Button href="/contact" size="lg">Request Your AI Audit</Button>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="What's Included" />
          <div className={styles.includedGrid}>
            {included.map((item) => (
              <div key={item} className={styles.includedItem}>
                <Check size={18} color="#3e5fae" style={{ flexShrink: 0, marginTop: 2 }} />
                <span>{item}</span>
              </div>
            ))}
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
          <div className={styles.priceBlock}>
            <div>
              <span className={styles.price}>$500</span>
              <p className={styles.priceNote}>One-time — AI Opportunity Diagnostic</p>
            </div>
            <Button href="/contact" size="lg">Get Started</Button>
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
