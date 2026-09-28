import type { Metadata } from "next";
import { Check } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import WorkflowDiagram from "@/components/workflows/WorkflowDiagram";
import CTASection from "@/components/sections/CTASection";
import { solutions } from "@/data/solutions";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

const data = solutions.find((s) => s.slug === "ai-voice-agents")!;

export const metadata: Metadata = buildMetadata({
  title: data.name,
  description: data.problem,
  path: "/solutions/ai-voice-agents",
});

export default function AiVoiceAgentsPage() {
  return (
    <>
      <section className={styles.hero}>
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
            <Button href="/contact" size="lg">Talk to Us About Voice Automation</Button>
          </div>
          <div className={styles.workflowPanel}>
            <WorkflowDiagram stages={data.workflow} dense />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.twoCol}>
            <div>
              <SectionHeader title="Key Capabilities" />
              <ul className={styles.capList}>
                {data.capabilities.map((cap) => (
                  <li key={cap} className={styles.capItem}>
                    <Check size={18} color="#3e5fae" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader title="Integrations" description="Works with your existing phone and dispatch systems." />
              <div className={styles.integrationRow}>
                {data.integrations.map((i) => (
                  <span key={i} className={styles.integrationChip}>{i}</span>
                ))}
              </div>

              <div style={{ marginTop: "2.5rem" }}>
                <SectionHeader title="Business Impact" description={data.impact} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for Every Call to Get Answered?"
        description="We'll walk through your call volume and after-hours patterns to scope the right voice workflow."
        primaryLabel="Get Your AI Audit"
        secondaryLabel="See All Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
