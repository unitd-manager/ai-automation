"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Wrench,
  HeartPulse,
  Car,
  type LucideIcon,
} from "lucide-react";
import styles from "./Navbar.module.css";

type MenuGroup = {
  heading: string;
  items: { label: string; href: string }[];
  /** Optional rich-header fields (used by the Industries mega menu). */
  href?: string;
  icon?: LucideIcon;
  blurb?: string;
};

const solutionsMenu: MenuGroup[] = [
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
      { label: "Appointment Booking", href: "/solutions/ai-appointment-booking" },
      { label: "Follow-Up", href: "/solutions/ai-follow-up" },
    ],
  },
  {
    heading: "CRM & Operations",
    items: [
      { label: "CRM Automation", href: "/solutions/ai-crm-automation" },
      { label: "Document Processing", href: "/solutions/ai-document-processing" },
    ],
  },
];

const industriesMenu: MenuGroup[] = [
  {
    heading: "Home Services",
    href: "/industries/home-services",
    icon: Wrench,
    blurb: "Answer every call and dispatch faster during breakdowns and emergencies.",
    items: [
      { label: "HVAC", href: "/industries/home-services" },
      { label: "Plumbing", href: "/industries/home-services" },
      { label: "Roofing", href: "/industries/home-services" },
      { label: "Electrical", href: "/industries/home-services" },
    ],
  },
  {
    heading: "Healthcare",
    href: "/industries/healthcare",
    icon: HeartPulse,
    blurb: "Turn new-patient inquiries into scheduled appointments.",
    items: [
      { label: "Dental", href: "/industries/healthcare" },
      { label: "Med Spa", href: "/industries/healthcare" },
      { label: "Dermatology", href: "/industries/healthcare" },
      { label: "Physical Therapy", href: "/industries/healthcare" },
    ],
  },
  {
    heading: "Automotive Services",
    href: "/industries/automotive-services",
    icon: Car,
    blurb: "Keep every bay booked and bring customers back for service.",
    items: [
      { label: "Auto Repair", href: "/industries/automotive-services" },
      { label: "Auto Body & Collision", href: "/industries/automotive-services" },
      { label: "Tire & Wheel", href: "/industries/automotive-services" },
      { label: "Towing & Roadside", href: "/industries/automotive-services" },
    ],
  },
];

const useCaseMenu: MenuGroup[] = [
  {
    heading: "Use Case Pages",
    items: [
      { label: "Home Services Automation", href: "/use-cases/home-services" },
      { label: "Healthcare Automation", href: "/use-cases/healthcare" },
      { label: "Automotive Automation", href: "/use-cases/automotive" },
    ],
  },
];

const resourcesMenu: MenuGroup[] = [
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
  // "/solutions" redirects to the AI Voice Agent page.
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
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const onDarkHero = darkHeroRoutes.includes(pathname) || pathname.startsWith("/use-cases/");
  const useWhiteLogo = onDarkHero && !scrolled;

  const openMenuNow = (label: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenMenu(label);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

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
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logoLink} aria-label="United Technologies home">
          <Image
            src="/logo.png"
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
              onMouseEnter={() => link.menu && openMenuNow(link.label)}
              onMouseLeave={() => link.menu && scheduleClose()}
            >
              <Link href={link.href} className={styles.navLink}>
                {link.label}
                {link.menu && <ChevronDown size={14} strokeWidth={2} aria-hidden />}
              </Link>

              {link.menu && (
                <div
                  className={`${styles.megaMenu} ${openMenu === link.label ? styles.megaMenuOpen : ""} ${link.menu.length === 1 ? styles.megaMenuNarrow : ""} ${link.menu.length === 3 ? styles.megaMenuCompact : ""} ${link.label === "Industries" ? styles.megaMenuIndustries : ""}`}
                >
                  <div className={styles.megaMenuGrid} style={{ gridTemplateColumns: `repeat(${link.menu.length}, 1fr)` }}>
                    {link.menu.map((group) => {
                      const GroupIcon = group.icon;
                      return (
                        <div key={group.heading} className={`${styles.megaGroup} ${group.icon ? styles.megaGroupRich : ""}`}>
                          {GroupIcon && group.href ? (
                            <Link href={group.href} className={styles.megaHead} onClick={() => setOpenMenu(null)}>
                              <span className={styles.megaIcon}>
                                <GroupIcon size={18} strokeWidth={1.75} aria-hidden />
                              </span>
                              <span className={styles.megaHeadText}>
                                <span className={styles.megaTitle}>{group.heading}</span>
                                {group.blurb && <span className={styles.megaBlurb}>{group.blurb}</span>}
                              </span>
                            </Link>
                          ) : (
                            <p className={styles.megaHeading}>{group.heading}</p>
                          )}
                          <ul className={group.icon ? styles.megaChips : undefined}>
                            {group.items.map((item) =>
                              group.icon ? (
                                <li key={item.label}>
                                  <span className={styles.megaChip}>{item.label}</span>
                                </li>
                              ) : (
                                <li key={item.label}>
                                  <Link href={item.href} className={styles.megaItem}>
                                    {item.label}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                  {link.label === "Industries" && (
                    <div className={styles.megaFooter}>
                      <span>Not sure where you fit? Any business that runs on calls and appointments does.</span>
                      <Link href="/industries" className={styles.megaFooterLink} onClick={() => setOpenMenu(null)}>
                        View all industries <ArrowRight size={14} aria-hidden />
                      </Link>
                    </div>
                  )}
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
                  {link.label === "Industries"
                    ? link.menu.map((g) => (
                        <Link
                          key={g.heading}
                          href={g.href ?? link.href}
                          className={styles.mobileSubLink}
                          onClick={() => setMobileOpen(false)}
                        >
                          {g.heading}
                        </Link>
                      ))
                    : link.menu.flatMap((g) => g.items).map((item, i) => (
                        <Link
                          key={`${item.href}-${i}`}
                          href={item.href}
                          className={styles.mobileSubLink}
                          onClick={() => setMobileOpen(false)}
                        >
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