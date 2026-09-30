import { Check } from "lucide-react";
import type { PricingTier } from "@/data/pricing";
import Button from "@/components/ui/Button";
import styles from "./PricingCard.module.css";

/**
 * Optional fields you can add to PricingTier (all backwards compatible):
 *   range?: string;    // e.g. "One workflow, running end to end."
 *   ctaLabel?: string; // defaults to "Talk to Us"
 *   ctaNote?: string;  // small line under the button
 * tier.price and tier.priceNote are rendered exactly as stored.
 */
type Tier = PricingTier & { range?: string; ctaLabel?: string; ctaNote?: string };

export default function PricingCard({ tier }: { tier: Tier }) {
  const titleId = `tier-${tier.code}-title`;

  return (
    <article
      className={`${styles.card} ${tier.featured ? styles.featured : ""}`}
      aria-labelledby={titleId}
    >
      {tier.featured && <span className={styles.badge}>Most common starting point</span>}

      <header className={styles.header}>
        <span className={`${styles.code} mono`}>{tier.code}</span>
        <h3 id={titleId} className={styles.name}>
          {tier.name}
        </h3>
        {tier.range && <p className={styles.range}>{tier.range}</p>}
      </header>

      <div className={styles.priceBlock}>
        <div className={styles.priceRow}>
          <span className={styles.price}>{tier.price}</span>
          <span className={styles.priceNote}>{tier.priceNote}</span>
        </div>
        <p className={styles.description}>{tier.description}</p>
      </div>

      <div className={styles.includedWrap}>
        <p className={styles.includedTitle}>What&apos;s included</p>
        <ul className={styles.list}>
          {tier.included.map((item) => (
            <li key={item}>
              <Check size={16} className={styles.check} aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <footer className={styles.footer}>
        <p className={styles.bestFor}>
          <span className={styles.bestForLabel}>Best for</span> {tier.bestFor}
        </p>
        <Button
          href="/contact"
          variant={tier.featured ? "primary" : "secondary"}
          size="lg"
        >
          {tier.ctaLabel ?? "Talk to Us"}
        </Button>
        {tier.ctaNote && <p className={styles.ctaNote}>{tier.ctaNote}</p>}
      </footer>
    </article>
  );
}