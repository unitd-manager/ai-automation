"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".section"));
    if (!targets.length) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.animate(
              [
                { opacity: 0, transform: "translateY(28px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              {
                duration: 800,
                easing: "cubic-bezier(0.16, 1, 0.3, 1)",
                fill: "both",
              }
            );
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => {
      io.observe(el);
    });

    return () => io.disconnect();
    // Re-run on every route change since each page mounts new .section elements.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}
