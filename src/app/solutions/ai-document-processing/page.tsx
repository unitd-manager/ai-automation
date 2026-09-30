import type { Metadata } from "next";
import { AlertTriangle, Check, ClipboardCheck, FileSearch, Minus, Route, ScanLine, Timer } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import WorkflowDiagram from "@/components/workflows/WorkflowDiagram";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import DocumentHeroVisual from "@/components/hero/DocumentHeroVisual";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { solutions } from "@/data/solutions";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

const data = solutions.find((s) => s.slug === "document-automation")!;

export const metadata: Metadata = buildMetadata({
  title: data.name,
  description: data.problem,
  path: "/solutions/ai-document-processing",
});

/* ------------------------------------------------------------------ */
/* Process-based content — not tied to one industry                    */
/* ------------------------------------------------------------------ */

const capIcons = [ScanLine, ClipboardCheck, Route, AlertTriangle];

const gapRows = [
  {
    icon: Timer,
    title: "Slow, manual data entry",
    moment: "Invoices, estimates, permits, and forms arrive as PDFs, scans, or photos and someone has to type the details in by hand.",
    cost: "Hours spent on repetitive entry, with the backlog growing during busy periods.",
    fix: "Documents are read and structured automatically, extracting the fields that matter without manual typing.",
  },
  {
    icon: FileSearch,
    title: "Errors that propagate downstream",
    moment: "A typo or missed field during manual entry makes it into the system and isn't caught until it causes a problem later.",
    cost: "Incorrect invoices, mismatched records, and time spent tracing errors back to their source.",
    fix: "Validation rules catch errors before they propagate, flagging anything that doesn't match expected values.",
  },
  {
    icon: AlertTriangle,
    title: "Exceptions that get silently dropped",
    moment: "A document doesn't fit the expected format and either gets stuck in a queue or ignored entirely.",
    cost: "Lost invoices, missed permits, and no visibility into what fell through the cracks.",
    fix: "Exceptions are flagged for human review rather than silently dropped, so nothing gets lost.",
  },
];

const compareRows = [
  { label: "Data entry", before: "Manual, by hand", after: "Extracted automatically" },
  { label: "Accuracy", before: "Prone to typos and missed fields", after: "Validated before it's used" },
  { label: "Routing", before: "Manual sorting by document type", after: "Automatic, by type or department" },
  { label: "Exceptions", before: "Stuck in a queue or dropped", after: "Flagged for review" },
];

const faqs = [
  {
    question: "What types of documents can it process?",
    answer:
      "Invoices, estimates, permits, and intake forms are common examples. It works from PDFs, scans, and photos, not just clean digital originals.",
  },
  {
    question: "How accurate is the data extraction?",
    answer:
      "Validation rules check extracted fields against expected formats and values before they're used, and anything uncertain is flagged rather than assumed.",
  },
  {
    question: "What happens to documents it can't process confidently?",
    answer:
      "They're flagged as exceptions for human review instead of being silently dropped or forced through with bad data.",
  },
  {
    question: "Which systems can it route documents into?",
    answer:
      "Common destinations include QuickBooks, DocuSign, Google Drive, and SharePoint. Other systems can be scoped during setup.",
  },
];

/* ------------------------------------------------------------------ */

export default function DocumentProcessingPage() {
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
              <Button href="/contact" size="lg">Talk to Us About Document Processing</Button>
              <Button href="/how-it-works" variant="secondary" size="lg">See How It Works</Button>
            </div>
          </div>
          <DocumentHeroVisual />
        </div>
      </section>

      {/* 2. KEY CAPABILITIES ------------------------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHeader
            index="01"
            title="Key Capabilities"
            description="What happens automatically between a document arriving and clean data landing in your systems."
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

      {/* 3. WHERE PAPERWORK BREAKS DOWN -------------------------------------- */}
      <section className="section section-surface">
        <div className="container">
          <SectionHeader
            index="02"
            title="Where Paperwork Slows Everything Down"
            description="The same three gaps show up regardless of industry or document type. Document automation closes each one."
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
            title="From Document Received to Data Routed"
            description="The same path runs no matter the document type or where it came from."
          />
          <WorkflowDiagram stages={data.workflow} highlightIndex={1} />
        </div>
      </section>

      {/* 5. BEFORE / AFTER -------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHeader
            index="04"
            title="Manual Entry vs. Automated Document Processing"
            description="What changes once documents are read, validated, and routed on their own."
          />
          <AnimatedSection className={styles.compare}>
            <div className={`${styles.compareRow} ${styles.compareHead}`}>
              <span />
              <span>Without document automation</span>
              <span className={styles.compareAfterHead}>With AI Document Processing</span>
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
            <SectionHeader title="Integrations" description="Connects to the systems you already file and route documents into." />
            <div className={styles.integrationRow}>
              {data.integrations.map((i) => (
                <span key={i} className={styles.integrationChip}>{i}</span>
              ))}
            </div>
          </div>

          <div className={styles.faqLayout}>
            <SectionHeader
              index="05"
              title="Document Processing FAQs"
              description="Answers to the questions we hear most before a rollout."
            />
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA / FOOTER SECTION ------------------------------------------------ */}
      <CTASection
        title="Ready to Stop Typing What You Could Automate?"
        description="We'll show you exactly how document automation fits into the systems you already file into."
        primaryLabel="Get Your AI Audit"
        secondaryLabel="See All Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}