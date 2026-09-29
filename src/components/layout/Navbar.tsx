"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import styles from "./Navbar.module.css";

const solutionsMenu = [
  {
    heading: "Lead & Customer Automation",
    items: [
      { label: "AI Voice Agent", href: "/solutions/ai-voice-agents" },
      { label: "AI Chat", href: "/solutions/ai-chat" },
      { label: "Lead Response", href: "/solutions/ai-lead-response" },
    ],
  },
  {
    heading: "Sales & Appointment Automation",
    items: [
      { label: "Appointment Booking", href: "/solutions#appointment-automation" },
      { label: "Follow-Up", href: "/solutions#follow-up-automation" },
    ],
  },
  {
    heading: "CRM & Operations",
    items: [
      { label: "CRM Automation", href: "/solutions#crm-automation" },
      { label: "Document Processing", href: "/solutions#document-automation" },
    ],
  },
  {
    heading: "Business Intelligence",
    items: [
      { label: "Dashboards", href: "/solutions#business-intelligence" },
      { label: "Reporting", href: "/solutions#business-intelligence" },
      { label: "Custom AI Agents", href: "/solutions#custom-ai-agents" },
    ],
  },
];

const industriesMenu = [
  {
    heading: "Home Services",
    items: [
      { label: "HVAC", href: "/industries/home-services" },
      { label: "Plumbing", href: "/industries/home-services" },
      { label: "Roofing", href: "/industries/home-services" },
      { label: "Electrical", href: "/industries/home-services" },
    ],
  },
  {
    heading: "Healthcare",
    items: [
      { label: "Dental", href: "/industries/healthcare" },
      { label: "Med Spa", href: "/industries/healthcare" },
      { label: "Dermatology", href: "/industries/healthcare" },
    ],
  },
  {
    heading: "Construction",
    items: [
      { label: "Roofing", href: "/industries/construction" },
      { label: "Remodeling", href: "/industries/construction" },
      { label: "General Contractors", href: "/industries/construction" },
    ],
  },
];

const useCaseMenu = [
  {
    heading: "Use Case Pages",
    items: [
      { label: "Home Services Automation", href: "/use-cases/home-services" },
      { label: "Healthcare Automation", href: "/use-cases/healthcare" },
      { label: "Automotive Automation", href: "/use-cases/automotive" },
    ],
  },
];

const resourcesMenu = [
  {
    heading: "Resources",
    items: [
      { label: "Implementation Roadmap", href: "/resources/roadmap" },
      { label: "AI Automation Audit", href: "/resources/ai-audit" },
      { label: "ROI Calculator", href: "/resources/roi-calculator" },
      { label: "Blog", href: "/resources/blog" },
      { label: "FAQs", href: "/resources/faqs" },
    ],
  },
];

const navLinks = [
  { label: "Solutions", href: "/solutions", menu: solutionsMenu },
  { label: "Industries", href: "/industries", menu: industriesMenu },
  { label: "Use Case Pages", href: "/use-cases/home-services", menu: useCaseMenu },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  // { label: "Case Studies", href: "/case-studies" },
  { label: "Resources", href: "/resources/faqs", menu: resourcesMenu },
  { label: "About", href: "/about" },
];

const darkHeroRoutes = ["/solutions", "/resources/ai-audit"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const onDarkHero = darkHeroRoutes.includes(pathname) || pathname.startsWith("/use-cases/");
  const useWhiteLogo = onDarkHero && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${useWhiteLogo ? styles.onDark : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logoLink} aria-label="United Technologies home">
          <Image
            src={useWhiteLogo ? "/logo-white.png" : "/logo.png"}
            alt="United Technologies"
            width={2015}
            height={921}
            priority
            className={styles.logoImg}
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className={styles.navItem}
              onMouseEnter={() => link.menu && setOpenMenu(link.label)}
              onMouseLeave={() => link.menu && setOpenMenu(null)}
            >
              <Link href={link.href} className={styles.navLink}>
                {link.label}
                {link.menu && <ChevronDown size={14} strokeWidth={2} aria-hidden />}
              </Link>

              {link.menu && (
                <div
                  className={`${styles.megaMenu} ${openMenu === link.label ? styles.megaMenuOpen : ""} ${link.menu.length === 1 ? styles.megaMenuNarrow : ""}`}
                >
                  <div className={styles.megaMenuGrid} style={{ gridTemplateColumns: `repeat(${link.menu.length}, 1fr)` }}>
                    {link.menu.map((group) => (
                      <div key={group.heading} className={styles.megaGroup}>
                        <p className={styles.megaHeading}>{group.heading}</p>
                        <ul>
                          {group.items.map((item) => (
                            <li key={item.label}>
                              <Link href={item.href} className={styles.megaItem}>
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.ctaWrap}>
          <Link href="/resources/ai-audit" className={styles.cta}>
            Get Automation Assessment
          </Link>
        </div>

        <button
          className={styles.mobileToggle}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`${styles.mobilePanel} ${mobileOpen ? styles.mobilePanelOpen : ""}`}>
        <nav className={styles.mobileNav} aria-label="Mobile">
          {navLinks.map((link) => (
            <div key={link.label} className={styles.mobileGroup}>
              <Link href={link.href} className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
              {link.menu && (
                <div className={styles.mobileSubList}>
                  {link.menu.flatMap((g) => g.items).map((item, i) => (
                    <Link key={`${item.href}-${i}`} href={item.href} className={styles.mobileSubLink} onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/resources/ai-audit" className={styles.mobileCta} onClick={() => setMobileOpen(false)}>
            Get Automation Assessment
          </Link>
        </nav>
      </div>
    </header>
  );
}