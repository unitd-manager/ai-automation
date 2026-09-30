import type { Metadata } from "next";
import { Compass, Zap, Link2, Mic, Database, Workflow, FileSearch, LayoutDashboard, Bot } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

// Previous About page, kept for reference. Not indexed; the live page is /about.
export const metadata: Metadata = {
  ...buildMetadata({
    title: "About (Old)",
    description: "United Technologies is an AI automation partner for businesses ready to replace repetitive work with intelligent systems.",
    path: "/about-old",
  }),
  robots: { index: false, follow: false },
};

const beliefs = [
  { icon: Compass, title: "Automation should be built around your process, not the other way around.", body: "We start with how your business actually operates, not a template workflow." },
  { icon: Zap, title: "Speed is the highest-leverage moment in most businesses.", body: "The businesses that win are usually the ones that respond first — automation should protect that moment." },
  { icon: Link2, title: "A system is only as good as what it connects to.", body: "Automation that lives in isolation from your CRM and calendar creates more work, not less." },
];

const techStack = [
  { icon: Mic, label: "Voice & conversational AI" },
  { icon: Database, label: "CRM integrations" },
  { icon: Workflow, label: "Workflow orchestration" },
  { icon: FileSearch, label: "Document intelligence" },
  { icon: LayoutDashboard, label: "Business dashboards" },
  { icon: Bot, label: "Custom agent development" },
];

export default function AboutPage() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <h1 className={styles.heroTitle}>An AI Automation Partner for Businesses Ready to Replace Repetitive Work With Intelligent Systems.</h1>
          <p className={styles.heroCopy}>
            We work with US small and mid-size businesses to design and implement AI workflows that handle the
            repetitive parts of customer response, scheduling, and operations — so your team can focus on the work
            that actually needs a person.
          </p>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <div className={styles.split}>
            <div>
              <h2 className={styles.blockTitle}>Who We Are</h2>
              <p className={styles.blockBody}>
                We&apos;re a team of automation engineers and business process consultants. Every project starts with
                understanding your operations first — the AI comes second, built to fit the process we find, not the
                other way around.
              </p>
            </div>
            <div>
              <h2 className={styles.blockTitle}>Our Approach</h2>
              <p className={styles.blockBody}>
                We look for the moments in your business where speed and consistency matter most — a missed call, an
                unanswered estimate request, a scheduling gap — and we design automation specifically for those
                moments, connected to the systems you already run on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="What We Believe" />
          <div className={styles.beliefList}>
            {beliefs.map((b) => (
              <div key={b.title} className={styles.beliefItem}>
                <span className={styles.beliefIcon}><b.icon size={20} strokeWidth={1.75} /></span>
                <div>
                  <p className={styles.beliefTitle}>{b.title}</p>
                  <p className={styles.beliefBody}>{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <SectionHeader title="How We Work" description="Discovery, measurement, and design come before a single line of automation is built. See the full process on How It Works." />
          <SectionHeader title="Technology" description="We build with the tools best suited to your systems, not a fixed stack." />
          <div className={styles.techGrid}>
            {techStack.map((t) => (
              <div key={t.label} className={styles.techItem}>
                <span className={styles.techIcon}><t.icon size={18} strokeWidth={1.75} /></span>
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Why Automation, Why Now"
        description="The businesses that respond fastest usually win the work. Automation is how you make that consistent, not occasional."
      />
    </>
  );
}
