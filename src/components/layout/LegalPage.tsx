import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import styles from "./LegalPage.module.css";

export interface LegalSection {
  title: string;
  body: ReactNode;
}

interface LegalPageProps {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  intro: string;
  effectiveDate: string;
  sections: LegalSection[];
}

export default function LegalPage({ eyebrow, titleStart, titleAccent, intro, effectiveDate, sections }: LegalPageProps) {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden>
          <div className={styles.heroGrid} />
        </div>
        <div className="container">
          <div className={styles.heroInner}>
            <span className={`${styles.chip} mono`}>
              <span className={styles.chipDot} aria-hidden />
              {eyebrow}
            </span>
            <h1 className={styles.title}>
              {titleStart} <span className={styles.accent}>{titleAccent}</span>
            </h1>
            <p className={styles.intro}>{intro}</p>
            <p className={`${styles.date} mono`}>Effective date: {effectiveDate}</p>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.wrap}>
          {sections.map((section, index) => (
            <article key={section.title} className={styles.card}>
              <h2 className={styles.cardTitle}>
                <span className={`${styles.num} mono`}>{index + 1}.</span> {section.title}
              </h2>
              <div className={styles.cardBody}>{section.body}</div>
            </article>
          ))}

          <div className={styles.questions}>
            <h2>Questions about this document?</h2>
            <p>
              Email us at <a href="mailto:hello@unitedtechnologies.ai">hello@unitedtechnologies.ai</a> or use our
              contact page, and we'll get back to you within two business days.
            </p>
            <Button href="/contact" variant="light">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  );
}