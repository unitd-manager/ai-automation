import type { Metadata } from "next";
import { Fragment } from "react";
import { Check, Minus } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import PricingCard from "@/components/cards/PricingCard";
import PricingCartLink from "@/components/cards/PricingCartLink";
import { MaintenancePlans } from "@/components/cards/PricingCard";
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

type CompareCell = boolean | string;
type CompareRow = { label: string; cells: [CompareCell, CompareCell, CompareCell] };
type CompareGroup = { title: string; rows: CompareRow[] };

const comparisonGroups: CompareGroup[] = [
  {
    title: "Diagnose and plan",
    rows: [
      { label: "Audit peak-emergency revenue leakage", cells: [true, false, true] },
      { label: "Identify operational bottlenecks", cells: [true, false, true] },
      { label: "AI Automation Blueprint", cells: [true, false, true] },
      { label: "Step-by-step implementation checklist", cells: [true, false, true] },
    ],
  },
  {
    title: "Build and automate",
    rows: [
      { label: "AI voice and SMS", cells: [false, true, true] },
      { label: "Lead qualification", cells: [false, true, true] },
      { label: "Appointment automation", cells: [false, true, true] },
      { label: "Follow-up automation", cells: [false, true, true] },
      { label: "CRM integration", cells: [false, true, true] },
      { label: "Emergency routing", cells: [false, true, true] },
      { label: "Fully managed AI agents", cells: [false, false, true] },
      { label: "Custom API integrations", cells: [false, false, true] },
      { label: "Multi-channel and custom workflows", cells: [false, false, true] },
      { label: "Advanced routing", cells: [false, false, true] },
    ],
  },
  {
    title: "Optimize and report",
    rows: [
      { label: "Monthly optimization", cells: [false, true, true] },
      { label: "Reporting", cells: [false, true, true] },
      { label: "Dashboards", cells: [false, false, true] },
    ],
  },
  {
    title: "Implementation",
    rows: [
      { label: "Minimal client involvement", cells: [false, false, true] },
    ],
  },
  {
    title: "Engagement terms",
    rows: [
      { label: "Payment and duration", cells: ["Information only · one-time", "Subscription · 3 months", "6 months"] },
    ],
  },
];

function CompareValue({ value }: { value: CompareCell }) {
  if (value === false) return <No />;
  if (typeof value === "string") return value;
  return <Yes />;
}

export default function PricingPage() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <h1 className={styles.heroTitle}>
            Start Small Build Smart
            <span className={styles.heroAccent}>Scale When Ready</span>
          </h1>
          <p className={styles.heroCopy}>
            Every engagement starts with clarity on what to <br />
            automate first.From there, choose the level of<br />
            support that matches where your business is today.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <PricingCartLink />
          <div className={styles.grid}>
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.code} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.maintenanceSlot}>
        <div className="container">
          <MaintenancePlans />
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <SectionHeader title="How the Tiers Compare" />
          <div className={styles.tableWrap}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th scope="col">Package includes</th>
                  <th scope="col" data-tier="DIY"><span>DIY</span><strong>$500</strong></th>
                  <th scope="col" data-tier="DWY"><span>DWY</span><strong>$1,000</strong></th>
                  <th scope="col" data-tier="DFY"><span>DFY</span><strong>$10,000+</strong></th>
                </tr>
              </thead>
              <tbody>
                {comparisonGroups.map((group) => (
                  <Fragment key={group.title}>
                    <tr className={styles.groupRow}>
                      <th scope="rowgroup" colSpan={4}>{group.title}</th>
                    </tr>
                    {group.rows.map((row) => (
                      <tr key={row.label}>
                        <th scope="row">{row.label}</th>
                        {row.cells.map((value, index) => (
                          <td key={index}><CompareValue value={value} /></td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
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
