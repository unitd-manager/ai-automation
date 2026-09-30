import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Zap,
  PhoneCall,
  MessageSquare,
  CalendarCheck,
  Repeat,
  Database,
  FileText,
  BarChart3,
  Bot,
  type LucideIcon,
} from "lucide-react";
import type { Solution } from "@/data/solutions";
import styles from "./SolutionCard.module.css";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  PhoneCall,
  MessageSquare,
  CalendarCheck,
  Repeat,
  Database,
  FileText,
  BarChart3,
  Bot,
};

interface SolutionCardProps {
  solution: Solution;
  compact?: boolean;
}

const dedicatedPageRoutes: Record<string, string> = {
  "ai-lead-response": "/solutions/ai-lead-response",
  "ai-voice-agents": "/solutions/ai-voice-agents",
  "ai-chat": "/solutions/ai-chat",
  "appointment-automation": "/solutions/ai-appointment-booking",
  "follow-up-automation": "/solutions/ai-follow-up",
};

export default function SolutionCard({ solution, compact = false }: SolutionCardProps) {
  const href = dedicatedPageRoutes[solution.slug] ?? `/solutions#${solution.slug}`;

  const Icon = iconMap[solution.icon] ?? Zap;

  if (compact) {
    return (
      <Link href={href} className={`${styles.card} ${styles.compactCard}`}>
        <div className={styles.iconBadge}>
          <Icon size={20} strokeWidth={1.75} />
        </div>
        <h3 className={styles.name}>{solution.name}</h3>
        <p className={styles.compactBlurb}>{solution.impact}</p>
        <span className={styles.exploreLink}>
          Explore Solution <ArrowRight size={14} />
        </span>
      </Link>
    );
  }

  return (
    <Link href={href} className={styles.card} id={solution.slug}>
      <div className={styles.top}>
        <div className={styles.iconBadge}>
          <Icon size={20} strokeWidth={1.75} />
        </div>
        <ArrowUpRight size={18} className={styles.icon} aria-hidden />
      </div>
      <span className={`${styles.category} mono`}>{solution.category}</span>
      <h3 className={styles.name}>{solution.name}</h3>
      <p className={styles.problem}>{solution.problem}</p>
      <p className={styles.impact}>{solution.impact}</p>
    </Link>
  );
}