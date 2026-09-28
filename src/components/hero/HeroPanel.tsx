"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./HeroPanel.module.css";

interface HeroPanelProps {
  stages?: string[];
  eyebrow?: string;
}

export default function HeroPanel({
  stages = ["Customer", "AI Response", "Qualification", "CRM", "Appointment", "Follow-Up", "Revenue"],
  eyebrow = "LIVE WORKFLOW",
}: HeroPanelProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={styles.panel}>
      <div className={styles.panelGlow} aria-hidden />
      <div className={styles.panelHeader}>
        <span className={`${styles.panelLabel} mono`}>{eyebrow}</span>
        <span className={styles.dot} aria-hidden />
      </div>

      <div className={styles.flow}>
        <svg className={styles.line} viewBox="0 0 2 100" preserveAspectRatio="none" aria-hidden>
          <line x1="1" y1="0" x2="1" y2="100" stroke="#26314a" strokeWidth="2" />
          {reduceMotion ? (
            <line x1="1" y1="0" x2="1" y2="100" stroke="#4c74d6" strokeWidth="2" />
          ) : (
            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="100"
              stroke="#4c74d6"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.6, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 0.6 }}
            />
          )}
        </svg>

        {!reduceMotion && (
          <motion.span
            className={styles.particle}
            aria-hidden
            initial={{ top: "0%", opacity: 0 }}
            animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.6 }}
          />
        )}

        <ul className={styles.stageList}>
          {stages.map((stage, i) => (
            <motion.li
              key={stage}
              className={styles.stage}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
            >
              <span className={styles.node} />
              <span className={styles.stageLabel}>{stage}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className={styles.readout}>
        <div className={styles.readoutItem}>
          <span className={`${styles.readoutValue} mono`}>&lt; 60s</span>
          <span className={styles.readoutLabel}>example response time</span>
        </div>
        <div className={styles.readoutItem}>
          <span className={`${styles.readoutValue} mono`}>24/7</span>
          <span className={styles.readoutLabel}>coverage</span>
        </div>
      </div>
    </div>
  );
}
