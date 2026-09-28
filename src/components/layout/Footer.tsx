import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const columns = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "How It Works", href: "/how-it-works" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "AI Voice Agent", href: "/solutions/ai-voice-agents" },
      { label: "Lead Response", href: "/solutions/ai-lead-response" },
      { label: "Appointment Automation", href: "/solutions#appointment-automation" },
      { label: "CRM Automation", href: "/solutions#crm-automation" },
      { label: "Document Automation", href: "/solutions#document-automation" },
      { label: "Business Intelligence", href: "/solutions#business-intelligence" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Home Services", href: "/industries/home-services" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Construction", href: "/industries/construction" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Roadmap", href: "/resources/roadmap" },
      { label: "AI Audit", href: "/resources/ai-audit" },
      { label: "ROI Calculator", href: "/resources/roi-calculator" },
      { label: "Blog", href: "/resources/blog" },
      { label: "FAQs", href: "/resources/faqs" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image src="/logo-white.png" alt="United Technologies" width={2015} height={921} className={styles.logoImg} />
            <p className={styles.tagline}>
              An AI automation partner for businesses ready to replace repetitive work with intelligent systems.
            </p>
          </div>

          <div className={styles.columns}>
            {columns.map((col) => (
              <div key={col.heading} className={styles.column}>
                <p className={styles.columnHeading}>{col.heading}</p>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.link}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© {new Date().getFullYear()} United Technologies. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="/legal/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="/legal/terms" className={styles.legalLink}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
