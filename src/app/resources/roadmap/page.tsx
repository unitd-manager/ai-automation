import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Implementation Roadmap",
  description: "What a typical automation implementation timeline looks like, from kickoff to handover.",
  path: "/resources/roadmap",
});

const phases = [
  { week: "Week 1", title: "Discovery & Design", body: "We map your current process, identify the peak-emergency moment, and design the workflow around it.", deliverables: ["Current-state workflow map", "Automation scope and success criteria", "Conversation and escalation plan"] },
  { week: "Weeks 2–3", title: "Build & Integrate", body: "We build the automation and connect it to your CRM, calendar, and phone or chat channels.", deliverables: ["Working automation workflow", "System integrations and data mapping", "Test scenarios and edge cases"] },
  { week: "Week 4", title: "Test, Deploy & Handover", body: "We test against real scenarios, go live, and walk your team through how the system works.", deliverables: ["Launch-ready workflow", "Team handover and operating guide", "Initial performance baseline"] },
];

const principles = [
  { number: "01", title: "Start with one critical workflow", body: "The fastest path to value is a focused system that solves one expensive problem exceptionally well." },
  { number: "02", title: "Design around your real tools", body: "Your CRM, calendar, phone system, and team habits shape the build. The roadmap accounts for what already works." },
  { number: "03", title: "Make the human handoff explicit", body: "Automation handles the repeatable work, while clear escalation rules keep people in control of exceptions." },
  { number: "04", title: "Measure before you optimize", body: "We establish a baseline for response time, captured leads, bookings, or saved effort before launch." },
];

const teamRoles = [
  { title: "Your team brings the context", body: "Share how the process works today, where it breaks, and what a great customer experience looks like." },
  { title: "We bring the system design", body: "We translate that context into workflow logic, integrations, prompts, escalation rules, and test scenarios." },
  { title: "Everyone validates the result", body: "Your team reviews real-world behavior before launch so the workflow is useful, accurate, and ready to own." },
];

const faqs = [
  { question: "Is every implementation exactly four weeks?", answer: "No. Four weeks is a typical single-workflow engagement. Larger builds, multiple locations, or complex integrations are scoped around the systems and workflows involved." },
  { question: "What do you need from our team?", answer: "Usually a subject-matter expert, access to the relevant tools, examples of common customer conversations, and time for review and testing." },
  { question: "Can we start with only one workflow?", answer: "Yes. Starting with one high-impact workflow is often the best way to prove value, establish the operating model, and create a foundation for the next system." },
  { question: "What happens after handover?", answer: "You receive documentation and a working operating process. Ongoing monitoring, optimization, and additional workflows can be scoped separately." },
];

export default function RoadmapPage() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <h1 className={styles.heroTitle}>What Implementation Actually Looks Like.</h1>
          <p className={styles.heroCopy}>
            A single-workflow (DWY) engagement typically runs four weeks from kickoff to handover. Larger
            infrastructure builds are scoped individually based on the number of systems involved.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            title="A Roadmap Built for Real Operations"
            description="Good automation planning is less about adding tools and more about making the next decision obvious."
          />
          <div className={styles.principlesGrid}>
            {principles.map((principle) => (
              <article key={principle.number} className={styles.principleCard}>
                <span className={`${styles.principleNumber} mono`}>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <SectionHeader
            title="A Typical Four-Week Build"
            description="Each phase ends with a concrete artifact or decision, so the project keeps moving and your team can see what is changing."
          />
          <div className={styles.phaseGrid}>
            {phases.map((p) => (
              <div key={p.title} className={styles.phaseCard}>
                <span className={`${styles.phaseWeek} mono`}>{p.week}</span>
                <h3 className={styles.phaseTitle}>{p.title}</h3>
                <p className={styles.phaseBody}>{p.body}</p>
                <ul className={styles.deliverables}>
                  {p.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.rolesLayout}>
            <div>
              <p className={styles.eyebrow}>A shared build</p>
              <h2 className={styles.rolesTitle}>What your team can expect from the process.</h2>
              <p className={styles.rolesIntro}>The roadmap is collaborative without making your team responsible for figuring out the technology.</p>
            </div>
            <div className={styles.rolesList}>
              {teamRoles.map((role, index) => (
                <div key={role.title} className={styles.roleItem}>
                  <span className={`${styles.roleIndex} mono`}>0{index + 1}</span>
                  <div><h3>{role.title}</h3><p>{role.body}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <SectionHeader title="Roadmap Questions" description="A few practical details about timing, collaboration, and what happens after launch." />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        title="Get a Roadmap Scoped to Your Business."
        description="An AI Audit produces a specific implementation roadmap — priority order, timeline, and cost — for your actual process."
      />
    </>
  );
}
