import type { PeakMoment } from "@/data/industries";
import type { MomentPlay } from "@/data/momentPlays";
import styles from "./MomentMap.module.css";

interface Props {
  /** The industry workflow, in order. The first stage becomes the root of the map. */
  workflow: string[];
  rootNote: string;
  moments: PeakMoment[];
  plays: MomentPlay[];
}

/**
 * Workflow mind map. The first workflow stage is the root; each peak moment branches off it,
 * lands on the stage that handles it (shown on a mini track of the whole workflow), and ends
 * in the outcome for the business.
 */
export default function MomentMap({ workflow, rootNote, moments, plays }: Props) {
  const root = workflow[0];
  const rows = moments.map((m) => {
    const play = plays.find((p) => p.text === m.text);
    const index = workflow.indexOf(m.step);
    return { ...m, action: play?.action ?? "", outcome: play?.outcome ?? "", index };
  });

  return (
    <div className={styles.map}>
      <div className={styles.rootCol}>
        <div className={styles.root}>
          <span className={styles.rootGrid} aria-hidden />
          <span className={`${styles.rootKicker} mono`}>Where it starts</span>
          <strong className={styles.rootTitle}>{root}</strong>
          <p className={styles.rootNote}>{rootNote}</p>
        </div>
      </div>

      <ol className={styles.branches}>
        {rows.map((row, i) => (
          <li key={row.text} className={styles.branch}>
            {/* Moment */}
            <div className={`${styles.node} ${styles.moment}`}>
              <span className={`${styles.nodeLabel} mono`}>Moment {String(i + 1).padStart(2, "0")}</span>
              <p className={styles.momentText}>{row.text}</p>
            </div>

            <span className={styles.link} aria-hidden />

            {/* Handling stage, shown on the workflow track */}
            <div className={`${styles.node} ${styles.stage}`}>
              <span className={`${styles.nodeLabel} mono`}>
                {row.index >= 0 ? `Step ${String(row.index + 1).padStart(2, "0")} of ${String(workflow.length).padStart(2, "0")}` : "Handled at"}
              </span>
              <strong className={styles.stageName}>{row.step}</strong>
              <p className={styles.action}>{row.action}</p>
              <ol className={styles.track} aria-label={`Position in the workflow: ${row.step}`}>
                {workflow.map((s, si) => (
                  <li
                    key={s}
                    className={`${styles.pip} ${si === row.index ? styles.pipOn : ""} ${si < row.index ? styles.pipPast : ""}`}
                    title={s}
                  />
                ))}
              </ol>
            </div>

            <span className={styles.link} aria-hidden />

            {/* Outcome */}
            <div className={`${styles.node} ${styles.outcome}`}>
              <span className={`${styles.nodeLabel} mono`}>Outcome</span>
              <p className={styles.outcomeText}>{row.outcome}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
