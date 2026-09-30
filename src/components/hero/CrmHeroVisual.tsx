"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Bell, Check, Database, GitMerge, Sparkles, UserCheck } from "lucide-react";
import styles from "./CrmHeroVisual.module.css";

export default function CrmHeroVisual() {
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

        {/* Main record card */}
        <div className={styles.card}>
          <div className={styles.cardGlow} />

          <div className={styles.cardHeader}>
            <span className={styles.live}>
              <span className={styles.liveDot} />
              SYNCING
            </span>
            <span className={`${styles.timer} mono`}>4 sources</span>
          </div>

          <div className={styles.caller}>
            <span className={styles.avatar}>
              <GitMerge size={18} />
            </span>
            <div>
              <p className={styles.callerName}>Customer record</p>
              <p className={`${styles.callerMeta} mono`}>Merging into one profile</p>
            </div>
          </div>

          <div className={styles.sourceRow}>
            <span className={styles.sourceChip}>Call log</span>
            <span className={styles.sourceChip}>Web form</span>
            <span className={styles.sourceChip}>Chat</span>
            <span className={styles.sourceChip}>Booking</span>
          </div>

          <div className={styles.mergeArrow}>
            <ArrowDown size={16} />
          </div>

          <div className={styles.recordCard}>
            <p className={styles.recordTitle}>Jordan Ramirez</p>
            <div className={styles.fieldRow}>
              <span>Last contact</span>
              <span className={styles.fieldValue}>Today, 11:32 AM</span>
            </div>
            <div className={styles.fieldRow}>
              <span>Service type</span>
              <span className={styles.fieldValue}>Roof inspection</span>
            </div>
            <div className={styles.fieldRow}>
              <span>Status</span>
              <span className={styles.fieldValue}>Appointment booked</span>
            </div>
          </div>

          <div className={styles.checklist}>
            <div className={styles.checkItem}>
              <span className={styles.checkDone}><Check size={11} /></span>
              <span>Duplicate records merged</span>
            </div>
            <div className={styles.checkItem}>
              <span className={styles.checkDone}><Check size={11} /></span>
              <span>Fields mapped to your CRM</span>
            </div>
          </div>
        </div>

        {/* Floating chips */}
        <div className={`${styles.chip} ${styles.chipIntent}`}>
          <Sparkles size={14} />
          <span>
            <em>Dedup</em> No duplicates
          </span>
        </div>
        <div className={`${styles.chip} ${styles.chipUrgency}`}>
          <Bell size={14} />
          <span>
            <em>Task</em> Auto-created
          </span>
        </div>
        <div className={`${styles.chip} ${styles.chipCalendar}`}>
          <UserCheck size={14} />
          <span>
            <em>Owner</em> Assigned
          </span>
        </div>
        <div className={`${styles.chip} ${styles.chipCrm}`}>
          <Database size={14} />
          <span>
            <em>Audit trail</em> Logged
          </span>
        </div>
      </motion.div>
    </div>
  );
}