"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { BookOpen, CalendarCheck, Database, MessageSquare, Sparkles, UserCheck } from "lucide-react";
import styles from "./ChatHeroVisual.module.css";

export default function ChatHeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Pointer position, normalised to -0.5 ... 0.5
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

        {/* Main chat console */}
        <div className={styles.card}>
          <div className={styles.cardGlow} />

          <div className={styles.cardHeader}>
            <span className={styles.live}>
              <span className={styles.liveDot} />
              LIVE CHAT
            </span>
            <span className={`${styles.timer} mono`}>Replied in 2s</span>
          </div>

          <div className={styles.caller}>
            <span className={styles.avatar}>
              <MessageSquare size={18} />
            </span>
            <div>
              <p className={styles.callerName}>Website visitor</p>
              <p className={`${styles.callerMeta} mono`}>Viewing: Services page</p>
            </div>
          </div>

          <div className={styles.transcript}>
            <div className={`${styles.bubble} ${styles.bubbleCaller}`}>
              Do you cover my area, and can someone come out this week?
            </div>
            <div className={`${styles.bubble} ${styles.bubbleAgent}`}>
              <span className={styles.agentTag}>
                <Sparkles size={11} /> AI chat
              </span>
              Yes, we do. I have openings Thursday and Friday. What&apos;s the best email to send a confirmation to?
            </div>
            <div className={`${styles.bubble} ${styles.bubbleCaller}`}>Thursday works.</div>
            <div className={styles.typing}>
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        {/* Floating chips */}
        <div className={`${styles.chip} ${styles.chipIntent}`}>
          <BookOpen size={14} />
          <span>
            <em>Answered from</em> Your service info
          </span>
        </div>
        <div className={`${styles.chip} ${styles.chipUrgency}`}>
          <UserCheck size={14} />
          <span>
            <em>Lead</em> Qualified
          </span>
        </div>
        <div className={`${styles.chip} ${styles.chipCalendar}`}>
          <CalendarCheck size={14} />
          <span>
            <em>Booked</em> Thursday
          </span>
        </div>
        <div className={`${styles.chip} ${styles.chipCrm}`}>
          <Database size={14} />
          <span>
            <em>CRM</em> Record updated
          </span>
        </div>
      </motion.div>
    </div>
  );
}