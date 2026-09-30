import type { Metadata } from "next";
import {
  ArrowRight,
  AudioLines,
  BarChart3,
  CalendarCheck,
  Check,
  ClipboardCheck,
  Clock,
  Database,
  GitBranch,
  KeyRound,
  Minus,
  PencilRuler,
  PhoneForwarded,
  Plug,
  Rocket,
  Search,
  ShieldCheck,
  Siren,
  SlidersHorizontal,
  Sparkles,
  TrendingUp,
  UserCheck,
  Voicemail,
  Workflow,
  Zap,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CallScenarioExplorer from "@/components/sections/CallScenarioExplorer";
import VoiceHeroVisual from "@/components/hero/VoiceHeroVisual";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { solutions } from "@/data/solutions";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

const data = solutions.find((s) => s.slug === "ai-voice-agents")!;

export const metadata: Metadata = buildMetadata({
  title: data.name,
  description:
    "An AI voice agent answers every call, understands intent, qualifies the caller, and books or transfers based on urgency.",
  path: "/solutions/ai-voice-agents",
});

/* ------------------------------------------------------------------ */
/* Content — deliberately industry-neutral                             */
/* ------------------------------------------------------------------ */

const problemText =
  "Calls that go unanswered after hours, during busy periods, or while your team is occupied are opportunities that go to whoever picks up first.";
const solutionText =
  "An AI voice agent answers every call, understands intent, qualifies the caller, and books or transfers based on urgency.";

const heroChecks = ["Answers 24/7, every call", "Books, routes or transfers instantly", "Syncs every call to your CRM"];

const statStrip = [
  { icon: Clock, value: "24/7", label: "Always-on call coverage" },
  { icon: Zap, value: "Instant", label: "Pickup, no hold time" },
  { icon: PhoneForwarded, value: "Live", label: "Transfer when it matters" },
  { icon: Database, value: "100%", label: "Calls logged to your CRM" },
];

const flowSteps = [
  { title: "Call rings in", body: "Any inbound call, at any hour, at any volume, lands on the agent first." },
  { title: "AI voice agent answers", body: "A natural, low-latency greeting — no menus, no hold music." },
  { title: "Intent identified", body: "The agent works out who is calling and what they need, including how urgent it is." },
  { title: "Booking or transfer", body: "It books the appointment, answers the question, or transfers live to your team." },
  { title: "CRM updated", body: "Summary, recording, and next steps are saved to the contact record automatically." },
];

const capabilityIcons = [AudioLines, Siren, PhoneForwarded, Database];
const capabilityBodies = [
  "Human-sounding conversations with minimal delay, so callers stay engaged instead of hanging up.",
  "Recognises urgent language and moves those calls to the front of the queue.",
  "Warm-transfers to on-call staff with the context already captured, or schedules a callback.",
  "Every call is summarised and recorded, then written to the right record in your CRM.",
];

const gapRows = [
  {
    icon: Voicemail,
    title: "Missed & after-hours calls",
    moment: "Demand peaks when your team is busy or offline.",
    cost: "Lost enquiries — callers move on to whoever answers first.",
    fix: "The agent answers 24/7, identifies urgency, captures details, and books or routes the request.",
  },
  {
    icon: Zap,
    title: "Slow response & stalled follow-up",
    moment: "A caller asks for information or a quote and contacts several providers at once.",
    cost: "Opportunities go to the fastest responder.",
    fix: "Instant voice and SMS response, followed by automated follow-up until the loop is closed.",
  },
  {
    icon: CalendarCheck,
    title: "Empty slots & no-shows",
    moment: "A cancellation or unconfirmed appointment leaves a gap in the schedule.",
    cost: "Wasted capacity and lost revenue.",
    fix: "Confirms and reminds automatically, reschedules, fills open slots, and reactivates past contacts.",
  },
];

const compareRows = [
  { label: "After-hours calls", before: "Sent to voicemail", after: "Answered live, every time" },
  { label: "Speed to respond", before: "Minutes to days", after: "Instant" },
  { label: "Caller details", before: "Partial notes or none", after: "Structured, complete capture" },
  { label: "Urgent requests", before: "Wait in the same queue", after: "Detected and prioritised" },
  { label: "Scheduling", before: "Back-and-forth calls", after: "Booked during the call" },
  { label: "CRM records", before: "Manual entry", after: "Updated automatically" },
];

const extras = [
  { icon: Sparkles, title: "Brand-matched voice & script", body: "Tone, greeting, and answers are tuned to how your business actually speaks." },
  { icon: BarChart3, title: "Call analytics", body: "Track volume, peak hours, outcomes, and transfer rates in one view." },
  { icon: Workflow, title: "Automated follow-up", body: "Missed or unfinished calls trigger SMS and email follow-up sequences." },
  { icon: TrendingUp, title: "Continuous tuning", body: "Real call transcripts are reviewed to refine responses over time." },
];

const integrations = ["Twilio", "RingCentral", "HubSpot", "Salesforce", "Google Calendar", "Slack"];

const outcomes = [
  { icon: Check, label: "Every call answered" },
  { icon: TrendingUp, label: "More leads captured" },
  { icon: CalendarCheck, label: "More appointments booked" },
  { icon: Workflow, label: "Less manual admin" },
];

const rollout = [
  { icon: Search, title: "Discover", body: "We map your call patterns, peak periods, and what a great call looks like for you." },
  { icon: PencilRuler, title: "Design", body: "We script the conversation flows, escalation rules, and booking logic." },
  { icon: Plug, title: "Integrate", body: "We connect your phone system, calendar, and CRM so nothing is re-entered." },
  { icon: Rocket, title: "Launch & optimise", body: "We test against real scenarios, go live, and keep refining from call data." },
];

const trust = [
  { icon: SlidersHorizontal, title: "You set the boundaries", body: "You decide what the agent can answer, book, or promise — and what it should never do." },
  { icon: GitBranch, title: "Clear escalation rules", body: "Anything outside its scope goes to your team with the full conversation attached." },
  { icon: ShieldCheck, title: "Secure by design", body: "Call data is encrypted in transit and at rest, and access is limited to what the workflow needs." },
  { icon: KeyRound, title: "No lock-in", body: "You own the workflow and the data it produces." },
  { icon: ClipboardCheck, title: "Fully transparent", body: "Every workflow documents what the AI handles and what is routed to a person." },
  { icon: UserCheck, title: "Works with your team", body: "The agent supports your staff — it doesn't replace the people customers want to reach." },
];

const faqs = [
  {
    question: "Will callers know they're speaking to an AI?",
    answer:
      "The agent uses a natural, conversational voice, and you decide how it introduces itself. Whatever you choose, callers can always ask for a person and will be transferred or offered a callback.",
  },
  {
    question: "What happens when a call is urgent or too complex?",
    answer:
      "Urgent calls are detected and prioritised, then transferred live to the right person. Anything outside the agent's scope is handed off with a full summary, so nobody has to repeat themselves.",
  },
  {
    question: "Do we need to change our phone number or phone system?",
    answer:
      "No. The voice agent connects to your existing number and phone provider, and can sit alongside your current setup — answering everything, or only overflow and after-hours calls.",
  },
  {
    question: "Which systems can it connect to?",
    answer:
      "Common phone platforms, calendars, and CRMs are supported, including Twilio, RingCentral, HubSpot, Salesforce, and Google Calendar. If you use something else, we'll scope the integration during discovery.",
  },
  {
    question: "How long does setup take?",
    answer:
      "It depends on the complexity of your call flows and integrations. We scope the timeline after an AI Audit, once we understand your call volume and the systems involved.",
  },
  {
    question: "What happens to call recordings and data?",
    answer:
      "Call summaries and recordings are stored in your CRM under your access rules. Data is encrypted in transit and at rest, and you keep ownership of everything the workflow produces.",
  },
];

/* ------------------------------------------------------------------ */

export default function AiVoiceAgentsPage() {
  return (
    <>
      {/* 1. HERO ---------------------------------------------------- */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden>
          <span className={styles.heroGrid} />
          <span className={`${styles.orb} ${styles.orbOne}`} />
          <span className={`${styles.orb} ${styles.orbTwo}`} />
        </div>

        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <span className={styles.category}>{data.category}</span>
            <h1 className={styles.title}>{data.name}</h1>

            <div className={styles.problemBlock}>
              <p className={styles.blockLabel}>The Problem</p>
              <p className={styles.blockText}>{problemText}</p>
            </div>
            <div className={styles.solutionBlock}>
              <p className={styles.blockLabel}>The Solution</p>
              <p className={styles.blockText}>{solutionText}</p>
            </div>

            <ul className={styles.heroChecks}>
              {heroChecks.map((c) => (
                <li key={c}>
                  <Check size={16} />
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <div className={styles.heroActions}>
              <Button href="/contact" size="lg">Talk to Us About Voice Automation</Button>
              <Button href="/how-it-works" variant="secondary" size="lg">See How It Works</Button>
            </div>
          </div>

          <VoiceHeroVisual />
        </div>
      </section>

      {/* 2. STAT STRIP ---------------------------------------------- */}
      <section className={styles.statSection}>
        <div className="container">
          <StaggerGroup className={styles.statGrid}>
            {statStrip.map((s) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.label} className={styles.statItem}>
                  <span className={styles.statIcon}><Icon size={20} /></span>
                  <div>
                    <p className={`${styles.statValue} mono`}>{s.value}</p>
                    <p className={styles.statLabel}>{s.label}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* 3. HOW A CALL FLOWS ---------------------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHeader
          
            title="What Happens to Every Call"
            description="From the first ring to the CRM record, every call follows the same reliable path."
          />
          <div className={styles.flow}>
            <span className={styles.flowLine} aria-hidden />
            {flowSteps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.06} className={styles.flowStep}>
                <span className={`${styles.flowNum} mono`}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={styles.flowTitle}>{step.title}</h3>
                <p className={styles.flowBody}>{step.body}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. KEY CAPABILITIES ---------------------------------------- */}
      <section className="section section-surface">
        <div className="container">
          <SectionHeader
           
            title="Key Capabilities"
            description="Everything a great front-desk call handler does — available at any hour and any volume."
          />
          <StaggerGroup className={styles.capGrid}>
            {data.capabilities.map((cap, i) => {
              const Icon = capabilityIcons[i % capabilityIcons.length];
              return (
                <StaggerItem key={cap} className={styles.capCard}>
                  <span className={styles.capIcon}><Icon size={22} /></span>
                  <h3 className={styles.capTitle}>{cap}</h3>
                  <p className={styles.capBody}>{capabilityBodies[i % capabilityBodies.length]}</p>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* 5. WHERE CALLS GET LOST ------------------------------------ */}
      <section className="section">
        <div className="container">
          <SectionHeader
            
            title="Where Calls Turn Into Lost Revenue"
            description="The same three gaps show up in every business that depends on the phone. A voice agent closes each one."
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
                    <span className={`${styles.gapLabel} mono`}>PEAK MOMENT</span>
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

      {/* 6. INTERACTIVE CALL SCENARIOS (dark) ----------------------- */}
      <section className={`section section-dark ${styles.darkSection}`}>
        <div className={styles.darkGlow} aria-hidden />
        <div className={`container ${styles.darkInner}`}>
          <SectionHeader
          
            dark
            title="See How the Agent Handles Different Calls"
            description="Pick a scenario to see what the caller says, what the agent does, and what your team gets."
          />
          <CallScenarioExplorer />
        </div>
      </section>

      {/* 7. BEFORE / AFTER ------------------------------------------ */}
      <section className="section">
        <div className="container">
          <SectionHeader
           
            title="Voicemail vs. an AI Voice Agent"
            description="A side-by-side look at what changes the moment every call gets answered."
          />
          <AnimatedSection className={styles.compare}>
            <div className={`${styles.compareRow} ${styles.compareHead}`}>
              <span />
              <span>Without voice automation</span>
              <span className={styles.compareAfterHead}>With AI Voice Agents</span>
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

      {/* 8. EXTRAS -------------------------------------------------- */}
      <section className="section section-surface">
        <div className="container">
          <SectionHeader
           
            title="Built to Get Smarter Over Time"
            description="Beyond answering calls, the system gives you visibility and keeps improving."
          />
          <StaggerGroup className={styles.extraGrid}>
            {extras.map((e) => {
              const Icon = e.icon;
              return (
                <StaggerItem key={e.title} className={styles.extraCard}>
                  <span className={styles.extraIcon}><Icon size={20} /></span>
                  <h3 className={styles.extraTitle}>{e.title}</h3>
                  <p className={styles.extraBody}>{e.body}</p>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* 9. INTEGRATIONS + IMPACT ----------------------------------- */}
      {/*<section className="section">
        <div className="container">
          <div className={styles.twoCol}>
            <div>
              <SectionHeader
                index="07"
                title="Integrations"
                description="Works with your existing phone, calendar, and CRM systems — no migration needed."
              />
              <div className={styles.integrationRow}>
                {integrations.map((i) => (
                  <span key={i} className={styles.integrationChip}>{i}</span>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader title="Business Impact" description={data.impact} />
              <div className={styles.outcomeGrid}>
                {outcomes.map((o) => {
                  const Icon = o.icon;
                  return (
                    <div key={o.label} className={styles.outcomeItem}>
                      <span className={styles.outcomeIcon}><Icon size={18} /></span>
                      <span>{o.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* 10. ROLLOUT ------------------------------------------------ */}
      <section className="section section-surface">
        <div className="container">
          <SectionHeader
        
            title="From Kick-Off to Live Calls"
            description="A structured rollout that fits around your business."
          />
          <StaggerGroup className={styles.rollGrid}>
            {rollout.map((r, i) => {
              const Icon = r.icon;
              return (
                <StaggerItem key={r.title} className={styles.rollCard}>
                  <div className={styles.rollTop}>
                    <span className={styles.rollIcon}><Icon size={20} /></span>
                    <span className={`${styles.rollNum} mono`}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className={styles.rollTitle}>{r.title}</h3>
                  <p className={styles.rollBody}>{r.body}</p>
                  {i < rollout.length - 1 && <ArrowRight size={18} className={styles.rollArrow} aria-hidden />}
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* 11. TRUST & CONTROL ---------------------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHeader
           
            title="Control, Security & Transparency"
            description="A voice agent speaks for your business, so you stay in control of what it says and does."
          />
          <StaggerGroup className={styles.trustGrid}>
            {trust.map((t) => {
              const Icon = t.icon;
              return (
                <StaggerItem key={t.title} className={styles.trustItem}>
                  <span className={styles.trustIcon}><Icon size={20} /></span>
                  <div>
                    <h3 className={styles.trustTitle}>{t.title}</h3>
                    <p className={styles.trustBody}>{t.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* 12. FAQ ---------------------------------------------------- */}
      <section className="section section-surface">
        <div className="container">
          <div className={styles.faqLayout}>
            <SectionHeader
             
              title="Voice Agent FAQs"
              description="Answers to the questions we hear most before a rollout."
            />
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* 13. CTA ---------------------------------------------------- */}
      <CTASection
        variant="glow"
        title="Ready for Every Call to Get Answered?"
        description="We'll walk through your call volume and after-hours patterns to scope the right voice workflow."
        primaryLabel="Get Your AI Audit"
        secondaryLabel="See All Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}