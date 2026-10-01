import type { Metadata } from "next";
import { Check, Clock, TrendingUp, Map, ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
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

export default function AiAuditPage() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <p className={styles.heroEyebrow}>AI Automation Audit</p>
          <h1 className={styles.heroTitle}>Find the First Workflow You Should Automate.</h1>
          <p className={styles.heroCopy}>
            The AI Audit is a business process review — not a sales pitch. You&apos;ll leave with a specific,
            prioritized plan, whether or not you build it with us.
          </p>
          <div className={styles.heroCta}>
            <Button href="/contact" size="lg">Request Your AI Audit</Button>
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <SectionHeader title="Why $500 Is the Easiest Decision You'll Make This Year" />
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
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)" }}>
                <div>
                  <strong style={{ display: "block", color: "#ffffff", fontSize: "2.5rem", lineHeight: 1 }}>$500</strong>
                  <span style={{ display: "block", marginTop: "var(--space-2)", color: "#d5e3ff", fontSize: "0.85rem" }}>One-time payment</span>
                </div>
                <Button href="/contact" variant="light" size="lg">Get Your AI Audit</Button>
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