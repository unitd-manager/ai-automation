import type { FrontDeskRow, FrontDeskScenario } from "@/data/Industrysystems";
import styles from "./FrontDeskTimeline.module.css";

interface Props {
  scenario: FrontDeskScenario;
  rows: FrontDeskRow[];
}

/**
 * One call, followed down the workflow. Left = what happens without automation,
 * right = what happens with the system. The center spine carries the clock time and the
 * workflow stage that handles it.
 */
export default function FrontDeskTimeline({ scenario, rows }: Props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.scenario}>
        <span className={`${styles.scenarioTag} mono`}>{scenario.label}</span>
        <p className={styles.scenarioText}>{scenario.headline}</p>
      </div>

      <div className={styles.columns} aria-hidden>
        <span className={styles.colWithout}>Without automation</span>
        <span />
        <span className={styles.colWith}>With United Technologies</span>
      </div>

      <ol className={styles.rows}>
        {rows.map((row) => (
          <li key={row.stage} className={styles.row}>
            <div className={`${styles.card} ${styles.without}`}>
              <span className={styles.cardTag}>Without automation</span>
              <p>{row.without}</p>
            </div>

            <div className={styles.node}>
              <span className={styles.dot} aria-hidden />
              <span className={`${styles.time} mono`}>{row.time}</span>
              <span className={styles.stage}>{row.stage}</span>
            </div>

            <div className={`${styles.card} ${styles.withUs}`}>
              <span className={styles.cardTag}>With United Technologies</span>
              <p>{row.withUs}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
