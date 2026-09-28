import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import WorkflowDiagram from "@/components/workflows/WorkflowDiagram";
import CTASection from "@/components/sections/CTASection";
import { industries } from "@/data/industries";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

const data = industries.find((i) => i.slug === "home-services")!;

export const metadata: Metadata = buildMetadata({
  title: "AI Automation for Home Services",
  description: data.hero,
  path: "/industries/home-services",
});

export default function HomeServicesPage() {
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
              <SectionHeader title="Where Time and Revenue Are Lost" />
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
              <SectionHeader title="The Moments That Matter Most" description="The highest-value automation opportunities in home services show up during these moments." />
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
        title="Ready to Capture Every Service Call?"
        description="We'll map your call and scheduling process to find where an AI workflow returns the most."
      />
    </>
  );
}
