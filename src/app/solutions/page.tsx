import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import { solutions, solutionCategories } from "@/data/solutions";
import { solutionPages } from "@/data/solutionPages";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "AI Automation Solutions",
  description:
    "Seven solutions that carry work from the first contact to the finished record: answer, qualify, book, follow up, record, and file.",
  path: "/solutions",
});

/* ---------- data: built from the same files the solution pages use ---------- */

const order = [
  "ai-voice-agents",
  "ai-chat",
  "ai-lead-response",
  "ai-appointment-booking",
  "ai-follow-up",
  "ai-crm-automation",
  "ai-document-processing",
];

const stations = order.map((route) => {
  const content = solutionPages[route];
  const data = solutions.find((s) => s.slug === content.dataSlug)!;
  return { route, content, data };
});

/** New copy for the landing page: the job each solution does, and what it hands to the next step. */
const copy: Record<string, { job: string; passes: string }> = {
  "ai-voice-agents": {
    job: "Picks up every call and places the outbound ones, so no request waits for a free pair of hands.",
    passes: "A call summary, the details captured, and an urgency flag.",
  },
  "ai-chat": {
    job: "Answers written messages in the moment and gathers whatever a request is missing.",
    passes: "A complete, structured request with the full transcript.",
  },
  "ai-lead-response": {
    job: "Acknowledges every inbound request, spots the urgent ones, and finds the right owner.",
    passes: "A qualified request with an owner already assigned.",
  },
  "ai-appointment-booking": {
    job: "Turns a ready request into a confirmed slot, then keeps that slot from going to waste.",
    passes: "A confirmed booking with reminders already scheduled.",
  },
  "ai-follow-up": {
    job: "Keeps anything waiting on a customer moving, before the work and after it.",
    passes: "An outcome, whether won, lost, or paused, with the reason logged.",
  },
  "ai-crm-automation": {
    job: "Writes every interaction back to one record and creates the tasks that come next.",
    passes: "One accurate customer record, with an audit trail of every change.",
  },
  "ai-document-processing": {
    job: "Reads forms and documents, checks them, and files the data where it belongs.",
    passes: "Clean, validated data in the right system, with exceptions flagged.",
  },
};

/** Which menu heading each station starts under (index of the first station in each group). */
const groupStarts: Record<number, { label: string; name: string }> = {
  0: { label: "Capture", name: solutionCategories[0] },
  3: { label: "Convert", name: solutionCategories[1] },
  5: { label: "Operate", name: solutionCategories[2] },
};

/** Every pain from every solution page, as a lookup: "if this is happening, start here". */
const symptoms = stations.flatMap((s) =>
  s.content.pains.map((p) => ({ title: p.title, route: s.route, name: s.data.name })),
);

const nameOf = (route: string) => stations.find((s) => s.route === route)!.data.name;

const starts = [
  {
    goal: "Never miss a request",
    note: "Answer every call, message, and form the moment it arrives.",
    chain: ["ai-voice-agents", "ai-chat", "ai-lead-response"],
  },
  {
    goal: "Keep the calendar full",
    note: "Move qualified requests to confirmed bookings, and refill what falls through.",
    chain: ["ai-lead-response", "ai-appointment-booking", "ai-follow-up"],
  },
  {
    goal: "Keep your data clean",
    note: "Stop retyping. Let every interaction and document file itself.",
    chain: ["ai-crm-automation", "ai-document-processing"],
  },
  {
    goal: "The full line",
    note: "All seven connected, so each hands off to the next without a person in between.",
    chain: order,
  },
];

const faqs = [
  {
    question: "Do I need all seven solutions?",
    answer:
      "No. Each solution works on its own. They are designed to hand off to each other, so you can start with the one that fixes your biggest gap and connect the rest later.",
  },
  {
    question: "How do I know where to start?",
    answer:
      "Look at where requests are being lost or delayed today. The lookup above matches common problems to the solution that fixes them, and an AI Audit maps it against your actual process.",
  },
  {
    question: "Will the solutions work with the tools we already use?",
    answer:
      "Yes. They connect to your existing CRM, calendar, phone system, and file storage rather than replacing them, with field mapping set up during onboarding.",
  },
  {
    question: "Does automation replace my team?",
    answer:
      "No. The solutions handle the repetitive steps and hand off to a person whenever a request is urgent, unclear, or needs judgment, with the full context attached.",
  },
  {
    question: "Are these built for one type of business?",
    answer:
      "No. Each solution automates a process that every business runs, such as answering, scheduling, following up, recording, and filing, and is configured around your own rules and wording.",
  },
];

/* ---------- page ---------- */

export default function SolutionsPage() {
  return (
    <>
      {/* 1. HERO: a request travelling down one line */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <span className={`${styles.eyebrow} mono`}>Solutions</span>
            <h1 className={styles.heroTitle}>
              Seven solutions. One line from first contact to finished work.
            </h1>
            <p className={styles.heroCopy}>
              Every business runs the same chain: a request arrives, gets answered, gets a time, gets followed up, and
              gets recorded. Each solution automates one link in that chain, and they hand off to each other.
            </p>
            <div className={styles.heroActions}>
              <Button href="/resources/ai-audit" size="lg">Get Your AI Audit</Button>
              {/* <Button href="#lookup" variant="secondary" size="lg">Find your starting point</Button> */}
            </div>
          </div>

          <ol className={styles.rail} aria-label="The seven solutions in order">
            <li className={styles.railEnd}>Request comes in</li>
            {stations.map((s, i) => (
              <li key={s.route}>
                <Link href={`/solutions/${s.route}`} className={styles.railItem}>
                  <span className={`${styles.railNum} mono`}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.railName}>{s.data.name}</span>
                  <ArrowUpRight size={16} aria-hidden />
                </Link>
              </li>
            ))}
            <li className={styles.railEnd}>Work done, record kept</li>
          </ol>
        </div>
      </section>

      {/* 2. THE LINE: station by station */}
      <section className={`section ${styles.lineSection}`}>
        <div className="container">
          <SectionHeader
            title="Follow one request down the line"
            description="Here is what each solution does with it, and what it passes to the next."
          />
          <div className={styles.line}>
            {stations.map((s, i) => {
              const group = groupStarts[i];
              const side = i % 2 === 0 ? styles.left : styles.right;
              return (
                <div key={s.route} className={styles.stationWrap}>
                  {group && (
                    <div className={styles.groupLabel}>
                      <span className={`${styles.groupTag} mono`}>{group.label}</span>
                      <span className={styles.groupName}>{group.name}</span>
                    </div>
                  )}
                  <div className={`${styles.station} ${side}`}>
                    <div className={styles.stationBody}>
                      <h3 className={styles.stationName}>{s.data.name}</h3>
                      <p className={styles.stationJob}>{copy[s.route].job}</p>
                      <p className={styles.passes}>
                        <span className={`${styles.passesLabel} mono`}>PASSES ON</span>
                        {copy[s.route].passes}
                      </p>
                      <p className={`${styles.flow} mono`}>{s.data.workflow.join("  →  ")}</p>
                      <Link href={`/solutions/${s.route}`} className={styles.stationLink}>
                        Open {s.data.name} <ArrowRight size={15} aria-hidden />
                      </Link>
                    </div>
                    <span className={`${styles.node} mono`}>{i + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. LOOKUP: start from the symptom */}
      <section id="lookup" className={`section ${styles.lookup}`}>
        <div className="container">
          <div className={styles.lookupHead}>
            <span className={`${styles.eyebrowDark} mono`}>Start from the problem</span>
            <h2 className={styles.lookupTitle}>If this is happening, start here.</h2>
            <p className={styles.lookupCopy}>
              Every problem below comes from a solution page. Pick the one that sounds familiar.
            </p>
          </div>
          <ul className={styles.symptomList}>
            {symptoms.map((p) => (
              <li key={`${p.route}-${p.title}`}>
                <Link href={`/solutions/${p.route}`} className={styles.symptom}>
                  <span className={styles.symptomTitle}>{p.title}</span>
                  <span className={styles.symptomTo}>
                    {p.name} <ArrowRight size={14} aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. COMMON WAYS TO START */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Common ways to start"
            description="Begin with a goal, then add links to the chain as you need them."
          />
          <div className={styles.starts}>
            {starts.map((st) => (
              <div key={st.goal} className={styles.start}>
                <div className={styles.startText}>
                  <h3 className={styles.startGoal}>{st.goal}</h3>
                  <p className={styles.startNote}>{st.note}</p>
                </div>
                <div className={styles.chain}>
                  {st.chain.map((route, i) => (
                    <span key={route} className={styles.chainItem}>
                      <Link href={`/solutions/${route}`} className={styles.pill}>
                        {nameOf(route)}
                      </Link>
                      {i < st.chain.length - 1 && <ArrowRight size={14} aria-hidden className={styles.chainArrow} />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="section section-surface">
        <div className="container">
          <div className={styles.faqLayout}>
            <SectionHeader
              title="Questions before you choose"
              description="The short answers to what most teams ask first."
            />
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Link to Automate First?"
        description="An AI Audit maps your current process, shows where requests are lost, and tells you where to start."
        primaryLabel="Get Your AI Audit"
        primaryHref="/resources/ai-audit"
        secondaryLabel="Talk to Us"
        secondaryHref="/contact"
      />
    </>
  );
}