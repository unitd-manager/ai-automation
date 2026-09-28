import type { Metadata } from "next";
import { Info } from "lucide-react";
import CaseStudyCard from "@/components/cards/CaseStudyCard";
import CTASection from "@/components/sections/CTASection";
import { caseStudies } from "@/data/pricing";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies",
  description: "How AI automation workflows apply across roofing, dental, HVAC, and construction businesses.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <h1 className={styles.heroTitle}>Proof Through Real Business Outcomes.</h1>
          <p className={styles.heroCopy}>
            These workflows reflect how we approach real business problems in each industry. Metrics are shown as
            illustrative examples of what the workflow is designed to achieve.
          </p>
          <span className={styles.disclaimer}>
            <Info size={14} /> Illustrative workflows — not verified client results
          </span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want a Workflow Like These, Scoped to Your Business?"
        description="An AI Audit maps your specific process to the highest-impact workflow to build first."
      />
    </>
  );
}
