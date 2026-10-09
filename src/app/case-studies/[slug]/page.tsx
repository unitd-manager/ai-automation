import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import CTASection from "@/components/sections/CTASection";
import WorkflowDiagram from "@/components/workflows/LazyWorkflowDiagram";
import { caseStudies } from "@/data/pricing";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return buildMetadata({
      title: "Case Study Not Found",
      description: "Explore AI automation workflow examples from United Technologies.",
      path: `/case-studies/${slug}`,
    });
  }

  return buildMetadata({
    title: `${study.client} Case Study`,
    description: study.challenge,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) notFound();

  const storySections = [
    { label: "The challenge", title: "Where the process broke down", text: study.challenge },
    { label: "The existing workflow", title: "How it worked before", text: study.existingWorkflow },
    { label: "The solution", title: "A workflow built around the need", text: study.solution },
    { label: "Implementation", title: "Putting the system in place", text: study.implementation },
  ];

  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <Link href="/case-studies" className={styles.backLink}>
            <ArrowLeft size={16} aria-hidden="true" /> All case studies
          </Link>
          <div className={styles.heroContent}>
            <div className={styles.heroMeta}>
              <span className={`${styles.industry} mono`}>{study.industry}</span>
              {study.illustrative && <span className={styles.disclaimer}>Illustrative workflow</span>}
            </div>
            <h1 className={styles.title}>{study.client}</h1>
            <p className={styles.lead}>{study.challenge}</p>
          </div>
          <div className={styles.metricGrid} aria-label="Workflow highlights">
            {study.metrics.map((metric) => (
              <div className={styles.metric} key={metric.label}>
                <span className={`${styles.metricValue} mono`}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
              </div>
            ))}
          </div>
          <p className={styles.metricNote}>
            Workflow goals shown for illustration; these are not verified client results.
          </p>
        </div>
      </section>

      <section className={`section ${styles.storySection}`}>
        <div className="container">
          <div className={styles.sectionIntro}>
            <span className={styles.kicker}>Workflow overview</span>
            <h2>From the first inquiry to a clear next step.</h2>
          </div>
          <div className={styles.storyGrid}>
            {storySections.map((section, index) => (
              <article className={styles.storyCard} key={section.label}>
                <span className={`${styles.storyIndex} mono`}>{String(index + 1).padStart(2, "0")}</span>
                <p className={styles.storyLabel}>{section.label}</p>
                <h3>{section.title}</h3>
                <p className={styles.storyText}>{section.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.workflowSection}`}>
        <div className="container">
          <div className={styles.workflowHeading}>
            <div>
              <span className={styles.kicker}>The automation path</span>
              <h2>How the workflow moves</h2>
            </div>
            <p>Each step passes the right information forward, with a clear action or handoff.</p>
          </div>
          <div className={styles.workflowPanel}>
            <WorkflowDiagram stages={study.workflow} />
          </div>
          <div className={styles.outcome}>
            <div>
              <span className={styles.kicker}>Intended outcome</span>
              <h3>A faster, more consistent customer experience</h3>
            </div>
            <p>{study.outcome}</p>
            <Link href="/contact" className={styles.contactLink}>
              Discuss a workflow <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Map a workflow to your business."
        description="An AI Audit identifies where automation can have the greatest impact on your customer and operations workflows."
        primaryLabel="Get Your AI Audit"
        primaryHref="/resources/ai-audit"
        secondaryLabel="All Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}