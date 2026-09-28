import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/animations/AnimatedSection";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "How It Works",
  description: "From business problem to AI-powered workflow — the eight-step process behind every engagement.",
  path: "/how-it-works",
});

const steps = [
  { title: "Discover", body: "We start by understanding how work actually moves through your business today — calls, forms, spreadsheets, and the tools your team already uses." },
  { title: "Identify the Pain Point", body: "We pinpoint the specific step where leads go cold, calls go unanswered, or admin work piles up." },
  { title: "Measure Business Impact", body: "We quantify what that pain point costs — in lost leads, wasted hours, or missed appointments — so the priority is based on numbers, not guesswork." },
  { title: "Find the Peak Emergency", body: "We identify the moment demand spikes and speed matters most, since that's usually where automation returns the most." },
  { title: "Design the AI Solution", body: "We architect a workflow around that specific moment — not a generic chatbot, but a system built for your process." },
  { title: "Build & Integrate", body: "We build the automation and connect it to your CRM, calendar, and phone systems, so it works with what you already run on." },
  { title: "Test & Deploy", body: "We test against real scenarios — including edge cases and busy periods — before the workflow goes live." },
  { title: "Monitor & Optimize", body: "We track performance after launch and refine the workflow as your business and call volume change." },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <h1 className={styles.heroTitle}>From Business Problem to AI-Powered Workflow.</h1>
          <p className={styles.heroCopy}>
            Every engagement follows the same disciplined process. It starts with your actual business process, not
            a template — and it ends with a system your team can rely on.
          </p>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <SectionHeader title="The Eight-Step Process" />
          <div className={styles.timeline}>
            {steps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.03} className={styles.timelineStep}>
                <div className={styles.markerCol}>
                  <span className={styles.stepDot}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.stepLine} aria-hidden />
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepBody}>{step.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="See This Process Applied to Your Business."
        description="An AI Audit is step one — discovery and pain-point identification, scoped to your business specifically."
      />
    </>
  );
}
