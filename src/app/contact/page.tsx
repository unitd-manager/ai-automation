import type { Metadata } from "next";
import { Mail, Calendar, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Request an AI Audit and find the first workflow you should automate.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className={`section ${styles.hero}`}>
      <div className="container">
        <h1 className={styles.heroTitle}>Let&apos;s Find What You Should Automate First.</h1>
        <p className={styles.heroCopy}>
          Tell us about your business and where things are slowing down. We&apos;ll follow up to schedule your AI
          Audit.
        </p>

        <div className={styles.layout} style={{ marginTop: "3rem" }}>
          <ContactForm />

          <div className={styles.sideCard}>
            <div className={styles.sideItem}>
              <span className={styles.sideIconBadge}><Mail size={18} /></span>
              <div>
                <p className={styles.sideLabel}>Email</p>
                <p className={styles.sideValue}>hello@unitedtechnologies.ai</p>
              </div>
            </div>
            <div className={styles.sideItem}>
              <span className={styles.sideIconBadge}><Calendar size={18} /></span>
              <div>
                <p className={styles.sideLabel}>Prefer to talk it through first?</p>
                <p className={styles.sideValue}>Book a call on our calendar</p>
              </div>
            </div>
            <div className={styles.sideItem}>
              <span className={styles.sideIconBadge}><MapPin size={18} /></span>
              <div>
                <p className={styles.sideLabel}>Based in</p>
                <p className={styles.sideValue}>United States</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
