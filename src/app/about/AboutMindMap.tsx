import Link from "next/link";
import { Compass, Bot, Workflow, Building2, type LucideIcon } from "lucide-react";
import { tagline } from "../how-it-works/Content";
import styles from "./AboutMindMap.module.css";

interface Leaf {
  label: string;
  href?: string;
}

interface Branch {
  slot: "tl" | "tr" | "bl" | "br";
  icon: LucideIcon;
  title: string;
  lead: string;
  leaves: Leaf[];
}

const branches: Branch[] = [
  {
    slot: "tl",
    icon: Compass,
    title: "Who we are",
    lead: "An AI automation partner for US small and mid-size businesses.",
    leaves: [
      { label: "Automation engineers" },
      { label: "Business process consultants" },
      { label: "Process first, AI second" },
    ],
  },
  {
    slot: "tr",
    icon: Bot,
    title: "What we build",
    lead: "One workflow, run by two agents that hand off to each other.",
    leaves: [
      { label: "AI Response & Booking Agent" },
      { label: "AI Follow-Up & Retention Agent" },
      { label: "CRM and calendar integration" },
    ],
  },
  {
    slot: "bl",
    icon: Workflow,
    title: "How we work",
    lead: "We start with your operations, not a template.",
    leaves: [
      { label: "Map how you run today" },
      { label: "Build around your process" },
      { label: "Connect, monitor and tune" },
    ],
  },
  {
    slot: "br",
    icon: Building2,
    title: "Who we serve",
    lead: "Industries where the first reply decides the job.",
    leaves: [
      { label: "Home Services", href: "/industries/home-services" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Automotive Services", href: "/industries/automotive-services" },
    ],
  },
];

/**
 * Mind map of the company. The root is the idea the whole site is built on; four branches
 * (who, what, how, for whom) hang off it. Pure CSS: elbows are drawn with borders.
 */
export default function AboutMindMap() {
  return (
    <div className={styles.map}>
      {branches.map((b) => {
        const Icon = b.icon;
        return (
          <article key={b.title} className={`${styles.branch} ${styles[b.slot]}`}>
            <header className={styles.head}>
              <span className={styles.icon}>
                <Icon size={18} strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className={styles.title}>{b.title}</h3>
            </header>
            <p className={styles.lead}>{b.lead}</p>
            <ul className={styles.leaves}>
              {b.leaves.map((l) => (
                <li key={l.label}>
                  {l.href ? (
                    <Link href={l.href} className={`${styles.leaf} ${styles.leafLink}`}>
                      {l.label}
                    </Link>
                  ) : (
                    <span className={styles.leaf}>{l.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </article>
        );
      })}

      <div className={styles.root}>
        <span className={`${styles.stub} ${styles.stubL}`} aria-hidden />
        <span className={`${styles.stub} ${styles.stubR}`} aria-hidden />
        <span className={`${styles.kicker} mono`}>The idea</span>
        <p className={styles.rootText}>{tagline}</p>
        <p className={styles.rootSub}>Every workflow we build starts from this one sentence.</p>
      </div>
    </div>
  );
}
