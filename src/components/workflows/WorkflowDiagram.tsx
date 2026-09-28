"use client";

import { motion } from "framer-motion";
import styles from "./WorkflowDiagram.module.css";

interface WorkflowDiagramProps {
  stages: string[];
  highlightIndex?: number;
  dense?: boolean;
}

export default function WorkflowDiagram({ stages, highlightIndex, dense = false }: WorkflowDiagramProps) {
  return (
    <div className={`${styles.diagram} ${dense ? styles.dense : ""}`} role="list" aria-label="Automation workflow">
      {stages.map((stage, i) => (
        <div className={styles.stageWrap} key={stage} role="listitem">
          <motion.div
            className={`${styles.node} ${highlightIndex === i ? styles.nodeActive : ""}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={`${styles.nodeIndex} mono`}>{String(i + 1).padStart(2, "0")}</span>
            <span className={styles.nodeLabel}>{stage}</span>
          </motion.div>
          {i < stages.length - 1 && (
            <motion.div
              className={styles.connector}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 + 0.15, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden
            >
              <svg viewBox="0 0 40 12" className={styles.connectorSvg} preserveAspectRatio="none">
                <defs>
                  <linearGradient id={`connector-grad-${i}`} x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#3e5fae" />
                    <stop offset="100%" stopColor="#26417a" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="6" x2="34" y2="6" stroke={`url(#connector-grad-${i})`} strokeWidth="1.5" />
                <path d="M28 1 L36 6 L28 11" fill="none" stroke={`url(#connector-grad-${i})`} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
              </svg>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
