import type { Metadata } from "next";
import { Check, ClipboardList, Copy, Database, GitMerge, Minus, ShieldAlert, SplitSquareHorizontal } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import WorkflowDiagram from "@/components/workflows/WorkflowDiagram";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CrmHeroVisual from "@/components/hero/CrmHeroVisual";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { solutions } from "@/data/solutions";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

const data = solutions.find((s) => s.slug === "crm-automation")!;

export const metadata: Metadata = buildMetadata({
  title: data.name,
  description: data.problem,
  path: "/solutions/ai-crm-automation",
});

/* ------------------------------------------------------------------ */
/* Process-based content — not tied to one industry                    */
/* ------------------------------------------------------------------ */

const capIcons = [Copy, ClipboardList, ShieldAlert, ClipboardList];

const gapRows = [
  {
    icon: SplitSquareHorizontal,
    title: "Data scattered across tools",
    moment: "A call goes in the phone system, a form submission lands in email, and a booking sits in the calendar — none of it in one place.",
    cost: "Nobody has a full picture of the customer without piecing together several tools by hand.",
    fix: "Every interaction writes back to a single CRM record automatically, regardless of which channel it came through.",
  },
  {
    icon: Copy,
    title: "Duplicate and conflicting records",
    moment: "The same customer ends up as three different records because each channel created its own entry.",
    cost: "Reps work from incomplete history, and reporting counts the same customer multiple times.",
    fix: "Deduplication and record matching keep one accurate profile per customer, no matter how many channels they used.",
  },
  {
    icon: ShieldAlert,
    title: "No visibility into what changed",
    moment: "A record gets updated automatically and nobody can tell what changed, when, or why.",
    cost: "Trust in the CRM erodes, and mistakes are hard to trace back to their source.",
    fix: "Every automated update is logged in an audit trail, so changes are always traceable.",
  },
];

const compareRows = [
  { label: "Customer data", before: "Scattered across tools", after: "One accurate record" },
  { label: "Duplicate entries", before: "Created per channel", after: "Detected and merged automatically" },
  { label: "Field updates", before: "Manual, easy to miss", after: "Automatic, mapped to your CRM" },
  { label: "Change history", before: "Untracked", after: "Full audit trail" },
];

const faqs = [
  {
    question: "Which CRMs does this work with?",
    answer:
      "Common CRMs like HubSpot, Salesforce, Pipedrive, and ServiceTitan are supported. Field mapping is set up during onboarding to match your existing structure.",
  },
  {
    question: "How does deduplication decide what's a match?",
    answer:
      "Matching rules compare contact details like name, phone, and email against existing records, and flag likely duplicates for merging rather than silently combining anything uncertain.",
  },
  {
    question: "Can we see what an automation changed?",
    answer:
      "Yes. Every automated update is logged in an audit trail showing what changed, when, and which workflow made the change.",
  },
  {
    question: "Does this replace our CRM?",
    answer:
      "No. It keeps the CRM you already use accurate and up to date automatically, rather than replacing it with something new.",
  },
];

/* ------------------------------------------------------------------ */

export default function CrmAutomationPage() {
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
              <Button href="/contact" size="lg">Talk to Us About CRM Automation</Button>
              <Button href="/how-it-works" variant="secondary" size="lg">See How It Works</Button>
            </div>
          </div>
          <CrmHeroVisual />
        </div>
      </section>

      {/* 2. KEY CAPABILITIES ------------------------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Key Capabilities"
            description="What happens automatically between a customer interaction and an accurate CRM record."
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

      {/* 3. WHERE CRM DATA BREAKS DOWN -------------------------------------- */}
      <section className="section section-surface">
        <div className="container">
          <SectionHeader
            title="Where Customer Data Falls Apart"
            description="The same three gaps show up regardless of industry or CRM. CRM automation closes each one."
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
            dark
            title="From Interaction to Updated Record"
            description="The same path runs no matter which channel the interaction came through."
          />
          <WorkflowDiagram stages={data.workflow} highlightIndex={2} />
        </div>
      </section>

      {/* 5. BEFORE / AFTER -------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Manual Data Entry vs. Automated CRM Sync"
            description="What changes once every interaction writes back to one accurate record automatically."
          />
          <AnimatedSection className={styles.compare}>
            <div className={`${styles.compareRow} ${styles.compareHead}`}>
              <span />
              <span>Without CRM automation</span>
              <span className={styles.compareAfterHead}>With AI CRM Automation</span>
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
          {/*<div style={{ marginBottom: "var(--space-9)" }}>
            <SectionHeader title="Integrations" description="Connects to the CRM you already run on." />
            <div className={styles.integrationRow}>
              {data.integrations.map((i) => (
                <span key={i} className={styles.integrationChip}>{i}</span>
              ))}
            </div>
          </div>*/}

          <div className={styles.faqLayout}>
            <SectionHeader
              title="CRM Automation FAQs"
              description="Answers to the questions we hear most before a rollout."
            />
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA / FOOTER SECTION ------------------------------------------------ */}
      <CTASection
        title="Ready for One Accurate Customer Record?"
        description="We'll show you exactly how CRM automation fits into the systems you already use."
        primaryLabel="Get Your AI Audit"
        secondaryLabel="See All Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}