import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Industry } from "@/data/industries";
import styles from "./IndustryCard.module.css";

export default function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <Link href={`/industries/${industry.slug}`} className={styles.card}>
      <span className={`${styles.index} mono`}>{industry.segments.length} segments</span>
      <h3 className={styles.name}>{industry.name}</h3>
      <p className={styles.segments}>{industry.segments.join(" · ")}</p>
      <p className={styles.hero}>{industry.hero}</p>
      {industry.opportunity && (
        <div className={styles.opportunity}>
          <span className={styles.opportunityLabel}>Common automation opportunity</span>
          <p className={styles.opportunityText}>{industry.opportunity}</p>
        </div>
      )}
      <span className={styles.exploreLink}>
        Explore Industry <ArrowRight size={14} />
      </span>
    </Link>
  );
}
