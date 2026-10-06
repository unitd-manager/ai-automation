import type { Metadata } from "next";
import { HeartPulse } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import WorkflowDiagram from "@/components/workflows/WorkflowDiagram";
import BookingCard from "@/components/industry/BookingCard";
import FrontDeskTimeline from "@/components/industry/FrontDeskTimeline";
import FeatureExplorer from "@/components/industry/FeatureExplorer";
import MomentMap from "@/components/industry/MomentMap";
import CTASection from "@/components/sections/CTASection";
import { industries } from "@/data/industries";
import { industrySystems } from "@/data/Industrysystems";
import { momentPlays } from "@/data/momentPlays";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

const data = industries.find((i) => i.slug === "healthcare")!;
const system = industrySystems["healthcare"];

export const metadata: Metadata = buildMetadata({
  title: "AI Automation for Healthcare Practices",
  description: data.hero,
  path: "/industries/healthcare",
});

export default function HealthcarePage() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className={styles.glowLayer} aria-hidden>
          <span className={styles.glowOrb} />
          <span className={styles.bgGrid} />
        </div>

        <div className={`container ${styles.heroTop}`}>
          <div>
            <span className={styles.iconBadge}>
              <HeartPulse size={22} strokeWidth={1.75} />
            </span>
            <div className={styles.pillRow}>
              {data.segments.map((s) => (
                <span key={s} className={styles.pill}>{s}</span>
              ))}
            </div>
            <h1 className={styles.title}>{data.hero}</h1>
            <p className={styles.statCallout}>
              78% of customers abandon a business after one unanswered call.
              <span className={styles.statSource}> Source: CallRail, 2025 survey of 1,000 U.S. consumers.</span>
            </p>
            <Button href="/contact" variant="light" size="lg">Talk to Us</Button>
          </div>

          <BookingCard booking={data.demoBooking} />
        </div>

        <div className={`container ${styles.workflowContainer}`}>
          <div className={styles.workflowWrap}>
            <WorkflowDiagram stages={data.workflow} dense />
          </div>
        </div>
      </section>

      <section className={`section ${styles.challengeSection}`}>
        <div className="container">
          <span className={`${styles.eyebrow} mono`}>Before &amp; After</span>
          <h2 className={styles.challengeTitle}>One Call, Two Versions of Your Front Desk</h2>
          <FrontDeskTimeline scenario={system.scenario} rows={system.rows} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            title="The Moments That Matter Most"
            description="These are the moments that decide whether a patient books, or looks elsewhere."
          />
          <MomentMap
            workflow={data.workflow}
            rootNote={momentPlays["healthcare"].rootNote}
            moments={data.peakMoments}
            plays={momentPlays["healthcare"].plays}
          />
        </div>
      </section>

      <section className={`section ${styles.featuresSection}`}>
        <div className="container">
          <span className={`${styles.eyebrow} mono`}>What&apos;s Included</span>
          <h2 className={styles.featuresTitle}>Inside the {data.name} System</h2>
          <p className={styles.featuresLead}>
            Six capabilities, listed in the order a patient moves through your workflow. Pick one to see where it
            runs and what your patient experiences.
          </p>
          <FeatureExplorer system={system.systemFeatures} workflow={data.workflow} />
        </div>
      </section>

      <CTASection
        title="Ready to Fill Every Open Slot?"
        description="We'll map your patient intake and scheduling process to find where automation returns the most."
      />
    </>
  );
}
