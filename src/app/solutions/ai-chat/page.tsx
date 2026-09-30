import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CalendarCheck,
  Check,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Database,
  GitBranch,
  Globe,
  KeyRound,
  Minus,
  MoonStar,
  PencilRuler,
  Plug,
  Rocket,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  TrendingUp,
  UserCheck,
  UserRoundPlus,
  Workflow,
  Zap,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ChatScenarioExplorer from "@/components/sections/ChatScenarioExplorer";
import ChatHeroVisual from "@/components/hero/ChatHeroVisual";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { solutions } from "@/data/solutions";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

const data = solutions.find((s) => s.slug === "ai-chat")!;

export const metadata: Metadata = buildMetadata({
  title: data.name,
  description:
    "A chat agent trained on your services, pricing structure, and service area answers website visitors in real time and captures qualified leads.",
  path: "/solutions/ai-chat",
});

/* ------------------------------------------------------------------ */
/* Content — deliberately industry-neutral                             */
/* ------------------------------------------------------------------ */

const problemText = data.problem;
const solutionText = data.solution;

const heroChecks = ["Answers in real time, 24/7", "Captures structured leads", "Syncs every chat to your CRM"];

const statStrip = [
  { icon: Clock, value: "24/7", label: "Always-on website coverage" },
  { icon: Zap, value: "Instant", label: "Replies, no waiting for tomorrow" },
  { icon: UserCheck, value: "Human", label: "Handoff for complex requests" },
  { icon: Database, value: "100%", label: "Chats logged to your CRM" },
];

const flowSteps = [
  { title: "Visitor opens chat", body: "Someone on your site has a question and starts a conversation instead of leaving." },
  { title: "AI answers questions", body: "The agent replies in real time using your services, pricing structure, and service area." },
  { title: "Lead details captured", body: "Name, contact info, and job details are collected as structured fields, not loose transcripts." },
  { title: "Synced to CRM", body: "The lead, the conversation, and any booking land on the right record automatically." },
  { title: "Follow-up triggered", body: "Your team is notified and automated follow-up starts, so no enquiry sits waiting." },
];

const capabilityIcons = [BookOpen, UserCheck, ClipboardList, Globe];
const capabilityBodies = [
  "Answers come from your own service catalog, FAQs, and pricing structure, so replies are accurate and on-brand.",
  "Complex, sensitive, or high-value requests move to a person with the full conversation already attached.",
  "Leads arrive as clean, structured records with the details your team needs to act on them.",
  "Add it with a simple embed. No redesign, no rebuild, and no change to your current site.",
];

const gapRows = [
  {
    icon: MoonStar,
    title: "Unanswered enquiries",
    moment: "A visitor has a question after hours or while your team is busy, and the only option is a contact form.",
    cost: "Lost enquiries. Visitors leave and ask someone else.",
    fix: "The agent answers instantly, captures their details, and books or routes the request.",
  },
  {
    icon: Zap,
    title: "Slow response & dead leads",
    moment: "A visitor compares several providers and goes with whoever responds first.",
    cost: "Opportunities go to the fastest responder.",
    fix: "An immediate reply in chat, followed by automated follow-up until the loop is closed.",
  },
  {
    icon: CalendarCheck,
    title: "Incomplete details & empty slots",
    moment: "Forms come back half-filled and appointments never get booked or confirmed.",
    cost: "Administrative delays, wasted capacity, and lost bookings.",
    fix: "The agent collects the right details up front, books available slots, and sends reminders.",
  },
];

const compareRows = [
  { label: "After-hours questions", before: "Wait for tomorrow", after: "Answered instantly" },
  { label: "Speed to respond", before: "Hours to days", after: "Seconds" },
  { label: "Lead details", before: "Partial or missing form fields", after: "Structured, complete capture" },
  { label: "Common questions", before: "Answered again and again by staff", after: "Handled automatically" },
  { label: "Scheduling", before: "Back-and-forth emails", after: "Booked in the chat" },
  { label: "CRM records", before: "Manual entry", after: "Updated automatically" },
];

const extras = [
  { icon: Sparkles, title: "Brand-matched tone", body: "Greeting, voice, and answers are tuned to how your business actually talks." },
  { icon: BarChart3, title: "Chat analytics", body: "See top questions, peak hours, capture rates, and handoffs in one view." },
  { icon: Workflow, title: "Automated follow-up", body: "Unfinished chats trigger email or SMS follow-up so warm leads don't go cold." },
  { icon: TrendingUp, title: "Continuous tuning", body: "Real conversations are reviewed to improve answers and fill knowledge gaps." },
];

const integrations = ["Website widget", "HubSpot", "Salesforce", "Slack", "Google Calendar", "Twilio"];

const outcomes = [
  { icon: Check, label: "Every visitor answered" },
  { icon: TrendingUp, label: "More leads captured" },
  { icon: CalendarCheck, label: "More appointments booked" },
  { icon: UserRoundPlus, label: "Less manual admin" },
];

const rollout = [
  { icon: Search, title: "Discover", body: "We map the questions visitors ask, when they ask them, and what a great answer looks like." },
  { icon: PencilRuler, title: "Design", body: "We build the knowledge base, conversation flows, lead capture, and handoff rules." },
  { icon: Plug, title: "Integrate", body: "We connect your website, calendar, and CRM so nothing is re-entered." },
  { icon: Rocket, title: "Launch & optimise", body: "We test against real questions, go live, and keep refining from chat data." },
];

const trust = [
  { icon: SlidersHorizontal, title: "You set the boundaries", body: "You decide what the agent can answer, book, or promise, and what it should never do." },
  { icon: GitBranch, title: "Clear escalation rules", body: "Anything outside its scope goes to your team with the full conversation attached." },
  { icon: ShieldCheck, title: "Secure by design", body: "Chat data is encrypted in transit and at rest, and access is limited to what the workflow needs." },
  { icon: KeyRound, title: "No lock-in", body: "You own the workflow and the data it produces." },
  { icon: ClipboardCheck, title: "Fully transparent", body: "Every workflow documents what the AI handles and what is routed to a person." },
  { icon: UserCheck, title: "Works with your team", body: "The agent supports your staff. It doesn't replace the people customers want to reach." },
];

const faqs = [
  {
    question: "Will visitors know they're chatting with an AI?",
    answer:
      "You decide how the agent introduces itself. Whatever you choose, visitors can always ask for a person and will be handed off or offered a callback.",
  },
  {
    question: "How does the agent know what to say?",
    answer:
      "It is trained on your service catalog, FAQs, pricing structure, and service area. It answers from that approved information and hands off anything it isn't sure about, rather than guessing.",
  },
  {
    question: "Do we need to rebuild or redesign our website?",
    answer:
      "No. The chat agent embeds on any website with a small snippet, so it works alongside your existing pages without a rebuild.",
  },
  {
    question: "What happens when a request is complex or urgent?",
    answer:
      "Complex requests are handed to a person with the full transcript and captured details, so nobody has to repeat themselves. You define which topics always go to a human.",
  },
  {
    question: "Which systems can it connect to?",
    answer:
      "Common CRMs, calendars, and messaging tools are supported, including HubSpot, Salesforce, Google Calendar, and Slack. If you use something else, we'll scope the integration during discovery.",
  },
  {
    question: "How long does setup take?",
    answer:
      "It depends on the size of your knowledge base and the integrations involved. We scope the timeline after an AI Audit, once we understand your site traffic and the systems you use.",
  },
];

/* ------------------------------------------------------------------ */

export default function AiChatPage() {
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
              <Button href="/contact" size="lg">Talk to Us About AI Chat</Button>
              <Button href="/how-it-works" variant="secondary" size="lg">See How It Works</Button>
            </div>
          </div>

          <ChatHeroVisual />
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

      {/* 3. HOW A CHAT FLOWS ---------------------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHeader
            index="01"
            title="What Happens in Every Chat"
            description="From the first message to the CRM record, every conversation follows the same reliable path."
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
            index="02"
            title="Key Capabilities"
            description="Everything a great front-desk chat handler does, available at any hour and any volume."
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

      {/* 5. WHERE VISITORS GET LOST --------------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHeader
            index="03"
            title="Where Website Visitors Turn Into Lost Revenue"
            description="The same three gaps show up in every business that relies on its website to win work. AI Chat closes each one."
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

      {/* 6. INTERACTIVE CHAT SCENARIOS (dark) ----------------------- */}
      <section className={`section section-dark ${styles.darkSection}`}>
        <div className={styles.darkGlow} aria-hidden />
        <div className={`container ${styles.darkInner}`}>
          <SectionHeader
            index="04"
            dark
            title="See How the Agent Handles Different Chats"
            description="Pick a scenario to see what the visitor asks, what the agent does, and what your team gets."
          />
          <ChatScenarioExplorer />
        </div>
      </section>

      {/* 7. BEFORE / AFTER ------------------------------------------ */}
      <section className="section">
        <div className="container">
          <SectionHeader
            index="05"
            title="Contact Form vs. AI Chat"
            description="A side-by-side look at what changes the moment every visitor gets an answer."
          />
          <AnimatedSection className={styles.compare}>
            <div className={`${styles.compareRow} ${styles.compareHead}`}>
              <span />
              <span>Without chat automation</span>
              <span className={styles.compareAfterHead}>With AI Chat</span>
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
            index="06"
            title="Built to Get Smarter Over Time"
            description="Beyond answering questions, the system gives you visibility and keeps improving."
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
      <section className="section">
        <div className="container">
          <div className={styles.twoCol}>
            <div>
              <SectionHeader
                index="07"
                title="Integrations"
                description="Works with your existing website, calendar, and CRM. No migration needed."
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
      </section>

      {/* 10. ROLLOUT ------------------------------------------------ */}
      <section className="section section-surface">
        <div className="container">
          <SectionHeader
            index="08"
            title="From Kick-Off to Live Chat"
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
            index="09"
            title="Control, Security & Transparency"
            description="A chat agent speaks for your business, so you stay in control of what it says and does."
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
              index="10"
              title="AI Chat FAQs"
              description="Answers to the questions we hear most before a rollout."
            />
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* 13. CTA ---------------------------------------------------- */}
      <CTASection
        variant="glow"
        title="Ready for Every Visitor to Get an Answer?"
        description="We'll walk through your website traffic and enquiry patterns to scope the right chat workflow."
        primaryLabel="Get Your AI Audit"
        secondaryLabel="See All Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}