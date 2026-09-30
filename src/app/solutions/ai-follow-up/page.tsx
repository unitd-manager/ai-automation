import type { Metadata } from "next";
import { Check, Clock, FileWarning, Minus, PauseCircle, ThumbsDown, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import WorkflowDiagram from "@/components/workflows/WorkflowDiagram";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FollowUpHeroVisual from "@/components/hero/FollowUpHeroVisual";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { solutions } from "@/data/solutions";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

const data = solutions.find((s) => s.slug === "follow-up-automation")!;

export const metadata: Metadata = buildMetadata({
  title: data.name,
  description: data.problem,
  path: "/solutions/ai-follow-up",
});

/* ------------------------------------------------------------------ */
/* Process-based content — not tied to one industry                    */
/* ------------------------------------------------------------------ */

const capIcons = [Clock, PauseCircle, TrendingUp, Check];

const gapRows = [
  {
    icon: FileWarning,
    title: "The quote that goes quiet",
    moment: "An estimate or quote is sent, and then nobody follows up unless the customer reaches out first.",
    cost: "Open opportunities sit untouched until they're forgotten or lost to a competitor.",
    fix: "A structured sequence starts automatically the moment a quote goes out, no manual reminder needed.",
  },
  {
    icon: Clock,
    title: "Inconsistent timing",
    moment: "Follow-up happens whenever a rep remembers to do it, if at all, so timing varies deal to deal.",
    cost: "Some leads get chased too hard, others not at all, and the pattern is impossible to replicate.",
    fix: "Multi-touch sequences across SMS and email run on a consistent, defined cadence for every opportunity.",
  },
  {
    icon: ThumbsDown,
    title: "No record of why deals were lost",
    moment: "A deal quietly goes cold and nobody captures why, so the same pattern repeats on the next one.",
    cost: "No visibility into win/loss reasons, and no way to improve the process over time.",
    fix: "Outcomes are logged automatically — won, lost, or paused — with the reason captured for reporting.",
  },
];

const compareRows = [
  { label: "After a quote is sent", before: "Follow-up if someone remembers", after: "Sequence starts automatically" },
  { label: "Cadence", before: "Inconsistent, rep-dependent", after: "Defined multi-touch schedule" },
  { label: "Customer replies", before: "Easy to keep messaging anyway", after: "Sequence pauses automatically" },
  { label: "Win/loss tracking", before: "Rarely captured", after: "Logged for every opportunity" },
];

const faqs = [
  {
    question: "What triggers a follow-up sequence to start?",
    answer:
      "Typically a quote or estimate being sent, but the trigger can be matched to whatever moment makes sense in your sales process.",
  },
  {
    question: "What happens when a customer replies?",
    answer:
      "The sequence pauses automatically as soon as a reply comes in, so nobody keeps getting messaged after they've already responded.",
  },
  {
    question: "Can the cadence and channels be customized?",
    answer:
      "Yes. The number of touches, the gap between them, and whether each touch is SMS or email are all configured to match your process.",
  },
  {
    question: "How does escalation to a rep work?",
    answer:
      "At a defined point in the sequence, or as soon as a lead shows strong interest, the opportunity is handed to a rep with the full history attached.",
  },
];

/* ------------------------------------------------------------------ */

export default function FollowUpPage() {
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
              <Button href="/contact" size="lg">Talk to Us About Follow-Up</Button>
              <Button href="/how-it-works" variant="secondary" size="lg">See How It Works</Button>
            </div>
          </div>
          <FollowUpHeroVisual />
        </div>
      </section>

      {/* 2. KEY CAPABILITIES ------------------------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Key Capabilities"
            description="What happens automatically between a quote going out and a deal being won, lost, or paused."
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

      {/* 3. WHERE OPPORTUNITIES GO COLD -------------------------------------- */}
      <section className="section section-surface">
        <div className="container">
          <SectionHeader
            title="Where Open Opportunities Go Cold"
            description="The same three gaps show up regardless of industry or deal size. Follow-up automation closes each one."
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
            title="From Quote Sent to Outcome Logged"
            description="The same path runs no matter the deal size or how long it takes to close."
          />
          <WorkflowDiagram stages={data.workflow} highlightIndex={1} />
        </div>
      </section>

      {/* 5. BEFORE / AFTER -------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Manual Follow-Up vs. Automated Sequences"
            description="What changes once every open opportunity is followed up on a consistent cadence."
          />
          <AnimatedSection className={styles.compare}>
            <div className={`${styles.compareRow} ${styles.compareHead}`}>
              <span />
              <span>Without follow-up automation</span>
              <span className={styles.compareAfterHead}>With AI Follow-Up</span>
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
            <SectionHeader title="Integrations" description="Connects to the CRM and messaging tools you already run on." />
            <div className={styles.integrationRow}>
              {data.integrations.map((i) => (
                <span key={i} className={styles.integrationChip}>{i}</span>
              ))}
            </div>
          </div>*/}

          <div className={styles.faqLayout}>
            <SectionHeader
              title="Follow-Up FAQs"
              description="Answers to the questions we hear most before a rollout."
            />
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA / FOOTER SECTION ------------------------------------------------ */}
      <CTASection
        title="Ready to Stop Losing Deals to No Follow-Up?"
        description="We'll show you exactly how follow-up automation fits into your existing sales process."
        primaryLabel="Get Your AI Audit"
        secondaryLabel="See All Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}