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
        <motion.div
          key={stage}
          className={styles.stageWrap}
          role="listitem"
          aria-label={`Step ${i + 1}: ${stage}`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={`${styles.node} ${highlightIndex === i ? styles.nodeActive : ""}`}>
            <span className={`${styles.nodeIndex} mono`}>{String(i + 1).padStart(2, "0")}</span>
            <span className={styles.nodeLabel}>{stage}</span>
          </div>
          {i < stages.length - 1 && (
            <motion.div
              className={styles.connector}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 + 0.15, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden
            >
              <svg viewBox="0 0 100 44" className={styles.connectorSvg} preserveAspectRatio="none" aria-hidden>
                <path className={styles.desktopPath} d="M0 22 H88" />
                <path className={styles.desktopArrow} d="M80 16 L88 22 L80 28" />
                <path className={styles.mobilePath} d="M50 0 V38" />
                <path className={styles.mobileArrow} d="M44 32 L50 38 L56 32" />
              </svg>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
