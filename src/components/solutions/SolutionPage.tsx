import type { ReactNode } from "react";
import {
  Check, Clock, Minus, PhoneMissed, Route, ShieldQuestion, Timer, UserCheck,
  CalendarX, CalendarClock, BellOff, FileWarning, FolderInput, Database, Copy,
  MessageCircleQuestion, MessagesSquare, Hourglass, Repeat, HelpCircle, Moon,
  type LucideIcon,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import WorkflowDiagram from "@/components/workflows/LazyWorkflowDiagram";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import type { Solution } from "@/data/solutions";
import type { SolutionPageContent } from "@/data/solutionPages";
import styles from "./SolutionPage.module.css";

const icons: Record<string, LucideIcon> = {
  PhoneMissed, Clock, UserCheck, CalendarX, CalendarClock, BellOff, FileWarning,
  FolderInput, Database, Copy, MessageCircleQuestion, MessagesSquare, Hourglass,
  Repeat, HelpCircle, Moon,
};
const capIcons = [Timer, ShieldQuestion, Route, Check];

/**
 * One layout for every solution page — 6 sections + CTA:
 * 1 Hero · 2 Where it breaks · 3 How it works · 4 Capabilities · 5 Before/After · 6 FAQ
 */
export default function SolutionPage({
  data,
  content,
  visual,
}: {
  data: Solution;
  content: SolutionPageContent;
  visual: ReactNode;
}) {
  return (
    <>
      {/* 1. HERO */}
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
              <Button href="/contact" size="lg">{content.heroCta}</Button>
              <Button href="/how-it-works" variant="secondary" size="lg">See How It Works</Button>
            </div>
          </div>
          {visual}
        </div>
      </section>

      {/* 2. WHERE IT BREAKS — pain point → peak moment → cost → AI fix */}
      <section className="section section-surface">
        <div className="container">
          <SectionHeader title={content.painTitle} description={content.painDescription} />
          <div className={styles.gapList}>
            {content.pains.map((row, i) => {
              const Icon = icons[row.icon] ?? HelpCircle;
              return (
                <AnimatedSection key={row.title} delay={i * 0.06} className={styles.gapRow}>
                  <div className={styles.gapHead}>
                    <span className={styles.gapIcon}><Icon size={22} /></span>
                    <h3 className={styles.gapTitle}>{row.title}</h3>
                  </div>
                  <div className={styles.gapCell}>
                    <span className={`${styles.gapLabel} mono`}>PEAK MOMENT</span>
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

      {/* 3. HOW IT WORKS (dark) */}
      <section className={`section section-dark ${styles.darkSection}`}>
        <div className={styles.darkGlow} aria-hidden />
        <div className={`container ${styles.darkInner}`}>
          <SectionHeader dark title={content.workflowTitle} description={content.workflowDescription} />
          <WorkflowDiagram stages={data.workflow} highlightIndex={content.highlightStage} />
        </div>
      </section>

      {/* 4. KEY CAPABILITIES */}
      <section className="section">
        <div className="container">
          <SectionHeader title="Key Capabilities" description={content.capDescription} />
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

      {/* 5. BEFORE / AFTER */}
      <section className="section section-surface">
        <div className="container">
          <SectionHeader title={content.compareTitle} description={content.compareDescription} />
          <AnimatedSection className={styles.compare}>
            <div className={`${styles.compareRow} ${styles.compareHead}`}>
              <span />
              <span>Without automation</span>
              <span className={styles.compareAfterHead}>With {data.name}</span>
            </div>
            {content.compareRows.map((r) => (
              <div key={r.label} className={styles.compareRow}>
                <span className={styles.compareLabel}>{r.label}</span>
                <span className={styles.compareBefore}><Minus size={16} />{r.before}</span>
                <span className={styles.compareAfter}><Check size={16} />{r.after}</span>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="section">
        <div className="container">
          <div className={styles.faqLayout}>
            <SectionHeader title={`${data.name} FAQs`} description="Answers to the questions we hear most before a rollout." />
            <FAQAccordion items={content.faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={content.ctaTitle}
        description={content.ctaDescription}
        primaryLabel="Get Your AI Audit"
        secondaryLabel="See All Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}