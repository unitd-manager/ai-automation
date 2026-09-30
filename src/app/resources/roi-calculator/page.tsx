import type { Metadata } from "next";
import { ArrowRight, CalendarCheck, FileText, Gauge, MessageSquareText, Phone, Workflow } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ROICalculator from "./ROICalculator";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "ROI Calculator",
  description: "Estimate the revenue opportunity and hours saved from automating lead response and manual work.",
  path: "/resources/roi-calculator",
});

const manualTasks = [
  "Answering customer questions and new inquiries",
  "Calling back missed calls and following up with leads",
  "Scheduling, rescheduling, and sending reminders",
  "Entering information into CRMs and other systems",
  "Processing forms, invoices, quotes, and documents",
  "Creating reports and coordinating routine internal tasks",
];

const valueAreas = [
  { icon: MessageSquareText, title: "Capture every inquiry", body: "Respond, qualify, collect details, and route customer conversations without making people wait.", impact: "Faster responses and fewer missed opportunities." },
  { icon: ArrowRight, title: "Never miss a follow-up", body: "Keep leads, quotes, appointments, and pending requests moving with consistent automated sequences.", impact: "Less manual follow-up and better conversion consistency." },
  { icon: CalendarCheck, title: "Automate scheduling", body: "Offer availability, confirm appointments, handle reschedules, and send reminders through one workflow.", impact: "Less administrative back-and-forth." },
  { icon: Phone, title: "Handle calls with AI", body: "Answer common questions, gather information, book appointments, and hand off when a person is needed.", impact: "More call-handling capacity without adding a queue." },
  { icon: FileText, title: "Automate documents", body: "Extract useful information from forms, invoices, reports, and work orders and send it to the right system.", impact: "Less data entry and fewer manual errors." },
  { icon: Workflow, title: "Connect business systems", body: "Keep CRM, email, calendar, accounting, notifications, and reporting tools synchronized.", impact: "Fewer repetitive handoffs between tools." },
];

const measurementAreas = [
  { title: "Cost savings", body: "Estimate how much repetitive manual work could potentially be reduced." },
  { title: "Time savings", body: "Estimate the employee hours that could be redirected to higher-value work." },
  { title: "Productivity gains", body: "Understand how much more volume your existing team could potentially handle." },
  { title: "Operational efficiency", body: "Identify processes where automation can reduce repetitive effort and handoffs." },
  { title: "Payback period", body: "Estimate how long savings could take to offset an initial automation investment." },
  { title: "Return on investment", body: "Compare the estimated financial benefit with the estimated implementation cost." },
];

const roadmapSteps = [
  { number: "01", title: "Identify", body: "Find repetitive, time-consuming processes in your business." },
  { number: "02", title: "Calculate", body: "Estimate the time and cost associated with those processes." },
  { number: "03", title: "Automate", body: "Build AI-powered workflows around the highest-value opportunities." },
  { number: "04", title: "Integrate", body: "Connect the automation to the tools your team already uses." },
  { number: "05", title: "Measure", body: "Track savings, response times, productivity, and other business KPIs." },
];

const faqs = [
  { question: "What is an AI Automation ROI Calculator?", answer: "It estimates the potential financial impact of automating repetitive business processes using your workload, employee costs, time spent, and automation assumptions." },
  { question: "What information do I need?", answer: "Start with monthly workload, the team involved, time spent on repetitive tasks, employee cost, and an estimate of what percentage could be automated." },
  { question: "Does the calculator provide an exact ROI?", answer: "No. The result is a planning estimate based on the inputs provided. A detailed process analysis is needed for a more precise business case." },
  { question: "Can automation work with my existing software?", answer: "Many workflows can connect to existing CRMs, calendars, communication platforms, accounting tools, databases, and websites through integrations or APIs." },
  { question: "Will automation replace my employees?", answer: "Not necessarily. The goal is usually to remove repetitive work so employees can spend more time on judgment, communication, customer care, and growth." },
];

export default function ROICalculatorPage() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <p className={styles.heroEyebrow}>AI Automation ROI Calculator</p>
          <h1 className={styles.heroTitle}>Discover How Much Your Business Could Save With AI Automation.</h1>
          <p className={styles.heroCopy}>
            Turn repetitive work into measurable savings. Estimate potential cost savings, hours recovered, productivity gains, and return on investment using your own numbers.
          </p>
          <Button href="#calculator" size="lg">Calculate Your ROI <ArrowRight size={16} /></Button>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.contextGrid}>
            <div>
              <p className={styles.sectionEyebrow}>The hidden workload</p>
              <h2>How Much Is Manual Work Really Costing Your Business?</h2>
            </div>
            <div>
              <p className={styles.contextCopy}>Small repetitive tasks add up quickly. Your team may be moving information, answering the same questions, and chasing the same follow-ups hundreds or thousands of times each month.</p>
              <p className={styles.contextCopy}>The calculator turns that invisible workload into a practical estimate you can use for planning.</p>
            </div>
          </div>
          <div className={styles.taskGrid}>
            {manualTasks.map((task) => <div key={task} className={styles.taskItem}>{task}</div>)}
          </div>
        </div>
      </section>

      <section id="calculator" className={`section section-surface ${styles.calculatorSection}`}>
        <div className="container">
          <SectionHeader title="Calculate Your Automation ROI" description="Enter a few operating assumptions. The estimate updates instantly and is intended for planning, not as a guarantee." />
          <ROICalculator />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="Where Can Automation Create Value?" description="The biggest opportunities are usually found in repeated customer interactions, handoffs, and administrative work." />
          <div className={styles.valueGrid}>
            {valueAreas.map((area) => {
              const Icon = area.icon;
              return <article key={area.title} className={styles.valueCard}><span className={styles.valueIcon}><Icon size={18} /></span><h3>{area.title}</h3><p>{area.body}</p><span className={styles.impact}>{area.impact}</span></article>;
            })}
          </div>
        </div>
      </section>

      <section className={`section ${styles.compareSection}`}>
        <div className="container">
          <SectionHeader title="See the Difference" description="Automation replaces repeated handoffs with one connected workflow." />
          <div className={styles.compareGrid}>
            <div className={styles.comparePanel}><span className={styles.compareLabel}>Manual process</span><ol>{["Customer inquiry", "Employee receives request", "Information checked", "Response sent", "Data entered", "Appointment scheduled", "Follow-up remembered"].map((step) => <li key={step}>{step}</li>)}</ol></div>
            <div className={`${styles.comparePanel} ${styles.comparePanelActive}`}><span className={styles.compareLabel}>Automated process</span><ol>{["Customer inquiry", "AI understands the request", "Information captured automatically", "AI responds", "Appointment scheduled", "CRM updated", "Follow-up happens automatically"].map((step) => <li key={step}>{step}</li>)}</ol></div>
          </div>
          <p className={styles.compareNote}>One workflow. Multiple automated actions.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="What Can You Measure?" description="The calculator helps you turn a broad automation idea into measurable operating assumptions." />
          <div className={styles.measureGrid}>{measurementAreas.map((item) => <article key={item.title} className={styles.measureCard}><Gauge size={18} /><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        </div>
      </section>

      <section className={`section section-surface ${styles.stepsSection}`}>
        <div className="container">
          <SectionHeader title="From Manual Operations to Intelligent Automation" description="Use the estimate as the first step in a practical improvement cycle." />
          <div className={styles.stepsGrid}>{roadmapSteps.map((step) => <article key={step.number} className={styles.stepCard}><span className={`${styles.stepNumber} mono`}>{step.number}</span><h3>{step.title}</h3><p>{step.body}</p></article>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.teamBlock}><div><p className={styles.sectionEyebrow}>The bigger opportunity</p><h2>Automation Isn&apos;t Just About Saving Money.</h2></div><div className={styles.teamPoints}><p><strong>Respond faster.</strong> Customers receive help without waiting for someone to become available.</p><p><strong>Reduce missed opportunities.</strong> Lead capture and follow-up happen consistently.</p><p><strong>Give your team time back.</strong> Employees focus on decisions, customers, and growth instead of copy and paste.</p></div></div>
        </div>
      </section>

      <section className={`section ${styles.faqSection}`}>
        <div className="container"><SectionHeader title="Frequently Asked Questions" description="Understand what the estimate means and what to do next." /><FAQAccordion items={faqs} /></div>
      </section>

      <CTASection
        title="Ready to See Your Numbers?"
        description="Use the estimate as a starting point, then get a detailed automation assessment built around your actual workflows."
        primaryLabel="Get a Detailed Automation Assessment"
        primaryHref="/resources/ai-audit"
        secondaryLabel="Talk to an Automation Expert"
        secondaryHref="/contact"
      />
    </>
  );
}
