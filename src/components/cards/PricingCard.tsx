import { Fragment } from "react";
import { Check, Minus, Zap, TrendingUp, Crown, Target, Layers, Gauge, Users, ShieldCheck } from "lucide-react";
import type { PricingTier } from "@/data/pricing";
import Button from "@/components/ui/Button";
import styles from "./PricingCard.module.css";

type Tier = PricingTier & { range?: string; ctaLabel?: string; ctaNote?: string; badge?: string };

const ICONS = { DIY: Zap, DWY: TrendingUp, DFY: Crown } as const;

/** One card. Content comes from the `tier` prop, exactly as before. */
export function PricingCard({ tier }: { tier: Tier }) {
  const titleId = `tier-${tier.code}-title`;
  const Icon = ICONS[tier.code as keyof typeof ICONS] ?? Zap;

  return (
    <article
      className={`${styles.card} ${tier.featured ? styles.featured : ""}`}
      aria-labelledby={titleId}
      data-tier={tier.code}
    >
      {tier.featured && <span className={styles.badge}>{tier.badge ?? "Most common starting point"}</span>}

      <header className={styles.header}>
        <div className={styles.titleRow}>
          <span className={styles.icon} aria-hidden>
            <Icon size={22} />
          </span>
          <div className={styles.titles}>
            <span className={styles.code}>{tier.code}</span>
            <h3 id={titleId} className={styles.name}>{tier.name}</h3>
            {tier.range && <p className={styles.range}>{tier.range}</p>}
          </div>
        </div>

        <div className={styles.priceRow}>
          <span className={styles.price}>{tier.price}</span>
          <span className={styles.priceNote}>{tier.priceNote}</span>
        </div>
        {tier.description && <p className={styles.description}>{tier.description}</p>}
      </header>

      <div className={styles.body}>
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
          <Button href="/contact" variant={tier.featured ? "primary" : "secondary"} size="lg">
            {tier.ctaLabel ?? "Talk to Us"}
          </Button>
          {tier.ctaNote && <p className={styles.ctaNote}>{tier.ctaNote}</p>}
        </footer>
      </div>
    </article>
  );
}

/** Optional: wrap your whole pricing page in this to get the dark background. */
export function PricingTheme({ children }: { children: React.ReactNode }) {
  return <div className={styles.root}>{children}</div>;
}

/** Optional: the 3-card grid. */
export function ProductizedPackages({ tiers }: { tiers: Tier[] }) {
  return (
    <div className={styles.grid}>
      {tiers.map((t) => (
        <PricingCard key={t.code} tier={t} />
      ))}
    </div>
  );
}

/* ---------- Compare table (existing rows + all package points) ---------- */
type Cell = boolean | string; // true = tick, false = dash, string = short label

const COLS = [
  { code: "DIY", price: "$500" },
  { code: "DWY", price: "$1,000+" },
  { code: "DFY", price: "$10,000+" },
] as const;

type Row = { label: string; cells: [Cell, Cell, Cell] };
type Group = { title: string; rows: Row[] };

// DFY ticks on DWY-style items are inferred ("complete infrastructure"). Flip any to false if not offered.
const GROUPS: Group[] = [
  {
    title: "Diagnose & plan",
    rows: [
      { label: "Automation opportunity map", cells: [true, true, true] },
      { label: "Audit peak-emergency revenue leakage", cells: [true, false, false] }, // new
      { label: "Identify bottlenecks", cells: [true, false, false] }, // new
      { label: "AI Automation Blueprint", cells: [true, false, false] }, // new
      { label: "Step-by-step checklist", cells: [true, false, false] }, // new
    ],
  },
  {
    title: "Build & automate",
    rows: [
      { label: "Workflow design & build", cells: [false, "One workflow", "Full system"] },
      { label: "AI voice / SMS", cells: [false, true, true] }, // new
      { label: "Lead qualification", cells: [false, true, true] }, // new
      { label: "Appointment & follow-up automation", cells: [false, true, true] }, // new
      { label: "CRM integration", cells: [false, true, true] },
      { label: "Emergency routing", cells: [false, true, "Advanced"] }, // new
      { label: "Voice automation", cells: [false, false, true] },
      { label: "Document automation", cells: [false, false, true] },
      { label: "Fully managed AI agents", cells: [false, false, true] }, // new
      { label: "Custom API integrations", cells: [false, false, true] }, // new
      { label: "Multi-channel & custom workflows", cells: [false, false, true] }, // new
    ],
  },
  {
    title: "Optimize & report",
    rows: [
      { label: "Monthly optimization", cells: [false, "Monthly", "Continuous"] }, // new
      { label: "Reporting", cells: [false, true, true] }, // new
      { label: "Business intelligence dashboards", cells: [false, false, true] },
      { label: "Ongoing monitoring", cells: [false, false, true] },
    ],
  },
  {
    title: "Who does the work",
    rows: [
      { label: "Implementation", cells: ["Client executes", "Done with you", "Minimal client involvement"] }, // new
    ],
  },
];

function CellView({ v }: { v: Cell }) {
  if (v === false)
    return (
      <span className={styles.no} aria-label="Not included">
        <Minus size={16} aria-hidden />
      </span>
    );
  if (typeof v === "string") return <span className={styles.cellText}>{v}</span>;
  return (
    <span className={styles.yes}>
      <Check size={16} aria-hidden />
      <span className={styles.srOnly}>Included</span>
    </span>
  );
}

/** Heading + table. Remove your old "How the Tiers Compare" heading if you use this. */
export function CompareTable() {
  return (
    <section className={styles.compare} aria-labelledby="compare-tiers">
      <div className={styles.compareHead}>
        <span className={styles.eyebrow}>Compare packages</span>
        <h2 id="compare-tiers" className={styles.compareTitle}>
          How the <span className={styles.compareAccent}>Tiers</span> Compare
        </h2>
        <span className={styles.compareBar} aria-hidden />
        <p className={styles.compareSub}>DIY → DWY → DFY: see exactly what you get at every level.</p>
      </div>

      <div className={styles.scroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col" className={styles.corner}>Included</th>
              {COLS.map((c) => (
                <th key={c.code} scope="col" data-tier={c.code} className={styles.colHead}>
                  <span className={styles.colCode}>{c.code}</span>
                  <span className={styles.colPrice}>{c.price}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {GROUPS.map((g) => (
              <Fragment key={g.title}>
                <tr className={styles.groupRow}>
                  <th scope="colgroup" colSpan={4}>{g.title}</th>
                </tr>
                {g.rows.map((r) => (
                  <tr key={r.label}>
                    <th scope="row" className={styles.rowLabel}>{r.label}</th>
                    {r.cells.map((v, i) => (
                      <td key={i} className={i === 1 ? styles.midCol : undefined}>
                        <CellView v={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ---------- Descriptive points about the pricing ---------- */
const POINTS = [
  {
    icon: Target,
    title: "Start with clarity",
    text: "Every engagement begins with knowing what to automate first, so you never pay to build the wrong thing.",
  },
  {
    icon: Layers,
    title: "Pay for the stage you're at",
    text: "From a $500 plan to a full system, each tier matches where your business is today, with no bundles you don't need.",
  },
  {
    icon: Gauge,
    title: "Built to pay for itself",
    text: "Each package targets revenue that is leaking today: missed calls, slow follow-ups, and lost appointments.",
  },
  {
    icon: Users,
    title: "You choose how involved to be",
    text: "Do it yourself, build it with us, or hand it over completely. You decide how hands-on you want to be.",
  },
];

export function PricingPoints() {
  return (
    <section className={styles.points} aria-labelledby="pricing-points">
      <div className={styles.compareHead}>
        <span className={styles.eyebrow}>Why this pricing</span>
        <h2 id="pricing-points" className={styles.compareTitle}>
          Simple Pricing, <span className={styles.compareAccent}>Built Around Results</span>
        </h2>
        <span className={styles.compareBar} aria-hidden />
        <p className={styles.compareSub}>What every package is designed to give you, whichever tier you pick.</p>
      </div>
      <div className={styles.pointsGrid}>
        {POINTS.map(({ icon: Icon, title, text }) => (
          <article key={title} className={styles.pointCard}>
            <span className={styles.pointIcon} aria-hidden>
              <Icon size={20} />
            </span>
            <h3 className={styles.pointTitle}>{title}</h3>
            <p className={styles.pointText}>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Hero: "Start Small. Build Smart. Scale When Ready." ---------- */
const HERO_POINTS = [
  { icon: Zap, value: "$500", label: "One-time diagnostic", text: "A clear plan before you commit to build." },
  { icon: TrendingUp, value: "$1,000+", label: "Per workflow build", text: "Your first automation, built with your team." },
  { icon: Crown, value: "$10,000+", label: "Full system", text: "Project-based, built and maintained by us." },
  { icon: ShieldCheck, value: "After audit", label: "Final pricing confirmed", text: "DWY and DFY depend on the systems involved." },
];

/** Replaces your current hero heading + paragraph. */
export function PricingHero() {
  return (
    <section className={styles.hero} aria-labelledby="pricing-hero">
      <span className={styles.eyebrow}>AI automation pricing</span>
      <h1 id="pricing-hero" className={styles.heroTitle}>
        Start Small. Build Smart. <span className={styles.heroAccent}>Scale When Ready.</span>
      </h1>
      <span className={styles.compareBar} aria-hidden />
      <p className={styles.heroSub}>
        Every engagement starts with clarity on what to automate first. From there, choose the level of
        support that matches where your business is today.
      </p>

      <ul className={styles.heroPoints}>
        {HERO_POINTS.map(({ icon: Icon, value, label, text }) => (
          <li key={label} className={styles.heroPoint}>
            <span className={styles.heroPointIcon} aria-hidden>
              <Icon size={18} />
            </span>
            <span className={styles.heroPointValue}>{value}</span>
            <span className={styles.heroPointLabel}>{label}</span>
            <span className={styles.heroPointText}>{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Maintenance Mode: optional month-on-month subscription after the build ---------- */
// EDIT: put your real monthly prices in `price`. Text/points are drafts, change freely.
const maintenanceTiers: Tier[] = [
  {
    code: "DIY",
    name: "Guided Support",
    price: "Custom",
    priceNote: "/ month",
    description: "Keep your roadmap moving after the diagnostic, with ongoing guidance as you build.",
    included: [
      "Progress check-ins on your checklist",
      "Updates to your AI Automation Blueprint",
      "Answers when your team gets stuck",
    ],
    bestFor: "Teams executing the plan themselves.",
    ctaLabel: "Add Maintenance",
  },
  {
    code: "DWY",
    name: "Optimization Plan",
    price: "Custom",
    priceNote: "/ month",
    description: "Your live workflow stays tuned, measured, and improving, month after month.",
    included: [
      "Monthly optimization",
      "Reporting",
      "Lead and follow-up workflow tuning",
      "Emergency routing review",
    ],
    bestFor: "Businesses with a core workflow already running.",
    featured: true,
    badge: "Month-on-month",
    ctaLabel: "Add Maintenance",
  },
  {
    code: "DFY",
    name: "Managed Operations",
    price: "Custom",
    priceNote: "/ month",
    description: "We keep your whole automation system running, so you don't have to think about it.",
    included: [
      "Fully managed AI agents",
      "Continuous optimization",
      "Dashboards",
      "Multi-channel workflow upkeep",
      "Minimal client involvement",
    ],
    bestFor: "Businesses running on AI-driven infrastructure.",
    ctaLabel: "Add Maintenance",
  },
];

export function MaintenancePlans() {
  return (
    <section className={styles.points} aria-labelledby="maintenance-mode">
      <div className={styles.compareHead}>
        <span className={styles.eyebrow}>After launch</span>
        <h2 id="maintenance-mode" className={styles.compareTitle}>
          <span className={styles.compareAccent}>Maintenance</span> Mode
        </h2>
        <span className={styles.compareBar} aria-hidden />
        <p className={styles.compareSub}>
          Keep your automation running, optimized, and improving with optional month-to-month
          support. Maintenance pricing is scoped to your system; third-party tool subscriptions,
          such as Claude, are billed separately by their providers.
        </p>
      </div>
      <div className={styles.grid}>
        {maintenanceTiers.map((t) => (
          <PricingCard key={t.code} tier={t} />
        ))}
      </div>
    </section>
  );
}

/* ---------- Tier data (existing points + new points marked // new) ---------- */
export const productizedTiers: (PricingTier & { range?: string })[] = [
  {
    code: "DIY",
    name: "AI Opportunity Diagnostic",
    price: "$500",
    priceNote: "one-time",
    description:
      "A clear map of where automation will return the most for your business, and in what order to build it.",
    included: [
      "Business process review",
      "Automation opportunity map",
      "AI workflow recommendations",
      "Priority opportunities ranked by impact",
      "Implementation roadmap",
      // new
      "Audit peak-emergency revenue leakage",
      "Identify bottlenecks",
      "AI Automation Blueprint",
      "Step-by-step checklist",
      "Client executes implementation",
    ],
    bestFor: "Teams who want a plan before committing to build.",
    featured: false,
  },
  {
    code: "DWY",
    name: "AI Revenue & Operations System",
    price: "$1,000",
    priceNote: "starting, per workflow",
    description:
      "We design and build your first automated workflow end-to-end, with your team involved at every stage.",
    included: [
      "Workflow design",
      "AI automation setup",
      "CRM integration",
      "Lead response configuration",
      "Appointment workflow",
      "Follow-up automation",
      "Testing",
      "Team handover",
      // new
      "AI voice / SMS",
      "Lead qualification",
      "Emergency routing",
      "Monthly optimization",
      "Reporting",
      "Appointment automation", // new (from slide)
    ],
    bestFor: "Businesses ready to automate one core workflow well.",
    featured: true,
  },
  {
    code: "DFY",
    name: "AI Automation Infrastructure",
    price: "$10,000+",
    priceNote: "project-based",
    description:
      "A full automation system across your business — voice, CRM, documents, and reporting, built and maintained by us.",
    included: [
      "Full automation architecture",
      "Custom AI agents",
      "Voice automation",
      "CRM integrations",
      "Document automation",
      "Business intelligence dashboards",
      "Advanced multi-step workflows",
      "Deployment",
      "Ongoing monitoring",
      "Continuous optimization",
      // new
      "Fully managed AI agents",
      "Custom API integrations",
      "Multi-channel workflows",
      "Advanced routing",
      "Custom workflows",
      "Minimal client involvement",
      "Dashboards", // new (from slide)
    ],
    bestFor: "Businesses ready to run on AI-driven infrastructure.",
    featured: false,
  },
];

export default PricingCard;
