import Link from "next/link";
import { ArrowRight, Wrench, HeartPulse, Car, LucideIcon } from "lucide-react";
import type { Industry } from "@/data/industries";
import styles from "./IndustryCard.module.css";

const icons: Record<string, LucideIcon> = {
  "home-services": Wrench,
  healthcare: HeartPulse,
  "automotive-services": Car,
};

export default function IndustryCard({ industry }: { industry: Industry }) {
  const Icon = icons[industry.slug] ?? Wrench;

  return (
    <Link href={`/industries/${industry.slug}`} className={styles.card}>
      <span className={styles.accentBar} aria-hidden />
      <span className={styles.glow} aria-hidden />
      <span className={styles.grid} aria-hidden />

      <div className={styles.topRow}>
        <span className={styles.iconWrap}>
          <Icon size={22} strokeWidth={1.75} />
        </span>
        <span className={`${styles.index} mono`}>{industry.segments.length} segments</span>
      </div>

      <h3 className={styles.name}>{industry.name}</h3>

      <ul className={styles.chips} aria-label={`${industry.name} segments`}>
        {industry.segments.map((s) => (
          <li key={s} className={styles.chip}>
            {s}
          </li>
        ))}
      </ul>

      <p className={styles.hero}>{industry.hero}</p>

      {industry.opportunity && (
        <div className={styles.opportunity}>
          <span className={styles.opportunityLabel}>Common automation opportunity</span>
          <p className={styles.opportunityText}>{industry.opportunity}</p>
        </div>
      )}

      {industry.painPoints?.length > 0 && (
        <div className={styles.lost}>
          <span className={styles.lostLabel}>Where inquiries get lost</span>
          <ul className={styles.lostList}>
            {industry.painPoints.slice(0, 3).map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      )}

      {industry.connectsTo && <p className={styles.connects}>{industry.connectsTo}</p>}

      <span className={styles.footer}>
        <span className={styles.exploreLink}>Explore Industry</span>
        <span className={styles.arrow} aria-hidden>
          <ArrowRight size={16} />
        </span>
      </span>
    </Link>
  );
}
