import Link from "next/link";
import {
  PhoneMissed,
  Timer,
  Repeat,
  ClipboardList,
  CalendarClock,
  Network,
  TrendingUp,
  Zap,
  CalendarCheck,
  Workflow,
  MessageSquareText,
  Eye,
  ArrowRight,
  ShieldCheck,
  SlidersHorizontal,
  GitBranch,
  KeyRound,
  UserCheck,
  ClipboardCheck,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import HeroPanel from "@/components/hero/HeroPanel";
import WorkflowDiagram from "@/components/workflows/WorkflowDiagram";
import SolutionCard from "@/components/cards/SolutionCard";
import IndustryCard from "@/components/cards/IndustryCard";
import CaseStudyCard from "@/components/cards/CaseStudyCard";
import CTASection from "@/components/sections/CTASection";
import { solutions } from "@/data/solutions";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/pricing";
import styles from "./page.module.css";

const problems = [
  { icon: PhoneMissed, title: "Missed Leads", body: "Calls, forms, and messages that never get a response — and go straight to a competitor." },
  { icon: Timer, title: "Slow Response", body: "By the time your team replies, the customer has already moved on." },
  { icon: Repeat, title: "Follow-Up Gaps", body: "Quotes and estimates sent, then forgotten until the opportunity is gone." },
  { icon: ClipboardList, title: "Manual Operations", body: "Repetitive admin work that quietly eats hours your team could spend elsewhere." },
  { icon: CalendarClock, title: "Scheduling Friction", body: "Back-and-forth booking, double bookings, and appointments that fall through." },
  { icon: Network, title: "Disconnected Systems", body: "Customer data scattered across tools, with nobody seeing the full picture." },
];

const approachChain = ["Industry", "Pain Point", "Business Impact", "Critical Moment", "AI Automation", "Business Outcome"];

const solutionSlugOrder = [
  "ai-voice-agents",
  "ai-lead-response",
  "appointment-automation",
  "crm-automation",
  "document-automation",
  "follow-up-automation",
];
const solutionsPreview = solutionSlugOrder
  .map((slug) => solutions.find((s) => s.slug === slug))
  .filter((s): s is (typeof solutions)[number] => Boolean(s));

const peakExamples = [
  { industry: "Home Services", moments: ["Storms", "AC breakdowns", "Plumbing emergencies"] },
  { industry: "Healthcare", moments: ["Urgent appointments", "New patient demand", "Promotions"] },
  { industry: "Construction", moments: ["Storm damage", "Roof leaks", "Time-sensitive projects"] },
];

const howItWorksMini = [
  { title: "Discover", body: "Understand the business and identify bottlenecks." },
  { title: "Diagnose", body: "Find the highest-impact automation opportunities." },
  { title: "Build", body: "Design and implement the AI-powered workflow." },
  { title: "Optimize", body: "Measure performance and continuously improve." },
];

const outcomes = [
  { icon: TrendingUp, label: "More Leads Captured" },
  { icon: Zap, label: "Faster Response" },
  { icon: CalendarCheck, label: "More Appointments" },
  { icon: Workflow, label: "Less Manual Work" },
  { icon: MessageSquareText, label: "Better Follow-Up" },
  { icon: Eye, label: "Greater Operational Visibility" },
];

const philosophy = [
  { title: "Strategy", body: "Every workflow starts with a clear view of what the business actually needs — not a default template." },
  { title: "Ownership", body: "We treat your process as our responsibility, from discovery through to the result." },
  { title: "Standardization", body: "Repeatable processes are what make automation reliable, not one-off scripts." },
  { title: "Automation", body: "AI does the repetitive work so your team can focus on what needs a person." },
  { title: "Measurement", body: "If a workflow's impact can't be measured, we haven't finished designing it." },
  { title: "Continuous Improvement", body: "Every system is monitored and refined as your business and volume change." },
];

const quickLinks = [
  { label: "Take the ROI Calculator", href: "/resources/roi-calculator" },
  { label: "See Case Studies", href: "/case-studies" },
  { label: "Explore Home Services", href: "/industries/home-services" },
  { label: "Compare Pricing", href: "/pricing" },
];

const trustPillars = [
  { icon: ShieldCheck, title: "Encrypted in Transit & at Rest", body: "Customer data is encrypted end-to-end, whether it's moving between systems or sitting in storage." },
  { icon: SlidersHorizontal, title: "You Control What Connects Where", body: "Every integration is scoped to the systems your workflow actually needs — nothing more." },
  { icon: GitBranch, title: "Clear Escalation Rules, Always", body: "When a request falls outside what the AI is scoped to handle, it hands off to your team with full context." },
  { icon: KeyRound, title: "No Long-Term Lock-In", body: "You own the workflow and the data it produces. Nothing is built to be hard to leave." },
  { icon: UserCheck, title: "Your Data, Your Systems", body: "We build inside the CRM and tools you already run on — we don't ask you to migrate to ours." },
  { icon: ClipboardCheck, title: "Transparent About What's Automated", body: "Every workflow documents exactly what the AI handles and what's routed to a person." },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className={styles.hero}>
        <svg className={styles.heroWaves} viewBox="0 0 1440 700" preserveAspectRatio="none" aria-hidden focusable="false">
          <path d="M-80 170 C180 80 330 260 590 170 S1000 80 1260 170 S1520 260 1780 170" />
          <path d="M-80 290 C180 200 330 380 590 290 S1000 200 1260 290 S1520 380 1780 290" />
          <path d="M-80 420 C180 330 330 510 590 420 S1000 330 1260 420 S1520 510 1780 420" />
          <path d="M-80 550 C180 460 330 640 590 550 S1000 460 1260 550 S1520 640 1780 550" />
        </svg>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <span className={styles.eyebrow}>AI Automation for US Small &amp; Mid-Size Businesses</span>
            <h1 className={styles.heroTitle}>Turn Business Problems Into Automated Growth.</h1>
            <p className={styles.heroCopy}>
              We identify the moments where businesses lose leads, time, and revenue — then build AI-powered systems
              that respond, automate, and scale.
            </p>
            <div className={styles.heroActions}>
              <Button href="/resources/ai-audit" size="lg">Find Your Automation Opportunity</Button>
              <Button href="/solutions" variant="secondary" size="lg">Explore Our Solutions</Button>
            </div>
          </div>
          <AnimatedSection as="fade-in">
            <HeroPanel
              eyebrow="LIVE AUTOMATION"
              // title="From inquiry to appointment"
              description="One connected system that keeps every customer moment moving."
              stages={["Lead", "AI Detection", "AI Response", "Qualification", "CRM", "Appointment", "Follow-Up", "Business Outcome"]}
            />
          </AnimatedSection>
        </div>
       
      </section>

      {/* 2. Business Pain / Problem */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Your Business Is Losing Opportunities You Can't See."
            description="Missed calls, slow responses, manual follow-ups, disconnected systems, and repetitive work quietly create revenue leaks every day."
          />
          <StaggerGroup className={styles.problemGridV2}>
            {problems.map((p) => (
              <StaggerItem key={p.title} className={styles.problemCard}>
                <div className={styles.problemIconBadge}>
                  <p.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className={styles.problemTitle}>{p.title}</h3>
                <p className={styles.problemText}>{p.body}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 3. Our Approach */}
      <section className="section section-surface">
        <div className="container">
          <SectionHeader
            title="We Don't Start With AI. We Start With the Problem."
            description="This is the methodology behind every system we build — the same chain of thinking, applied to your specific business."
          />
          <div className={styles.workflowWrap}>
            <WorkflowDiagram stages={approachChain} />
          </div>
        </div>
      </section>

      {/* 4. What We Automate */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="AI Systems Built Around Real Business Workflows."
            description="Each solution is a component in a larger, connected system — not an isolated tool."
          />
          <StaggerGroup className={styles.solutionsPreviewGrid}>
            {solutionsPreview.map((s) => (
              <StaggerItem key={s.slug}>
                <SolutionCard solution={s} compact />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 5. Industries We Serve */}
      <section className={`section ${styles.industriesSection}`}>
        <div className="container">
          <SectionHeader
            title="Built Around the Way Your Industry Works."
            description="Automation designed around your customer behavior, peak demand, and existing software — not a generic template."
          />
          <div className={styles.industryGrid}>
            {industries.map((ind) => (
              <IndustryCard key={ind.slug} industry={ind} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Peak-Emergency Concept */}
      {/* <section className={`section ${styles.peakSection}`}>
        <div className="container">
          <SectionHeader
            title="When Every Minute Matters, AI Should Already Be Working."
            description="Every industry has moments when customer demand suddenly increases or a response becomes revenue-critical. We identify those moments and design automation around them."
          />
          <StaggerGroup className={styles.peakExamplesGrid}>
            {peakExamples.map((ex) => (
              <StaggerItem key={ex.industry} className={styles.peakExampleCard}>
                <span className={styles.peakExampleIndustry}>{ex.industry}</span>
                <div className={styles.peakExampleChips}>
                  {ex.moments.map((m) => (
                    <span key={m} className={styles.peakChip}>{m}</span>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          
        </div>
      </section> */}

      {/* 7. How It Works — short overview */}
      <section className="section section-surface">
        <div className="container">
          <SectionHeader title="How It Works" description="A concise look at our process. The full delivery workflow lives on the How It Works page." />
          <div className={styles.processGrid}>
            {howItWorksMini.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.05} className={styles.processStep}>
                <span className={`${styles.processIndex} mono`}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.body}</p>
              </AnimatedSection>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <Button href="/how-it-works" variant="secondary">
              See Our Full Process <ArrowRight size={16} style={{ display: "inline", verticalAlign: "-2px", marginLeft: 4 }} />
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Business Outcomes */}
      <section className="section">
        <div className="container">
          <SectionHeader title="Automation That Moves the Numbers." description="We focus on the outcomes automation is built to produce, not the technology behind it." />
          <StaggerGroup className={styles.outcomesGrid}>
            {outcomes.map((o) => (
              <StaggerItem key={o.label} className={styles.outcomeCard}>
                <span className={styles.outcomeIcon}>
                  <o.icon size={18} strokeWidth={1.75} />
                </span>
                <span className={styles.outcomeLabel}>{o.label}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 9. Featured Case Studies — preview only */}
      {/* <section className="section section-surface">
        <div className="container">
          <SectionHeader title="See Automation in Action." description="Illustrative workflows showing how these systems apply across real industries." />
          <div className={styles.caseGrid}>
            {caseStudies.slice(0, 3).map((study) => (
              <CaseStudyCard key={study.slug} study={study} compact />
            ))}
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <Button href="/case-studies" variant="secondary">
              View All Case Studies <ArrowRight size={16} style={{ display: "inline", verticalAlign: "-2px", marginLeft: 4 }} />
            </Button>
          </div>
        </div>
      </section> */}

      {/* 10. Why Us / Philosophy */}
      <section className={`section ${styles.philosophySection}`}>
        <div className="container">
          <div className={styles.philosophyLayout}>
            <div className={styles.philosophyIntro}>
              <SectionHeader dark title="Built for Business. Powered by AI." />
              <p className={styles.philosophyMessage}>
                We don&apos;t automate for the sake of automation. We build systems around measurable business
                problems, repeatable processes, and meaningful outcomes.
              </p>
            </div>
            <div className={styles.philosophyList}>
              {philosophy.map((p, i) => (
                <AnimatedSection key={p.title} delay={i * 0.04} className={styles.philosophyItem}>
                  <span className={styles.philosophyIndex}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className={styles.philosophyItemTitle}>{p.title}</h3>
                    <p className={styles.philosophyItemBody}>{p.body}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10.5 Trust & Security */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Built to Be Trusted With Your Business Data."
            description="Before any automation touches a customer, it has to earn trust with how it handles your data and systems."
          />
          <StaggerGroup className={styles.trustGrid}>
            {trustPillars.map((t) => (
              <StaggerItem key={t.title} className={styles.trustCard}>
                <span className={styles.trustIcon}>
                  <t.icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className={styles.trustTitle}>{t.title}</h3>
                <p className={styles.trustBody}>{t.body}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 11. Final CTA */}
      <CTASection
        variant="glow"
        title="Find the Automation Opportunities Hidden Inside Your Business."
        description="Identify where leads, time, and revenue are being lost — and discover what AI can automate."
        primaryLabel="Get Your Automation Assessment"
        primaryHref="/resources/ai-audit"
        secondaryLabel="Explore Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
