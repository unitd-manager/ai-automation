import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/animations/AnimatedSection";
import styles from "./CTASection.module.css";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "default" | "glow";
}

export default function CTASection({
  title,
  description,
  primaryLabel = "Get Your AI Audit",
  primaryHref = "/resources/ai-audit",
  secondaryLabel,
  secondaryHref,
  variant = "default",
}: CTASectionProps) {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={`${styles.panel} ${variant === "glow" ? styles.glowPanel : ""}`}>
          {variant === "glow" && (
            <div className={styles.glowLayer} aria-hidden>
              <span className={styles.glowOrb} />
              <span className={styles.glowGrid} />
            </div>
          )}
          <AnimatedSection className={styles.inner}>
            <h2 className={styles.title}>{title}</h2>
            {description && <p className={styles.description}>{description}</p>}
            <div className={styles.actions}>
              <Button href={primaryHref} variant="light" size="lg">{primaryLabel}</Button>
              {secondaryLabel && secondaryHref && (
                <Button href={secondaryHref} variant="ghost" size="lg">{secondaryLabel}</Button>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
