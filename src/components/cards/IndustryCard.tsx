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
      <div className={styles.topRow}>
        <span className={styles.iconWrap}>
          <Icon size={20} strokeWidth={1.75} />
        </span>
        <span className={`${styles.index} mono`}>{industry.segments.length} segments</span>
      </div>
      <h3 className={styles.name}>{industry.name}</h3>
      <p className={styles.segments}>{industry.segments.join(" · ")}</p>
      <p className={styles.hero}>{industry.hero}</p>
      {industry.opportunity && (
        <div className={styles.opportunity}>
          <span className={styles.opportunityLabel}>Common automation opportunity</span>
          <p className={styles.opportunityText}>{industry.opportunity}</p>
        </div>
      )}
      {industry.connectsTo && <p className={styles.connects}>{industry.connectsTo}</p>}
      <span className={styles.exploreLink}>
        Explore Industry <ArrowRight size={14} />
      </span>
    </Link>
  );
}
