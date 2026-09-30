import styles from "./PricingExtras.module.css";

/* All figures come from props, so nothing here changes your prices. */

export type SupportPlan = { name: string; price: string; note: string };
export type Faq = { q: string; a: string };

export function SupportPlans({ plans }: { plans: SupportPlan[] }) {
  return (
    <section className={styles.section} aria-labelledby="support-title">
      <h2 id="support-title" className={styles.h2}>Ongoing support</h2>
      <p className={styles.lead}>Optional after launch. Nothing above requires a monthly plan.</p>
      <div className={styles.planGrid}>
        {plans.map((p) => (
          <div key={p.name} className={styles.plan}>
            <h3 className={styles.planName}>{p.name}</h3>
            <p className={styles.planPrice}>{p.price}</p>
            <p className={styles.planNote}>{p.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const DEFAULT_FACTORS = [
  ["How many systems must connect", "One is quick. Five, each with its own login and data format, is a project."],
  ["Whether your current tools can do it", "If a tool has a usable API we connect it. If the piece is missing, we build it."],
  ["How messy the data is", "A clean export is fast. Scanned PDFs and hand-kept spreadsheets take longer."],
  ["Exceptions handled by hand", "The happy path is cheap. Every special case adds work."],
  ["Access and compliance rules", "Private hosting and restricted data handling add real hours."],
  ["How fast you need it", "A normal schedule is priced normally. Rushing costs more."],
] as const;

export function PriceFactors({ factors = DEFAULT_FACTORS }: { factors?: readonly (readonly [string, string])[] }) {
  return (
    <section className={styles.section} aria-labelledby="factors-title">
      <h2 id="factors-title" className={styles.h2}>What moves the price</h2>
      <p className={styles.lead}>
        Two jobs that sound the same can land in different tiers. These are the reasons.
      </p>
      <dl className={styles.factors}>
        {factors.map(([term, desc]) => (
          <div key={term} className={styles.factor}>
            <dt>{term}</dt>
            <dd>{desc}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function PricingFaq({ items }: { items: Faq[] }) {
  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <h2 id="faq-title" className={styles.h2}>Questions before you reach out</h2>
      <div className={styles.faq}>
        {items.map((f) => (
          <details key={f.q} className={styles.faqItem}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}