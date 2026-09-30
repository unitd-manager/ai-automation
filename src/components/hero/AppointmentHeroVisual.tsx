"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { Bell, CalendarCheck, Check, Database, MessageSquare, Sparkles, UserCheck } from "lucide-react";
import styles from "./AppointmentHeroVisual.module.css";

export default function AppointmentHeroVisual() {
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

        {/* Main booking card */}
        <div className={styles.card}>
          <div className={styles.cardGlow} />

          <div className={styles.cardHeader}>
            <span className={styles.live}>
              <span className={styles.liveDot} />
              BOOKING
            </span>
            <span className={`${styles.timer} mono`}>Thursday</span>
          </div>

          <div className={styles.caller}>
            <span className={styles.avatar}>
              <CalendarCheck size={18} />
            </span>
            <div>
              <p className={styles.callerName}>Qualified lead</p>
              <p className={`${styles.callerMeta} mono`}>Checking live availability</p>
            </div>
          </div>

          <div className={styles.slotRow}>
            <span className={`${styles.slot} ${styles.slotFull}`}>9:00</span>
            <span className={`${styles.slot} ${styles.slotSelected}`}>11:30</span>
            <span className={styles.slot}>1:00</span>
            <span className={`${styles.slot} ${styles.slotFull}`}>3:00</span>
          </div>

          <div className={styles.bookedCard}>
            <span className={styles.bookedIcon}><Check size={15} /></span>
            <p className={styles.bookedText}>
              Booked for <span className={styles.bookedTime}>Thu, 11:30 AM</span>
            </p>
          </div>

          <div className={styles.reminderList}>
            <div className={styles.reminderItem}>
              <span><Check size={12} style={{ marginRight: 6 }} />Confirmation sent</span>
              <span className={styles.reminderWhen}>Instant</span>
            </div>
            <div className={styles.reminderItem}>
              <span><Bell size={12} style={{ marginRight: 6 }} />Reminder scheduled</span>
              <span className={styles.reminderWhen}>Day before</span>
            </div>
          </div>
        </div>

        {/* Floating chips */}
        <div className={`${styles.chip} ${styles.chipIntent}`}>
          <Sparkles size={14} />
          <span>
            <em>Buffer rule</em> Applied
          </span>
        </div>
        <div className={`${styles.chip} ${styles.chipUrgency}`}>
          <MessageSquare size={14} />
          <span>
            <em>SMS</em> Confirmation sent
          </span>
        </div>
        <div className={`${styles.chip} ${styles.chipCalendar}`}>
          <UserCheck size={14} />
          <span>
            <em>No-show risk</em> Low
          </span>
        </div>
        <div className={`${styles.chip} ${styles.chipCrm}`}>
          <Database size={14} />
          <span>
            <em>Calendar</em> Synced
          </span>
        </div>
      </motion.div>
    </div>
  );
}