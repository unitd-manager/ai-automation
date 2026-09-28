import type { CaseStudy } from "@/data/pricing";
import Link from "next/link";
import styles from "./CaseStudyCard.module.css";

interface CaseStudyCardProps {
  study: CaseStudy;
  compact?: boolean;
}

export default function CaseStudyCard({ study, compact = false }: CaseStudyCardProps) {
  if (compact) {
    return (
      <article className={`${styles.card} ${styles.compactCard}`}>
        <div className={styles.header}>
          <span className={`${styles.industry} mono`}>{study.industry}</span>
          {study.illustrative && <span className={styles.tag}>Illustrative</span>}
        </div>
        <h3 className={styles.client}>{study.client}</h3>
        <div className={styles.compactBody}>
          <div className={styles.compactRow}>
            <span className={styles.compactLabel}>Problem</span>
            <span className={styles.compactText}>{study.challenge}</span>
          </div>
          <div className={styles.compactRow}>
            <span className={styles.compactLabel}>Automation</span>
            <span className={styles.compactText}>{study.solution}</span>
          </div>
          <div className={styles.compactRow}>
            <span className={styles.compactLabel}>Outcome</span>
            <span className={styles.compactText}>{study.outcome}</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <Link href={`/case-studies/${study.slug}`} className={styles.card}>
      <div className={styles.header}>
        <div>
          <span className={`${styles.industry} mono`}>{study.industry}</span>
          <h3 className={styles.client}>{study.client}</h3>
        </div>
        {study.illustrative && <span className={styles.tag}>Illustrative workflow</span>}
      </div>

      <div className={styles.body}>
        <div className={styles.block}>
          <p className={styles.label}>Challenge</p>
          <p className={styles.text}>{study.challenge}</p>
        </div>
        <div className={styles.block}>
          <p className={styles.label}>AI Solution</p>
          <p className={styles.text}>{study.solution}</p>
        </div>
        <div className={styles.block}>
          <p className={styles.label}>Outcome</p>
          <p className={styles.text}>{study.outcome}</p>
        </div>
      </div>

      <div className={styles.metrics}>
        {study.metrics.map((m) => (
          <div key={m.label} className={styles.metric}>
            <span className={`${styles.metricValue} mono`}>{m.value}</span>
            <span className={styles.metricLabel}>{m.label}</span>
          </div>
        ))}
      </div>
    </Link>
  );
}
