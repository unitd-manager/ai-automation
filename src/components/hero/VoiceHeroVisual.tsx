"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { AudioLines, CalendarCheck, Database, PhoneIncoming, Siren, Sparkles } from "lucide-react";
import styles from "./VoiceHeroVisual.module.css";

const BARS = 32;

export default function VoiceHeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Pointer position, normalised to -0.5 ... 0.5
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 90, damping: 16, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 90, damping: 16, mass: 0.6 });

  // Resting pose + tilt that follows the pointer
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
    <div
      ref={ref}
      className={styles.scene}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      aria-hidden
    >
      <div className={styles.aura} />

      <motion.div
        className={styles.stage}
        style={reduceMotion ? { rotateY: -12, rotateX: 6 } : { rotateY, rotateX }}
      >
        {/* Depth layers behind the main card */}
        <div className={`${styles.layer} ${styles.layerBack}`} />
        <div className={`${styles.layer} ${styles.layerMid}`} />

        {/* Orbit rings */}
        <span className={`${styles.ring} ${styles.ringOne}`} />
        <span className={`${styles.ring} ${styles.ringTwo}`} />

        {/* Main call console */}
        <div className={styles.card}>
          <div className={styles.cardGlow} />

          <div className={styles.cardHeader}>
            <span className={styles.live}>
              <span className={styles.liveDot} />
              LIVE CALL
            </span>
            <span className={`${styles.timer} mono`}>00:42</span>
          </div>

          <div className={styles.caller}>
            <span className={styles.avatar}>
              <PhoneIncoming size={18} />
            </span>
            <div>
              <p className={styles.callerName}>Incoming caller</p>
              <p className={`${styles.callerMeta} mono`}>+1 (555) 014-2290</p>
            </div>
          </div>

          <div className={styles.wave}>
            {Array.from({ length: BARS }).map((_, i) => {
              const h = 22 + Math.abs(Math.sin(i * 0.7) * 58) + (i % 5) * 4;
              return (
                <span
                  key={i}
                  className={styles.bar}
                  style={{ height: `${Math.min(h, 100)}%`, animationDelay: `${(i % 12) * 0.09}s` }}
                />
              );
            })}
          </div>

          <div className={styles.transcript}>
            <div className={`${styles.bubble} ${styles.bubbleCaller}`}>
              I need to book a visit as soon as possible.
            </div>
            <div className={`${styles.bubble} ${styles.bubbleAgent}`}>
              <span className={styles.agentTag}>
                <Sparkles size={11} /> AI agent
              </span>
              I can get you in today at 4:30 PM. Can I confirm your number?
            </div>
          </div>
        </div>

        {/* Floating chips (pushed forward in 3D space) */}
        <div className={`${styles.chip} ${styles.chipIntent}`}>
          <AudioLines size={14} />
          <span>
            <em>Intent</em> Booking request
          </span>
        </div>
        <div className={`${styles.chip} ${styles.chipUrgency}`}>
          <Siren size={14} />
          <span>
            <em>Urgency</em> High
          </span>
        </div>
        <div className={`${styles.chip} ${styles.chipCalendar}`}>
          <CalendarCheck size={14} />
          <span>
            <em>Booked</em> Today, 4:30 PM
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