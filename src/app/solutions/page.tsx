import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/animations/AnimatedSection";
import WorkflowDiagram from "@/components/workflows/WorkflowDiagram";
import SolutionCard from "@/components/cards/SolutionCard";
import CTASection from "@/components/sections/CTASection";
import { solutions as allSolutions, solutionCategories as allCategories } from "@/data/solutions";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

// Only the solutions that have a dedicated page (matches the Solutions menu).
const solutionCategories = allCategories.slice(0, 3);
const solutions = allSolutions.filter((s) => solutionCategories.includes(s.category));

export const metadata: Metadata = buildMetadata({
  title: "AI Automation Solutions",
  description: "Connected AI systems for lead response, voice, chat, appointments, follow-up, CRM, and documents.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>AI Systems That Turn Manual Work Into Automated Workflows.</h1>
          <p className={styles.heroCopy}>
            We don&apos;t sell isolated AI tools. We design connected systems that move customers, data and business
            processes forward automatically.
          </p>
          <AnimatedSection as="fade-in" className={styles.archWrap}>
            <WorkflowDiagram stages={["Customer", "AI", "Workflow", "Business System", "Human", "Outcome"]} />
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="Seven Connected Solutions" description="Each solution below is built to plug into the others — a lead response system feeds a booking, which feeds follow-up and the CRM." />

          {solutionCategories.map((category) => (
            <div key={category}>
              <h2 className={styles.categoryLabel}>{category}</h2>
              <div className={styles.categoryGrid}>
                {solutions
                  .filter((s) => s.category === category)
                  .map((s) => (
                    <SolutionCard key={s.slug} solution={s} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Not Sure Which Workflow to Start With?"
        description="An AI Audit shows you exactly where automation will return the most for your business."
      />
    </>
  );
}