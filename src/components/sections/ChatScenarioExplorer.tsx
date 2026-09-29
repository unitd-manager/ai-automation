"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, DollarSign, HelpCircle, MapPin, UserCheck } from "lucide-react";
import styles from "./ChatScenarioExplorer.module.css";

const scenarios = [
  {
    id: "services",
    label: "Service question",
    icon: HelpCircle,
    heard: "Do you handle this type of job, and what does it involve?",
    steps: ["Answers instantly from your service catalog and FAQs", "Explains what's included using your approved wording", "Asks a qualifying question and captures contact details"],
    outcome: "Qualified lead created in your CRM with the full conversation attached.",
  },
  {
    id: "pricing",
    label: "Pricing question",
    icon: DollarSign,
    heard: "Roughly how much does this cost?",
    steps: ["Explains your pricing structure the way you would", "Collects the details needed for an accurate estimate", "Offers to book an estimate or hands off to your team"],
    outcome: "The visitor gets a real answer and your team gets a ready-to-quote lead.",
  },
  {
    id: "area",
    label: "Service area",
    icon: MapPin,
    heard: "Do you cover my area?",
    steps: ["Checks the location against your service area", "Confirms coverage or politely explains what's outside it", "Captures the address for routing by territory"],
    outcome: "Out-of-area enquiries are filtered out and in-area leads are routed correctly.",
  },
  {
    id: "booking",
    label: "Booking request",
    icon: CalendarCheck,
    heard: "Can I schedule something for later this week?",
    steps: ["Checks live calendar availability", "Offers open time slots and confirms the choice", "Sends an instant confirmation by email or SMS"],
    outcome: "Appointment booked and reminders scheduled automatically.",
  },
  {
    id: "human",
    label: "Needs a human",
    icon: UserCheck,
    heard: "I'd rather speak with a person about this.",
    steps: ["Acknowledges the request without friction", "Hands off live during hours, or schedules a callback", "Passes the full chat transcript and captured details to your team"],
    outcome: "Complex conversations reach your team with complete context.",
  },
];

export default function ChatScenarioExplorer() {
  const [active, setActive] = useState(0);
  const current = scenarios[active];

  return (
    <div className={styles.wrap}>
      <div className={styles.tabs} role="tablist" aria-label="Chat scenarios">
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
              <span className={`${styles.colLabel} mono`}>VISITOR ASKS</span>
              <p className={styles.quote}>&ldquo;{current.heard}&rdquo;</p>
            </div>

            <div className={styles.col}>
              <span className={`${styles.colLabel} mono`}>AI CHAT DOES</span>
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