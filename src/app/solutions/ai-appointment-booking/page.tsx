import type { Metadata } from "next";
import { Bell, Calendar, Check, MapPin, Minus, PhoneOff, RefreshCw, UserX } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import WorkflowDiagram from "@/components/workflows/WorkflowDiagram";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import AppointmentHeroVisual from "@/components/hero/AppointmentHeroVisual";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { solutions } from "@/data/solutions";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

const data = solutions.find((s) => s.slug === "appointment-automation")!;

export const metadata: Metadata = buildMetadata({
  title: data.name,
  description: data.problem,
  path: "/solutions/ai-appointment-booking",
});

/* ------------------------------------------------------------------ */
/* Process-based content — not tied to one industry                    */
/* ------------------------------------------------------------------ */

const capIcons = [RefreshCw, MapPin, Bell, RefreshCw];

const gapRows = [
  {
    icon: PhoneOff,
    title: "The back-and-forth to find a time",
    moment: "A lead is ready to book, but confirming a time means several calls or emails checking availability.",
    cost: "Momentum is lost, and some leads never make it onto the calendar at all.",
    fix: "Real-time availability is checked automatically and a slot is booked in the same conversation.",
  },
  {
    icon: Calendar,
    title: "Double bookings and buffer conflicts",
    moment: "Two appointments land on the same technician, room, or time slot because availability wasn't checked live.",
    cost: "Rescheduling, wasted travel, and a frustrated customer on the day of service.",
    fix: "Buffer rules by technician, room, or location are enforced automatically before a slot is offered.",
  },
  {
    icon: UserX,
    title: "No-shows and forgotten appointments",
    moment: "A customer forgets the appointment they booked weeks ago, or cancels with no advance notice.",
    cost: "Wasted labor, travel costs, and lost service revenue for that slot.",
    fix: "Automated confirmations and reminders run on a schedule, with self-service rescheduling built in.",
  },
];

const compareRows = [
  { label: "Confirming a time", before: "Back-and-forth calls or emails", after: "Booked in one conversation" },
  { label: "Availability checks", before: "Manual, per calendar", after: "Live, synced automatically" },
  { label: "Reminders", before: "Easy to forget", after: "Sent automatically on schedule" },
  { label: "Rescheduling", before: "Requires a phone call", after: "Self-service, no call needed" },
];

const faqs = [
  {
    question: "Which calendars does it work with?",
    answer:
      "It syncs two-way with the calendar tools you already use, so availability is always accurate and nothing gets double-booked.",
  },
  {
    question: "How do buffer rules work?",
    answer:
      "You define buffers by technician, room, or location — travel time, setup time, or minimum gaps — and the system only offers slots that respect them.",
  },
  {
    question: "Can a customer reschedule without calling in?",
    answer:
      "Yes. Confirmation and reminder messages include a self-service option to reschedule or cancel, so changes don't require a phone call.",
  },
  {
    question: "What happens if no slots are available?",
    answer:
      "The system can offer the next available time, add the lead to a waitlist, or hand off to a person, depending on how you want it configured.",
  },
];

/* ------------------------------------------------------------------ */

export default function AppointmentBookingPage() {
  return (
    <>
      {/* 1. HERO ------------------------------------------------------ */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden>
          <span className={styles.heroGridBg} />
          <span className={`${styles.orb} ${styles.orbOne}`} />
          <span className={`${styles.orb} ${styles.orbTwo}`} />
        </div>

        <div className={`container ${styles.heroGrid}`}>
          <div>
            <span className={styles.category}>{data.category}</span>
            <h1 className={styles.title}>{data.name}</h1>
            <div className={styles.problemBlock}>
              <p className={styles.blockLabel}>The Problem</p>
              <p className={styles.blockText}>{data.problem}</p>
            </div>
            <div className={styles.solutionBlock}>
              <p className={styles.blockLabel}>The Solution</p>
              <p className={styles.blockText}>{data.solution}</p>
            </div>
            <div className={styles.heroActions}>
              <Button href="/contact" size="lg">Talk to Us About Appointment Booking</Button>
              <Button href="/how-it-works" variant="secondary" size="lg">See How It Works</Button>
            </div>
          </div>
          <AppointmentHeroVisual />
        </div>
      </section>

      {/* 2. KEY CAPABILITIES ------------------------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHeader
            index="01"
            title="Key Capabilities"
            description="What happens automatically between a lead being ready and an appointment on the calendar."
          />
          <StaggerGroup className={styles.capGrid}>
            {data.capabilities.map((cap, i) => {
              const Icon = capIcons[i % capIcons.length];
              return (
                <StaggerItem key={cap} className={styles.capCard}>
                  <span className={styles.capIcon}><Icon size={22} /></span>
                  <h3 className={styles.capTitle}>{cap}</h3>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* 3. WHERE BOOKINGS GET LOST -------------------------------------- */}
      <section className="section section-surface">
        <div className="container">
          <SectionHeader
            index="02"
            title="Where Bookings Fall Through the Cracks"
            description="The same three gaps show up regardless of industry or calendar tool. Appointment automation closes each one."
          />
          <div className={styles.gapList}>
            {gapRows.map((row, i) => {
              const Icon = row.icon;
              return (
                <AnimatedSection key={row.title} delay={i * 0.06} className={styles.gapRow}>
                  <div className={styles.gapHead}>
                    <span className={styles.gapIcon}><Icon size={22} /></span>
                    <h3 className={styles.gapTitle}>{row.title}</h3>
                  </div>
                  <div className={styles.gapCell}>
                    <span className={`${styles.gapLabel} mono`}>WHEN IT HAPPENS</span>
                    <p>{row.moment}</p>
                  </div>
                  <div className={styles.gapCell}>
                    <span className={`${styles.gapLabel} mono`}>WHAT IT COSTS</span>
                    <p>{row.cost}</p>
                  </div>
                  <div className={`${styles.gapCell} ${styles.gapFix}`}>
                    <span className={`${styles.gapLabel} mono`}>AI FIX</span>
                    <p>{row.fix}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WORKFLOW (dark) ---------------------------------------------- */}
      <section className={`section section-dark ${styles.darkSection}`}>
        <div className={styles.darkGlow} aria-hidden />
        <div className={`container ${styles.darkInner}`}>
          <SectionHeader
            index="03"
            dark
            title="From Qualified Lead to Confirmed Appointment"
            description="The same path runs no matter which calendar or service type is involved."
          />
          <WorkflowDiagram stages={data.workflow} highlightIndex={2} />
        </div>
      </section>

      {/* 5. BEFORE / AFTER -------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHeader
            index="04"
            title="Manual Scheduling vs. Automated Booking"
            description="What changes once availability, confirmations, and reminders run on their own."
          />
          <AnimatedSection className={styles.compare}>
            <div className={`${styles.compareRow} ${styles.compareHead}`}>
              <span />
              <span>Without booking automation</span>
              <span className={styles.compareAfterHead}>With AI Appointment Booking</span>
            </div>
            {compareRows.map((r) => (
              <div key={r.label} className={styles.compareRow}>
                <span className={styles.compareLabel}>{r.label}</span>
                <span className={styles.compareBefore}>
                  <Minus size={16} />
                  {r.before}
                </span>
                <span className={styles.compareAfter}>
                  <Check size={16} />
                  {r.after}
                </span>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* 6. INTEGRATIONS + FAQ -------------------------------------------------- */}
      <section className="section section-surface">
        <div className="container">
          <div style={{ marginBottom: "var(--space-9)" }}>
            <SectionHeader title="Integrations" description="Connects to the calendar and booking tools you already run on." />
            <div className={styles.integrationRow}>
              {data.integrations.map((i) => (
                <span key={i} className={styles.integrationChip}>{i}</span>
              ))}
            </div>
          </div>

          <div className={styles.faqLayout}>
            <SectionHeader
              index="05"
              title="Appointment Booking FAQs"
              description="Answers to the questions we hear most before a rollout."
            />
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA / FOOTER SECTION ------------------------------------------------ */}
      <CTASection
        title="Ready to Stop Losing Appointments to Manual Scheduling?"
        description="We'll show you exactly how booking automation fits into your existing calendar and process."
        primaryLabel="Get Your AI Audit"
        secondaryLabel="See All Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}