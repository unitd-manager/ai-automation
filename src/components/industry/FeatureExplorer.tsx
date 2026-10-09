"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { Phone, MessageSquare, Mail, type LucideIcon } from "lucide-react";
import type { Channel, SystemFeatureMeta } from "@/data/Industrysystems";
import styles from "./FeatureExplorer.module.css";

const channelMeta: Record<Channel, { label: string; Icon: LucideIcon }> = {
  voice: { label: "Voice", Icon: Phone },
  sms: { label: "SMS", Icon: MessageSquare },
  email: { label: "Email", Icon: Mail },
};

interface Props {
  system: SystemFeatureMeta[];
  /** The industry workflow; features light up the stages they run on. */
  workflow: string[];
}

/**
 * "What's included", organised the way the system actually runs: features are listed in
 * workflow order, grouped under the two agents, and each one shows where it sits in the
 * workflow plus a sample conversation.
 */
export default function FeatureExplorer({ system, workflow }: Props) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = system[active];

  const focusTab = (i: number) => {
    const next = (i + system.length) % system.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent, i: number) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      focusTab(i + 1);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      focusTab(i - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusTab(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusTab(system.length - 1);
    }
  };

  return (
    <div className={styles.explorer}>
      <div className={styles.tabs} role="tablist" aria-orientation="vertical" aria-label="System features">
        {system.map((item, i) => (
          <div key={item.title} className={styles.tabWrap}>
            {(i === 0 || system[i - 1].agent !== item.agent) && (
              <p className={styles.agent}>{item.agent}</p>
            )}
            <button
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`feature-tab-${i}`}
              aria-selected={active === i}
              aria-controls="feature-panel"
              tabIndex={active === i ? 0 : -1}
              className={`${styles.tab} ${active === i ? styles.tabActive : ""}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              <span className={`${styles.tabIndex} mono`}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.tabTitle}>{item.title}</span>
              <span className={styles.tabStage}>{item.stages[item.stages.length - 1]}</span>
            </button>
          </div>
        ))}
      </div>

      <div
        className={styles.panel}
        role="tabpanel"
        id="feature-panel"
        aria-labelledby={`feature-tab-${active}`}
      >
        <span className={styles.panelGrid} aria-hidden />
        <div key={current.title} className={styles.panelBody}>
          {/* Where this feature sits in the workflow */}
          <ol className={styles.track} aria-label="Position in the workflow">
            {workflow.map((stage) => {
              const on = current.stages.includes(stage);
              return (
                <li key={stage} className={`${styles.trackStage} ${on ? styles.trackOn : ""}`}>
                  <span className={styles.trackDot} aria-hidden />
                  <span className={styles.trackLabel}>{stage}</span>
                </li>
              );
            })}
          </ol>

          <div className={styles.head}>
            <span className={`${styles.number} mono`}>{String(active + 1).padStart(2, "0")}</span>
            <h3 className={styles.title}>{current.title}</h3>
          </div>
          <p className={styles.description}>{current.description}</p>

          <ul className={styles.channels} aria-label="Channels">
            {current.channels.map((c) => {
              const { label, Icon } = channelMeta[c];
              return (
                <li key={c} className={styles.channel}>
                  <Icon size={13} aria-hidden /> {label}
                </li>
              );
            })}
          </ul>

          <div className={styles.thread}>
            <span className={`${styles.threadLabel} mono`}>Sample conversation</span>
            {current.thread.map((line, i) => (
              <div key={i} className={`${styles.line} ${styles[line.from]}`}>
                {line.from !== "system" && (
                  <span className={styles.who}>{line.from === "ai" ? "AI agent" : "Customer"}</span>
                )}
                <p>{line.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
