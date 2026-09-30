"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, Database, FileText, Route, ScanLine, Sparkles, UserCheck } from "lucide-react";
import styles from "./DocumentHeroVisual.module.css";

export default function DocumentHeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 90, damping: 16, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 90, damping: 16, mass: 0.6 });

  const rotateY = useTransform(sx, [-0.5, 0.5], [-22, -2]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [16, 0]);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <div ref={ref} className={styles.scene} onPointerMove={handleMove} onPointerLeave={handleLeave} aria-hidden>
      <div className={styles.aura} />

      <motion.div className={styles.stage} style={reduceMotion ? { rotateY: -12, rotateX: 6 } : { rotateY, rotateX }}>
        <div className={`${styles.layer} ${styles.layerBack}`} />
        <div className={`${styles.layer} ${styles.layerMid}`} />

        <span className={`${styles.ring} ${styles.ringOne}`} />
        <span className={`${styles.ring} ${styles.ringTwo}`} />

        {/* Main document card */}
        <div className={styles.card}>
          <div className={styles.cardGlow} />

          <div className={styles.cardHeader}>
            <span className={styles.live}>
              <span className={styles.liveDot} />
              PROCESSING
            </span>
            <span className={`${styles.timer} mono`}>0.9s</span>
          </div>

          <div className={styles.docPreview}>
            <span className={styles.docThumb}>
              <FileText size={16} />
            </span>
            <div>
              <p className={styles.docName}>invoice_4821.pdf</p>
              <p className={styles.docMeta}>Received via email</p>
            </div>
            <span style={{ marginLeft: "auto" }}>
              <ScanLine size={16} color="#7ba0f2" />
            </span>
          </div>

          <div className={styles.extractGrid}>
            <div className={styles.extractField}>
              <p className={styles.extractLabel}>Vendor</p>
              <p className={styles.extractValue}>ABC Supply Co.</p>
            </div>
            <div className={styles.extractField}>
              <p className={styles.extractLabel}>Amount</p>
              <p className={styles.extractValue}>$1,240.00</p>
            </div>
            <div className={styles.extractField}>
              <p className={styles.extractLabel}>Invoice #</p>
              <p className={styles.extractValue}>INV-88213</p>
            </div>
            <div className={styles.extractField}>
              <p className={styles.extractLabel}>Due date</p>
              <p className={styles.extractValue}>Oct 14, 2026</p>
            </div>
          </div>

          <div className={styles.routedRow}>
            <CheckCircle2 size={14} />
            <span>Validated and routed to QuickBooks</span>
          </div>
        </div>

        {/* Floating chips */}
        <div className={`${styles.chip} ${styles.chipIntent}`}>
          <Sparkles size={14} />
          <span>
            <em>Confidence</em> 99%
          </span>
        </div>
        <div className={`${styles.chip} ${styles.chipUrgency}`}>
          <Route size={14} />
          <span>
            <em>Routed to</em> Accounts payable
          </span>
        </div>
        <div className={`${styles.chip} ${styles.chipCalendar}`}>
          <UserCheck size={14} />
          <span>
            <em>Exceptions</em> None flagged
          </span>
        </div>
        <div className={`${styles.chip} ${styles.chipCrm}`}>
          <Database size={14} />
          <span>
            <em>System</em> Record created
          </span>
        </div>
      </motion.div>
    </div>
  );
}