import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import FAQAccordion from "@/components/sections/FAQAccordion";
import type { FAQItem } from "@/data/pricing";
import { buildMetadata } from "@/lib/metadata";
import WorkflowDemo from "./WorkflowDemo";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "United Technologies is an AI automation partner for US small and mid-size businesses — we map how your business runs, then build the systems that respond, qualify, and book.",
  path: "/about",
});

const tools = ["HubSpot", "GoHighLevel", "Salesforce", "ServiceTitan", "Google Calendar", "Twilio", "Zapier", "Make", "n8n"];

const principles = [
  { title: "Process before product", body: "We map intake, scheduling, and follow-up first. The AI is built to fit what we find." },
  { title: "Speed wins the work", body: "The business that replies first usually gets the job. We protect that moment." },
  { title: "Connected by default", body: "Every system plugs into your CRM and calendar — no new silos to manage." },
];

const before = [
  { lead: "After-hours calls go to voicemail", rest: " — and callers try the next company." },
  { lead: "Estimate requests wait days", rest: " in a shared inbox." },
  { lead: "Follow-ups depend on memory", rest: ", so warm leads go cold." },
  { lead: "Staff re-type data", rest: " between phone, CRM, and calendar." },
];

const after = [
  { lead: "Every call answered", rest: " by a voice agent, 24/7." },
  { lead: "Instant replies", rest: " to web, SMS, and email inquiries." },
  { lead: "Automatic follow-up sequences", rest: " until the lead books or declines." },
  { lead: "One source of truth", rest: " — CRM and calendar update themselves." },
];

// TODO: replace "20XX" with real company dates before launch.
const milestones = [
  { year: "20XX", title: "The first missed call", body: "Founded after seeing local businesses lose jobs to slow response." },
  { year: "20XX", title: "First voice agent live", body: "Launched after-hours call handling for a home services client." },
  { year: "20XX", title: "Full-stack automation", body: "Expanded into CRM, scheduling, and document workflows." },
  { year: "Today", title: "Three industries", body: "Serving home services, healthcare, and construction teams across the US." },
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

function PixelMark() {
  return (
    <div className={styles.pixels} aria-hidden>
      <i style={{ width: 22, height: 18 }} />
      <i style={{ width: 14, height: 12, opacity: 0.7 }} />
      <i style={{ width: 8, height: 7, opacity: 0.45 }} />
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <header className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <span className={`${styles.label} ${styles.labelBox}`}>About United Technologies</span>
            <h1 className={styles.heroTitle}>
              Every lead answered. <em>Every time.</em>
            </h1>
            <p className={styles.lead}>
              We&apos;re an AI automation partner for US small and mid-size businesses. We map how your business
              actually runs, then build the systems that respond, qualify, and book — while your team does the work
              that needs a person.
            </p>
            <div className={styles.heroCta}>
              <Link href="/resources/ai-audit" className={`${styles.btn} ${styles.btnPrimary}`}>
                Get a free AI audit <ArrowRight size={16} />
              </Link>
              <a href="#story" className={`${styles.btn} ${styles.btnLine}`}>Read our story</a>
            </div>
          </div>
          <WorkflowDemo />
        </div>
      </header>

      {/* Tools strip */}
      <div className={styles.tools} aria-label="Tools we integrate with">
        <div className={`container ${styles.toolsInner}`}>
          <span className={styles.label}>Built on the tools you use</span>
          <div className={styles.viewport}>
            <div className={styles.track}>
              {[...tools, ...tools].map((t, i) => (
                <span key={`${t}-${i}`} aria-hidden={i >= tools.length || undefined}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Who we are — bento */}
      <section className="section" id="story">
        <div className="container">
          <span className={styles.label}>Who we are</span>
          <h2 className={styles.h2}>Automation engineers who start with operations.</h2>
          <div className={styles.bento}>
            <div className={`${styles.tile} ${styles.w4}`}>
              <span className={styles.label}>Our story</span>
              <p className={styles.quote}>
                &ldquo;We kept seeing good businesses lose work for one reason: nobody picked up in time. That&apos;s
                not a hard problem — it&apos;s a consistency problem.&rdquo;
              </p>
              {/* TODO: replace with the founder's real name, initials, and photo. */}
              <div className={styles.who}>
                <div className={styles.avatar}>UT</div>
                <div>
                  <b>Founder Name</b>
                  <span>Founder &amp; CEO</span>
                </div>
              </div>
            </div>
            <div className={`${styles.tile} ${styles.w2} ${styles.tileDark}`}>
              <span className={styles.label}>Mission</span>
              <h3>Make fast, consistent response the default for every growing business.</h3>
            </div>
            {principles.map((p) => (
              <div key={p.title} className={`${styles.tile} ${styles.w2}`}>
                <PixelMark />
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
            <div className={`${styles.tile} ${styles.w3}`}>
              <span className={styles.label}>Industries we know</span>
              <h3>Deep in three verticals where response time decides revenue.</h3>
              <div className={styles.chips}>
                <Link href="/industries/home-services">Home services</Link>
                <Link href="/industries/healthcare">Healthcare</Link>
                <Link href="/industries/construction">Construction</Link>
              </div>
            </div>
            <div className={`${styles.tile} ${styles.w3}`}>
              <span className={styles.label}>What we build</span>
              <h3>From one voice agent to a full operations stack.</h3>
              <div className={styles.chips}>
                {["Voice AI", "Lead response", "Scheduling", "Follow-up", "Documents", "Dashboards"].map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before / after */}
      <section className={`section ${styles.tight}`}>
        <div className="container">
          <span className={styles.label}>Why we exist</span>
          <h2 className={styles.h2}>The gap we close</h2>
          <div className={styles.ba}>
            <div className={styles.col}>
              <div className={styles.colHead}>
                <b>Without automation</b>
                <span className={`${styles.pill} ${styles.pillBad}`}>Today</span>
              </div>
              <ul>
                {before.map((item) => (
                  <li key={item.lead}>
                    <span className={`${styles.mark} ${styles.markBad}`}><X size={12} strokeWidth={3} /></span>
                    <span><b>{item.lead}</b>{item.rest}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${styles.col} ${styles.colAfter}`}>
              <div className={styles.colHead}>
                <b>With United Technologies</b>
                <span className={`${styles.pill} ${styles.pillOk}`}>After</span>
              </div>
              <ul>
                {after.map((item) => (
                  <li key={item.lead}>
                    <span className={`${styles.mark} ${styles.markOk}`}><Check size={12} strokeWidth={3} /></span>
                    <span><b>{item.lead}</b>{item.rest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`section ${styles.tight}`}>
        <div className="container">
          <span className={styles.label}>Our journey</span>
          <h2 className={styles.h2}>How we got here</h2>
          <ol className={styles.timeline}>
            {milestones.map((m, i) => (
              <li key={m.title} className={`${styles.milestone} ${i === milestones.length - 1 ? styles.now : ""}`}>
                <span className={styles.dot} />
                <span className={styles.year}>{m.year}</span>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </li>
            ))}
          </ol>
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
