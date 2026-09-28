import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import PricingCard from "@/components/cards/PricingCard";
import CTASection from "@/components/sections/CTASection";
import { pricingTiers } from "@/data/pricing";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description: "Three ways to start: an AI opportunity diagnostic, a single automated workflow, or full AI automation infrastructure.",
  path: "/pricing",
});

function Yes() {
  return (
    <span className={styles.yesBadge}>
      <Check size={14} strokeWidth={2.5} />
    </span>
  );
}

function No() {
  return <Minus size={14} className={styles.noMark} />;
}

export default function PricingPage() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <h1 className={styles.heroTitle}>Start Small. Build Smart. Scale When Ready.</h1>
          <p className={styles.heroCopy}>
            Every engagement starts with clarity on what to automate first. From there, choose the level of support
            that matches where your business is today.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.code} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <SectionHeader title="How the Tiers Compare" />
          <div className={styles.tableWrap}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th>Included</th>
                  <th>DIY — $500</th>
                  <th>DWY — $1,000+</th>
                  <th>DFY — $10,000+</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Automation opportunity map</td><td><Yes /></td><td><Yes /></td><td><Yes /></td>
                </tr>
                <tr>
                  <td>Workflow design &amp; build</td><td><No /></td><td>One workflow</td><td>Full system</td>
                </tr>
                <tr>
                  <td>CRM integration</td><td><No /></td><td><Yes /></td><td><Yes /></td>
                </tr>
                <tr>
                  <td>Voice automation</td><td><No /></td><td><No /></td><td><Yes /></td>
                </tr>
                <tr>
                  <td>Document automation</td><td><No /></td><td><No /></td><td><Yes /></td>
                </tr>
                <tr>
                  <td>Business intelligence dashboards</td><td><No /></td><td><No /></td><td><Yes /></td>
                </tr>
                <tr>
                  <td>Ongoing monitoring</td><td><No /></td><td><No /></td><td><Yes /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={styles.note}>
            Pricing reflects typical engagement scope. Final pricing for DWY and DFY depends on the number of systems
            involved and is confirmed after your AI Audit.
          </p>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Tier Fits?"
        description="Most businesses start with a diagnostic. It tells you exactly what to build, and in what order."
      />
    </>
  );
}
