import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Implementation Roadmap",
  description: "What a typical automation implementation timeline looks like, from kickoff to handover.",
  path: "/resources/roadmap",
});

const phases = [
  { week: "Weeks 1", title: "Discovery & Design", body: "We map your current process, identify the peak-emergency moment, and design the workflow around it." },
  { week: "Weeks 2–3", title: "Build & Integrate", body: "We build the automation and connect it to your CRM, calendar, and phone or chat channels." },
  { week: "Week 4", title: "Test, Deploy & Handover", body: "We test against real scenarios, go live, and walk your team through how the system works." },
];

export default function RoadmapPage() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <h1 className={styles.heroTitle}>What Implementation Actually Looks Like.</h1>
          <p className={styles.heroCopy}>
            A single-workflow (DWY) engagement typically runs four weeks from kickoff to handover. Larger
            infrastructure builds are scoped individually based on the number of systems involved.
          </p>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <SectionHeader title="A Typical Four-Week Build" />
          <div className={styles.phaseGrid}>
            {phases.map((p) => (
              <div key={p.title} className={styles.phaseCard}>
                <span className={`${styles.phaseWeek} mono`}>{p.week}</span>
                <h3 className={styles.phaseTitle}>{p.title}</h3>
                <p className={styles.phaseBody}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Get a Roadmap Scoped to Your Business."
        description="An AI Audit produces a specific implementation roadmap — priority order, timeline, and cost — for your actual process."
      />
    </>
  );
}
