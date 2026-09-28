import { Check } from "lucide-react";
import type { PricingTier } from "@/data/pricing";
import Button from "@/components/ui/Button";
import styles from "./PricingCard.module.css";

export default function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div className={`${styles.card} ${tier.featured ? styles.featured : ""}`}>
      {tier.featured && <span className={styles.badge}>Most common starting point</span>}
      <span className={`${styles.code} mono`}>{tier.code}</span>
      <h3 className={styles.name}>{tier.name}</h3>
      <div className={styles.priceRow}>
        <span className={styles.price}>{tier.price}</span>
        <span className={styles.priceNote}>{tier.priceNote}</span>
      </div>
      <p className={styles.description}>{tier.description}</p>
      <ul className={styles.list}>
        {tier.included.map((item) => (
          <li key={item}>
            <Check size={16} className={styles.check} aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className={styles.bestFor}>{tier.bestFor}</p>
      <Button href="/contact" variant={tier.featured ? "primary" : "secondary"} size="lg">
        Talk to Us
      </Button>
    </div>
  );
}
