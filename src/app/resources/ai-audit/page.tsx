import type { Metadata } from "next";
import { Check } from "lucide-react";
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
