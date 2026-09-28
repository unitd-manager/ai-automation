import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import IndustryCard from "@/components/cards/IndustryCard";
import CTASection from "@/components/sections/CTASection";
import { industries } from "@/data/industries";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Industries",
  description: "AI automation built around the way home services, healthcare, and construction businesses actually work.",
  path: "/industries",
});

const factors = ["Customer behavior", "Peak demand", "Operational bottlenecks", "Revenue opportunities", "Existing software"];

export default function IndustriesPage() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <h1 className={styles.heroTitle}>AI Automation Built Around the Way Your Industry Works.</h1>
          <p className={styles.heroCopy}>
            Generic automation ignores what makes each business different. We design every workflow around five
            factors specific to your industry.
          </p>
          <div className={styles.factorGrid}>
            {factors.map((f) => (
              <span key={f} className={styles.factor}>{f}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <SectionHeader title="Three Industries, Three Different Systems" description="Each industry page below breaks down the pain points, peak moments, and workflow specific to that business." />
          <div className={styles.grid}>
            {industries.map((ind) => (
              <IndustryCard key={ind.slug} industry={ind} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't See Your Industry Listed?"
        description="If your business runs on inbound calls, appointments, and follow-up, the same methodology applies. Let's talk through your specific process."
      />
    </>
  );
}
