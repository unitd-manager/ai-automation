import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import IndustryCard from "@/components/cards/IndustryCard";
import CTASection from "@/components/sections/CTASection";
import { industries } from "@/data/industries";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Industries",
  description:
    "AI automation built around the way home services, healthcare, and automotive service businesses actually work.",
  path: "/industries",
});

const factors = [
  {
    name: "Customer behavior",
    note: "How people search, call, and decide in your trade.",
  },
  {
    name: "Peak demand",
    note: "The hours, seasons, and emergencies when calls surge.",
  },
  {
    name: "Operational bottlenecks",
    note: "Where your front desk or crew gets stuck.",
  },
  {
    name: "Revenue opportunities",
    note: "The jobs, visits, and repeat business slipping away.",
  },
  {
    name: "Existing software",
    note: "The scheduling and CRM tools we connect to, not replace.",
  },
];

const stats = [
  {
    value: "78%",
    label: "of customers abandon a business after one unanswered call",
  },
  {
    value: "21%",
    label: "call the next business on the list immediately",
  },
  {
    value: "42%",
    label: "leave a voicemail; the rest just hang up",
  },
  {
    value: "24/7",
    label: "AI-powered response and follow-up when your team is unavailable",
  },
];

const calls = [
  {
    industry: "Home Services",
    scenario: "Water heater leaking, needs a technician today.",
    status: "Booked",
  },
  {
    industry: "Healthcare",
    scenario: "New patient requesting a cleaning after 5 PM.",
    status: "Confirmed",
  },
  {
    industry: "Automotive Services",
    scenario: "Car won't start, needs same-day service.",
    status: "Scheduled",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* =========================================
          HERO SECTION
          ========================================= */}
      <section className={`section section-dark ${styles.hero}`}>
        <div className={styles.glowLayer} aria-hidden>
          <span className={styles.glowOrb} />
          <span className={styles.bgGrid} />
        </div>

        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroGrid}>
            {/* LEFT CONTENT */}
            <div>
              <h1 className={styles.heroTitle}>
                AI Automation Built Around the Way Your Industry Works.
              </h1>

              <p className={styles.heroCopy}>
                In every trade we work in, the business that answers first
                wins the job. We build every workflow around how your industry
                gets its calls, books its work, and follows up, connected to
                the tools you already use.
              </p>

              <Button
                href="/resources/ai-audit"
                variant="light"
                size="lg"
              >
                Get Your AI Audit
              </Button>
            </div>

            {/* RIGHT STATUS CARDS */}
            <div
              className={styles.statusPanel}
              role="list"
              aria-label="Example bookings by industry"
            >
              {calls.map((c) => (
                <div
                  key={c.industry}
                  className={styles.statusCard}
                  role="listitem"
                >
                  <div className={styles.statusTop}>
                    <span className={styles.statusIndustry}>
                      {c.industry}
                    </span>

                    <span className={styles.statusPill}>
                      {c.status}
                    </span>
                  </div>

                  <p className={styles.statusScenario}>
                    {c.scenario}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================
              STATS
              ========================================= */}
          <div className={styles.statArea}>
            <div className={styles.statStrip}>
              {stats.map((s) => (
                <div
                  key={s.label}
                  className={styles.statBlock}
                >
                  <span className={styles.statValue}>
                    {s.value}
                  </span>

                  <span className={styles.statLabel}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          INDUSTRIES
          ========================================= */}
      <section className="section section-surface">
        <div className="container">
          <SectionHeader
            title="Three Industries, Three Different Systems"
            description="Each industry page shows where inquiries are lost, the moments that matter, and the AI agents built for that business."
          />

          <div className={styles.grid}>
            {industries.map((ind) => (
              <IndustryCard
                key={ind.slug}
                industry={ind}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          BEFORE WE BUILD
          ========================================= */}
      <section className="section">
        <div className={`container ${styles.factorsGrid}`}>
          <div>
            <SectionHeader
              index="Before we build"
              title="What we map before we build"
              description="Generic automation ignores what makes each business different. Five things shape every workflow we design."
            />
          </div>

          <dl className={styles.factorList}>
            {factors.map((f) => (
              <div
                key={f.name}
                className={styles.factor}
              >
                <dt>{f.name}</dt>
                <dd>{f.note}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* =========================================
          CTA
          ========================================= */}
      <CTASection
        title="Don't See Your Industry Listed?"
        description="If your business runs on inbound calls, appointments, and follow-up, the same methodology applies. Let's talk through your specific process."
      />
    </>
  );
}