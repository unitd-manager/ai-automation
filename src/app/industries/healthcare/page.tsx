import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import WorkflowDiagram from "@/components/workflows/WorkflowDiagram";
import CTASection from "@/components/sections/CTASection";
import { industries } from "@/data/industries";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

const data = industries.find((i) => i.slug === "healthcare")!;

export const metadata: Metadata = buildMetadata({
  title: "AI Automation for Healthcare Practices",
  description: data.hero,
  path: "/industries/healthcare",
});

export default function HealthcarePage() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <span className={styles.segments}>{data.segments.join(" · ")}</span>
          <h1 className={styles.title}>{data.hero}</h1>
          <Button href="/contact" size="lg">Talk to Us</Button>
          <div className={styles.workflowWrap}>
            <WorkflowDiagram stages={data.workflow} dense />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.twoCol}>
            <div>
              <SectionHeader title="Where Patient Volume Is Lost" />
              <div className={styles.list}>
                {data.painPoints.map((p, i) => (
                  <div key={p} className={styles.listItem}>
                    <span className={`${styles.listIndex} mono`}>{String(i + 1).padStart(2, "0")}</span>
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader title="The Moments That Matter Most" description="These are the moments that decide whether a patient books, or looks elsewhere." />
              {data.peakMoments.map((m) => (
                <div key={m} className={styles.momentCard}>
                  <p className={styles.momentText}>{m}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Fill Every Open Slot?"
        description="We'll map your patient intake and scheduling process to find where automation returns the most."
      />
    </>
  );
}
