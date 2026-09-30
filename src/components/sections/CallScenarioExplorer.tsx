"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, HelpCircle, PhoneForwarded, Siren, UserCheck } from "lucide-react";
import styles from "./CallScenarioExplorer.module.css";

const scenarios = [
  {
    id: "enquiry",
    label: "New enquiry",
    icon: HelpCircle,
    heard: "Hi, I'd like to know more about what you offer and what it costs.",
    steps: ["Answers instantly in a natural voice", "Explains services using your approved information", "Asks qualifying questions and captures contact details"],
    outcome: "Qualified lead created in your CRM with a full summary.",
  },
  {
    id: "booking",
    label: "Booking request",
    icon: CalendarCheck,
    heard: "Can I schedule an appointment for later this week?",
    steps: ["Checks live calendar availability", "Offers open time slots and confirms the choice", "Sends an instant confirmation by SMS or email"],
    outcome: "Appointment booked and reminders scheduled automatically.",
  },
  {
    id: "urgent",
    label: "Urgent request",
    icon: Siren,
    heard: "This can't wait — I need someone to help me right now.",
    steps: ["Detects urgency from wording and tone", "Prioritises the call above routine requests", "Transfers live to on-call staff, or alerts them with context"],
    outcome: "The right person is on the line within seconds, already briefed.",
  },
  {
    id: "existing",
    label: "Existing customer",
    icon: UserCheck,
    heard: "I'm calling about my last visit and need to change something.",
    steps: ["Recognises the caller from your CRM", "Pulls up their history and current status", "Handles the change or routes to the right team member"],
    outcome: "Records stay accurate and the customer never repeats themselves.",
  },
  {
    id: "handoff",
    label: "Needs a human",
    icon: PhoneForwarded,
    heard: "I'd rather speak with a person about this.",
    steps: ["Acknowledges the request without friction", "Warm-transfers during hours, or books a callback", "Passes the full conversation summary to your team"],
    outcome: "Complex conversations reach your team with complete context.",
  },
];

export default function CallScenarioExplorer() {
  const [active, setActive] = useState(0);
  const current = scenarios[active];

  return (
    <div className={styles.wrap}>
      <div className={styles.tabs} role="tablist" aria-label="Call scenarios">
        {scenarios.map((s, i) => {
          const Icon = s.icon;
          return (
            <button
              key={s.id}
              role="tab"
              aria-selected={active === i}
              className={`${styles.tab} ${active === i ? styles.tabActive : ""}`}
              onClick={() => setActive(i)}
            >
              <Icon size={16} />
              <span>{s.label}</span>
            </button>
          );
        })}
      </div>

      <div className={styles.panel} role="tabpanel">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className={styles.panelInner}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.col}>
              <span className={`${styles.colLabel} mono`}>CALLER SAYS</span>
              <p className={styles.quote}>&ldquo;{current.heard}&rdquo;</p>
            </div>

            <div className={styles.col}>
              <span className={`${styles.colLabel} mono`}>AI AGENT DOES</span>
              <ul className={styles.steps}>
                {current.steps.map((step, i) => (
                  <li key={step} className={styles.step}>
                    <span className={`${styles.stepNum} mono`}>{String(i + 1).padStart(2, "0")}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${styles.col} ${styles.outcomeCol}`}>
              <span className={`${styles.colLabel} mono`}>OUTCOME</span>
              <p className={styles.outcome}>{current.outcome}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}