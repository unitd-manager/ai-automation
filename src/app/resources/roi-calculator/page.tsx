import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import ROICalculator from "./ROICalculator";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "ROI Calculator",
  description: "Estimate the revenue opportunity and hours saved from automating lead response and manual work.",
  path: "/resources/roi-calculator",
});

export default function ROICalculatorPage() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <h1 className={styles.heroTitle}>Estimate What Automation Could Recover.</h1>
          <p className={styles.heroCopy}>
            Adjust the inputs below to reflect your business. The figures update instantly and are meant as a
            starting point, not a guarantee.
          </p>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <ROICalculator />
        </div>
      </section>

      <CTASection
        title="Turn This Estimate Into a Real Plan."
        description="An AI Audit uses your actual numbers to map the highest-impact workflow for your business."
      />
    </>
  );
}
