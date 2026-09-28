import type { Metadata } from "next";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import { faqs } from "@/data/pricing";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "FAQs",
  description: "Answers to common questions about AI automation, integrations, timelines, and security.",
  path: "/resources/faqs",
});

export default function FAQsPage() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <h1 className={styles.heroTitle}>Frequently Asked Questions.</h1>
          <p className={styles.heroCopy}>
            The questions we hear most often from business owners evaluating AI automation.
          </p>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <div className={styles.wrap}>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        description="Every business's process is a little different. Let's talk through yours specifically."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
