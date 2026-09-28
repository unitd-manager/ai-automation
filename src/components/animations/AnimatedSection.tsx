"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "fade-up" | "fade-in";
}

export default function AnimatedSection({ children, delay = 0, className, as = "fade-up" }: AnimatedSectionProps) {
  const initial = as === "fade-up" ? { opacity: 0, y: 20 } : { opacity: 0 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
