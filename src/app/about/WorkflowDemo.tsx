"use client";

import { useEffect, useState } from "react";
import { Phone, Bot, Database, CalendarCheck } from "lucide-react";
import styles from "./page.module.css";

const steps = [
  { icon: Phone, title: "Inbound call at 7:42 pm", detail: "Office closed · HVAC repair request", time: "0s", brand: false },
  { icon: Bot, title: "AI voice agent answers", detail: "Qualifies job, urgency, address", time: "2s", brand: true },
  { icon: Database, title: "Lead logged in CRM", detail: "Contact, notes, call recording", time: "48s", brand: false },
  { icon: CalendarCheck, title: "Appointment booked", detail: "Tomorrow 9:00 am · SMS confirmation sent", time: "1m 12s", brand: false },
];

export default function WorkflowDemo() {
  // Start fully lit so the resting state (and no-JS render) shows the whole flow.
  const [active, setActive] = useState(steps.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((a) => (a >= steps.length ? 1 : a + 1)), 1400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className={styles.schema} aria-label="Example automation: an after-hours call handled end to end">
      <div className={styles.schemaTop}>
        <span>workflow · after-hours-call.flow</span>
        <span className={styles.live}>Running</span>
      </div>
      <div className={styles.flow}>
        {steps.map((s, i) => (
          <div key={s.title}>
            {i > 0 && <div className={styles.wire} />}
            <div className={`${styles.node} ${i < active ? styles.nodeOn : ""} ${s.brand ? styles.nodeBrand : ""}`}>
              <span className={styles.nodeIcon}><s.icon size={18} strokeWidth={1.8} /></span>
              <div>
                <b>{s.title}</b>
                <small>{s.detail}</small>
              </div>
              <span className={styles.nodeTime}>{s.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.schemaFoot}>
        <span>Human touches: <b>0</b></span>
        <span>Example workflow</span>
      </div>
    </div>
  );
}
