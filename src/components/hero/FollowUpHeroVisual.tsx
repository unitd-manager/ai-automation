"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, Mail, MessageSquare, Pause, Sparkles, TrendingUp, UserCheck } from "lucide-react";
import styles from "./FollowUpHeroVisual.module.css";

export default function FollowUpHeroVisual() {
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

        {/* Main sequence card */}
        <div className={styles.card}>
          <div className={styles.cardGlow} />

          <div className={styles.cardHeader}>
            <span className={styles.live}>
              <span className={styles.liveDot} />
              FOLLOW-UP
            </span>
            <span className={`${styles.timer} mono`}>Quote #2214</span>
          </div>

          <div className={styles.caller}>
            <span className={styles.avatar}>
              <TrendingUp size={18} />
            </span>
            <div>
              <p className={styles.callerName}>Open opportunity</p>
              <p className={`${styles.callerMeta} mono`}>Estimate sent, no reply yet</p>
            </div>
          </div>

          <div className={styles.sequence}>
            <div className={styles.touch}>
              <span className={styles.touchDot}><Mail size={13} /></span>
              <div className={styles.touchBody}>
                <p className={styles.touchDay}>DAY 0</p>
                <p className={styles.touchText}>Quote emailed to customer</p>
              </div>
            </div>
            <div className={styles.touch}>
              <span className={styles.touchDot}><MessageSquare size={13} /></span>
              <div className={styles.touchBody}>
                <p className={styles.touchDay}>DAY 2</p>
                <p className={styles.touchText}>Check-in text sent</p>
              </div>
            </div>
            <div className={styles.touch}>
              <span className={`${styles.touchDot} ${styles.touchDotPaused}`}><Pause size={13} /></span>
              <div className={styles.touchBody}>
                <p className={styles.touchDay}>DAY 5</p>
                <p className={styles.touchText}>Paused — customer replied</p>
              </div>
            </div>
            <div className={styles.touch}>
              <span className={styles.touchDot}><UserCheck size={13} /></span>
              <div className={styles.touchBody}>
                <p className={styles.touchDay}>NEXT</p>
                <p className={styles.touchText}>Escalated to rep for close</p>
              </div>
            </div>
          </div>

          <div className={styles.pausedBanner}>
            <CheckCircle2 size={14} />
            Sequence paused automatically on reply
          </div>
        </div>

        {/* Floating chips */}
        <div className={`${styles.chip} ${styles.chipIntent}`}>
          <Sparkles size={14} />
          <span>
            <em>Touch 2 of 4</em> Sent
          </span>
        </div>
        <div className={`${styles.chip} ${styles.chipUrgency}`}>
          <MessageSquare size={14} />
          <span>
            <em>Channel</em> SMS + Email
          </span>
        </div>
        <div className={`${styles.chip} ${styles.chipCalendar}`}>
          <UserCheck size={14} />
          <span>
            <em>Escalation</em> Day 5
          </span>
        </div>
        <div className={`${styles.chip} ${styles.chipCrm}`}>
          <CheckCircle2 size={14} />
          <span>
            <em>Outcome</em> Logged
          </span>
        </div>
      </motion.div>
    </div>
  );
}