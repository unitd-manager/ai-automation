"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { CalendarCheck, Check, Clock, Database, FileText, Route, Sparkles, UserCheck } from "lucide-react";
import styles from "./LeadResponseHeroVisual.module.css";

export default function LeadResponseHeroVisual() {
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

        {/* Main lead card */}
        <div className={styles.card}>
          <div className={styles.cardGlow} />

          <div className={styles.cardHeader}>
            <span className={styles.live}>
              <span className={styles.liveDot} />
              NEW LEAD
            </span>
            <span className={styles.ticketMeta}>
              <span className={styles.channelTag}>Web form</span>
            </span>
          </div>

          <div className={styles.caller}>
            <span className={styles.avatar}>
              <FileText size={18} />
            </span>
            <div>
              <p className={styles.callerName}>Inquiry #4821</p>
              <p className={`${styles.callerMeta} mono`}>Submitted 0:03 ago</p>
            </div>
          </div>

          <div className={styles.responseTimer}>
            <span className={styles.responseTimerLabel}>
              <Clock size={14} />
              Time to first response
            </span>
            <span className={`${styles.responseTimerValue} mono`}>00:41</span>
          </div>

          <div className={styles.checklist}>
            <div className={styles.checkItem}>
              <span className={styles.checkDone}><Check size={11} /></span>
              <span>Instant reply sent</span>
            </div>
            <div className={styles.checkItem}>
              <span className={styles.checkDone}><Check size={11} /></span>
              <span>Qualifying questions answered</span>
            </div>
            <div className={styles.checkItem}>
              <span className={styles.checkDone}><Check size={11} /></span>
              <span>Service type & timeline captured</span>
            </div>
            <div className={styles.checkItem}>
              <span className={styles.checkPending} />
              <span>Awaiting rep pickup</span>
            </div>
          </div>

          <div className={styles.routedRow}>
            <Route size={14} />
            <span>Routed to</span>
            <span className={styles.routedRep}>
              <span className={styles.repAvatar}>JM</span>
              Jordan M.
            </span>
          </div>
        </div>

        {/* Floating chips */}
        <div className={`${styles.chip} ${styles.chipIntent}`}>
          <Sparkles size={14} />
          <span>
            <em>Qualified in</em> 41 seconds
          </span>
        </div>
        <div className={`${styles.chip} ${styles.chipUrgency}`}>
          <UserCheck size={14} />
          <span>
            <em>Lead</em> Sales-ready
          </span>
        </div>
        <div className={`${styles.chip} ${styles.chipCalendar}`}>
          <CalendarCheck size={14} />
          <span>
            <em>Next step</em> Callback booked
          </span>
        </div>
        <div className={`${styles.chip} ${styles.chipCrm}`}>
          <Database size={14} />
          <span>
            <em>CRM</em> Record created
          </span>
        </div>
      </motion.div>
    </div>
  );
}