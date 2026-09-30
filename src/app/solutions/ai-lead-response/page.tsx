import type { Metadata } from "next";
import { Check, Clock, Minus, PhoneMissed, Route, ShieldQuestion, Timer, UserCheck } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import WorkflowDiagram from "@/components/workflows/WorkflowDiagram";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import LeadResponseHeroVisual from "@/components/hero/LeadResponseHeroVisual";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { solutions } from "@/data/solutions";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

const data = solutions.find((s) => s.slug === "ai-lead-response")!;

export const metadata: Metadata = buildMetadata({
  title: data.name,
  description: data.problem,
  path: "/solutions/ai-lead-response",
});

/* ------------------------------------------------------------------ */
/* Process-based content — not tied to one industry                    */
/* ------------------------------------------------------------------ */

const capIcons = [Timer, ShieldQuestion, Route, Check];

const gapRows = [
  {
    icon: PhoneMissed,
    title: "The channel that goes unanswered",
    moment: "A form, call, or message comes in outside business hours, mid-job, or while the team is on another lead.",
    cost: "The lead moves to the next result and contacts a competitor instead.",
    fix: "Every channel gets an immediate, qualified response the moment the inquiry lands, regardless of who's free.",
  },
  {
    icon: Clock,
    title: "The gap between inquiry and reply",
    moment: "A lead reaches out to several providers at once and books with whoever replies first.",
    cost: "Deals are lost on speed alone, before your team even sees the lead.",
    fix: "Sub-minute response on every channel, so you're first to reply regardless of when the inquiry came in.",
  },
  {
    icon: UserCheck,
    title: "The unqualified handoff",
    moment: "A rep picks up a lead with no context — no budget, no timeline, no idea what they actually need.",
    cost: "Wasted calls, mismatched routing, and slower deal cycles.",
    fix: "Qualifying questions run automatically, and the lead lands on the right rep's desk with context attached.",
  },
];

const compareRows = [
  { label: "Time to first response", before: "Hours to next business day", after: "Under a minute" },
  { label: "Coverage", before: "Business hours only", after: "24/7, every channel" },
  { label: "Qualification", before: "Happens on the first call, if at all", after: "Done before a rep is ever involved" },
  { label: "Routing", before: "Manual, by whoever's free", after: "Automatic, by service type or territory" },
];

const faqs = [
  {
    question: "Which channels does it cover?",
    answer:
      "Web forms, missed calls, and chat inquiries are covered as standard. Additional channels like SMS or a specific booking tool can be added during setup.",
  },
  {
    question: "How does it qualify a lead without sounding scripted?",
    answer:
      "Qualifying questions are matched to your actual sales process, not a generic template, so the conversation reads like your team asking, not a form.",
  },
  {
    question: "How does routing decide which rep gets the lead?",
    answer:
      "Routing rules are set up around how you already assign work — by service type, territory, or rep availability — so leads land where they'd go manually, just faster.",
  },
  {
    question: "What does a rep see when a lead is routed to them?",
    answer:
      "The full conversation log and qualification answers are attached to the lead record, so the rep has context before the first call.",
  },
];

/* ------------------------------------------------------------------ */

export default function AiLeadResponsePage() {
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
              <Button href="/contact" size="lg">Talk to Us About Lead Response</Button>
              <Button href="/how-it-works" variant="secondary" size="lg">See How It Works</Button>
            </div>
          </div>
          <LeadResponseHeroVisual />
        </div>
      </section>

      {/* 2. KEY CAPABILITIES ------------------------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHeader
      
            title="Key Capabilities"
            description="What happens automatically between a lead coming in and a rep picking it up."
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

      {/* 3. WHERE LEADS GET LOST ---------------------------------------- */}
      <section className="section section-surface">
        <div className="container">
          <SectionHeader
          
            title="Where Leads Are Lost Between Inquiry and Response"
            description="The same three gaps show up regardless of industry or channel. Lead response automation closes each one."
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
            title="From First Contact to a Routed, Ready Lead"
            description="The same path runs no matter which channel the inquiry came through."
          />
          <WorkflowDiagram stages={data.workflow} highlightIndex={1} />
        </div>
      </section>

      {/* 5. BEFORE / AFTER -------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHeader
           
            title="Manual Follow-Up vs. Automated Lead Response"
            description="What changes once every inquiry gets an immediate, qualified response."
          />
          <AnimatedSection className={styles.compare}>
            <div className={`${styles.compareRow} ${styles.compareHead}`}>
              <span />
              <span>Without lead response automation</span>
              <span className={styles.compareAfterHead}>With AI Lead Response</span>
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
            <SectionHeader title="Integrations" description="Connects to the CRM and channels you already run on." />
            <div className={styles.integrationRow}>
              {data.integrations.map((i) => (
                <span key={i} className={styles.integrationChip}>{i}</span>
              ))}
            </div>
          </div>*/}

          <div className={styles.faqLayout}>
            <SectionHeader
           
              title="Lead Response FAQs"
              description="Answers to the questions we hear most before a rollout."
            />
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA / FOOTER SECTION ------------------------------------------------ */}
      <CTASection
        title="Ready to Stop Losing Leads to Slow Response?"
        description="We'll show you exactly how lead response automation fits into your existing process."
        primaryLabel="Get Your AI Audit"
        secondaryLabel="See All Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}