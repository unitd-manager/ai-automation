import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FAQAccordion from "@/components/sections/FAQAccordion";
import type { FAQItem } from "@/data/pricing";
import { industries } from "@/data/industries";
import { buildMetadata } from "@/lib/metadata";
import { agents, flow } from "../how-it-works/Content";
import AboutMindMap from "./AboutMindMap";
import WorkflowDemo from "./WorkflowDemo";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "United Technologies is an AI automation partner for US small and mid-size businesses. We map how your business runs, then build the workflow that answers, qualifies, books and follows up.",
  path: "/about",
});

const tools = ["HubSpot", "GoHighLevel", "Salesforce", "ServiceTitan", "Google Calendar", "Twilio", "Zapier", "Make", "n8n"];

// How we deliver, one step per principle. Each step maps onto the workflow above it.
const process = [
  {
    step: "Map",
    principle: "Process before product",
    body: "We map intake, scheduling and follow-up first. The AI is built to fit what we find, not the other way around.",
    get: "A clear map of where leads stall today",
  },
  {
    step: "Build",
    principle: "Speed wins the work",
    body: "The business that replies first usually gets the job. We script and tune the response and booking agent around your services and your tone.",
    get: "A voice and SMS agent tested on real call scenarios",
  },
  {
    step: "Connect",
    principle: "Connected by default",
    body: "Every system plugs into your CRM and calendar, with no new silos to manage and no forced platform switch.",
    get: "Phone, CRM and calendar that update each other",
  },
  {
    step: "Monitor",
    principle: "No black box",
    body: "We watch the conversations, report on results and adjust the workflow as your business changes.",
    get: "Reporting and ongoing tuning after launch",
  },
];

const aboutFaqs: FAQItem[] = [
  {
    question: "Do we need to replace our current software?",
    answer: "No. We build on top of the CRM, phone system, and calendar you already use. If a tool is missing, we'll recommend one — but we never force a platform switch.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Most first workflows go live in two to four weeks, starting with a discovery session to map where leads stall today.",
  },
  {
    question: "Will the AI sound robotic to our customers?",
    answer: "We script and tune every agent around your business, your services, and your tone — and test it against real call scenarios before launch.",
  },
  {
    question: "What happens after launch?",
    answer: "We monitor conversations, report on results, and adjust the system as your business changes. You're never left with a black box.",
  },
];

// The six shared workflow steps split between the two agents (first four / last two).
const AGENT_SPLIT = 4;

export default function AboutPage() {
  const groups = [
    { agent: agents[0], steps: flow.slice(0, AGENT_SPLIT), offset: 0 },
    { agent: agents[1], steps: flow.slice(AGENT_SPLIT), offset: AGENT_SPLIT },
  ];

  return (
    <div className={styles.page}>
      {/* Hero */}
      <header className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <span className={`${styles.label} ${styles.labelBox}`}>About United Technologies</span>
            <h1 className={styles.heroTitle}>
              The system behind <em>every answered call.</em>
            </h1>
            <p className={styles.lead}>
              We&apos;re an AI automation partner for US small and mid-size businesses. We map how your business
              actually runs, then build the workflow that answers, qualifies, books and follows up, so nothing slips
              between the first call and the finished job.
            </p>
            <div className={styles.heroCta}>
              <Link href="/resources/ai-audit" className={`${styles.btn} ${styles.btnPrimary}`}>
                Get a free AI audit <ArrowRight size={16} />
              </Link>
              <Link href="/how-it-works" className={`${styles.btn} ${styles.btnLine}`}>
                See how it works
              </Link>
            </div>
          </div>
          <WorkflowDemo />
        </div>
      </header>

      {/* Mind map */}
      <section className="section" id="map">
        <div className="container">
          <span className={styles.label}>The idea, mapped</span>
          <h2 className={styles.h2}>One idea at the center of everything we build.</h2>
          <AboutMindMap />
        </div>
      </section>

      {/* Workflow: one flow, two agents */}
      <section className={`section ${styles.tight}`}>
        <div className="container">
          <span className={styles.label}>The workflow</span>
          <h2 className={styles.h2}>One workflow. Two agents.</h2>
          <p className={`${styles.lead} ${styles.sectionLead}`}>
            Every engagement runs on the same spine: a customer reaches out, the first agent handles the response and
            the booking, and the second keeps the relationship going.
          </p>

          <div className={styles.flowBoard}>
            {groups.map((g, gi) => (
              <div key={g.agent.name} className={`${styles.agentGroup} ${gi === 0 ? styles.groupWide : styles.groupNarrow}`}>
                <div className={styles.agentHead}>
                  <b>{g.agent.name}</b>
                  <span>{g.agent.sub}</span>
                </div>
                <ol className={styles.steps}>
                  {g.steps.map((s, i) => (
                    <li key={s} className={styles.stepItem}>
                      <span className={`${styles.stepNo} mono`}>{String(g.offset + i + 1).padStart(2, "0")}</span>
                      <span className={styles.stepText}>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className={`section ${styles.tight}`}>
        <div className={`container ${styles.processGrid}`}>
          <div className={styles.processIntro}>
            <span className={styles.label}>How we work</span>
            <h2 className={styles.h2}>Map it. Build it. Connect it. Keep it sharp.</h2>
            <p className={styles.lead}>
              Four steps, each tied to a principle we won&apos;t trade away. Most first workflows go live in two to
              four weeks.
            </p>
            <div className={styles.toolsBlock}>
              <span className={styles.label}>Built on the tools you use</span>
              <div className={styles.toolChips}>
                {tools.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          <ol className={styles.process}>
            {process.map((p, i) => (
              <li key={p.step} className={styles.processStep}>
                <span className={`${styles.processNo} mono`}>{String(i + 1).padStart(2, "0")}</span>
                <div className={styles.processBody}>
                  <div className={styles.processTop}>
                    <h3>{p.step}</h3>
                    <span className={styles.principle}>{p.principle}</span>
                  </div>
                  <p>{p.body}</p>
                  <span className={styles.getLine}>
                    <b>You get:</b> {p.get}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Industries */}
      <section className={`section ${styles.tight}`}>
        <div className="container">
          <span className={styles.label}>Who we serve</span>
          <h2 className={styles.h2}>Industries where response time decides revenue.</h2>
          <div className={styles.industries}>
            {industries.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className={styles.industry}>
                <h3>{ind.name}</h3>
                <p className={styles.segments}>{ind.segments.join(" · ")}</p>
                <p className={styles.flowLine}>
                  <span>{ind.workflow[0]}</span>
                  <i aria-hidden />
                  <span>{ind.workflow[ind.workflow.length - 1]}</span>
                </p>
                <span className={styles.explore}>
                  Explore industry <ArrowRight size={15} aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`section ${styles.tight}`}>
        <div className={`container ${styles.faqGrid}`}>
          <div>
            <span className={styles.label}>Working with us</span>
            <h2 className={styles.h2}>Questions businesses ask us first</h2>
          </div>
          <FAQAccordion items={aboutFaqs} />
        </div>
      </section>

      {/* CTA */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div>
              <h2>See where your leads are slipping through.</h2>
              <p>Book a free 30-minute AI audit. We&apos;ll map your response gaps and show you what automation would change.</p>
            </div>
            <Link href="/resources/ai-audit" className={`${styles.btn} ${styles.btnWhite}`}>
              Book your free audit <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
