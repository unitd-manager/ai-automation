import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";
import WorkflowDiagram from "@/components/workflows/LazyWorkflowDiagram";
import { getUseCase, useCases } from "@/data/useCases";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

/**
 * The navbar is solid white but turns its links white on "/use-cases/...", which makes them
 * invisible. These overrides apply only while a use case page is shown.
 */
const navFix = `
header a[class*="navLink"] { color: var(--color-primary) !important; }
header a[class*="navLink"]::after { background: var(--color-accent) !important; }
header a[class*="cta"] { background: var(--color-primary) !important; color: #fff !important; }
header a[class*="cta"]:hover { background: var(--color-accent-600) !important; }
header button[class*="mobileToggle"] { color: var(--color-primary) !important; }
`;

export function generateStaticParams() {
  return useCases.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const data = getUseCase((await params).slug);
  if (!data) return {};
  return buildMetadata({ title: `AI Automation for ${data.name}`, description: data.heroDescription, path: `/use-cases/${data.slug}` });
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const data = getUseCase((await params).slug);
  if (!data) notFound();
 
  return (
    <>
      <style>{navFix}</style>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <span className={styles.eyebrow}>{data.eyebrow}</span>
          <h1 className={styles.heroTitle}>{data.heroTitle}</h1>
          <p className={styles.heroDescription}>{data.heroDescription}</p>
          <div className={styles.actions}>
            <Button href="/resources/ai-audit" size="lg">Book a Free Automation Audit</Button>
            <Button href="#workflow" variant="ghost" size="lg">See how it works</Button>
          </div>
          <div className={styles.heroRule} />
          <p className={styles.heroLabel}>Built for</p>
          <div className={styles.tagGrid}>
            {data.targetBusinesses.map((business) => <span key={business} className={styles.tag}>{business}</span>)}
          </div>
        </div>
      </section>

      <section className={`section ${styles.sectionTint}`}>
        <div className="container">
          <SectionHeader index="01" title={`Where ${data.name.toLowerCase()} businesses lose revenue`} description="These are the moments where speed, consistency, and follow-up directly affect the next booking." />
          <div className={styles.cardGrid}>
            {data.painPoints.map((point, index) => <article key={point.title} className={styles.painCard}><span className={`${styles.cardNumber} mono`}>{String(index + 1).padStart(2, "0")}</span><h3>{point.title}</h3><p>{point.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHeader index="02" title="One automation system, built around your workflow" description="Start with the product that solves the highest-value bottleneck, then connect the rest of the customer journey." dark />
          <div className={styles.solutionGrid}>
            {data.solutions.map((solution, index) => <article key={solution.title} className={styles.solutionCard}><span className={`${styles.solutionIndex} mono`}>0{index + 1}</span><h3>{solution.title}</h3><p className={styles.solutionDescription}>{solution.description}</p><ul>{solution.points.map((point) => <li key={point}>{point}</li>)}</ul><a href="/contact" className={styles.solutionLink}>{solution.linkLabel} <span aria-hidden>→</span></a></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader index="03" title="What can we automate?" description="Choose the moments that create the most leverage for your team and your customers." />
          <div className={styles.opportunityGrid}>{data.opportunities.map((opportunity, index) => <div key={opportunity} className={styles.opportunity}><span className={`${styles.opportunityNumber} mono`}>{String(index + 1).padStart(2, "0")}</span><span>{opportunity}</span></div>)}</div>
        </div>
      </section>

      <section id="workflow" className={`section ${styles.workflowSection}`}>
        <div className="container">
          <SectionHeader index="04" title="How the automation works" description="A clear, end-to-end flow from the first call or message to the next useful action." dark />
          <div className={styles.workflowWrap}><WorkflowDiagram stages={data.workflow} /></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader index="05" title="What happens after automation?" description="The result is a faster customer experience and a more predictable operating rhythm." />
          <div className={styles.impactGrid}>{data.impacts.map((impact) => <article key={impact.label} className={styles.impact}><strong>{impact.value}</strong><h3>{impact.label}</h3><p>{impact.description}</p></article>)}</div>
        </div>
      </section>

      <section className={`section ${styles.integrationSection}`}>
        <div className="container integrationLayout"><SectionHeader index="06" title="Connects with the tools you already use" description="We design around your existing systems and add APIs or webhooks where a custom connection is needed." /><div className={styles.integrationGrid}>{data.integrations.map((integration) => <span key={integration} className={styles.integration}>{integration}</span>)}</div></div>
      </section>

      <CTASection title={data.ctaTitle} description={data.ctaDescription} primaryLabel="Book Your Automation Audit" primaryHref="/resources/ai-audit" secondaryLabel="Talk to Us" secondaryHref="/contact" variant="glow" />
    </>
  );
}