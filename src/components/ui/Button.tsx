import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  size?: "md" | "lg";
}

export default function Button({ href, children, variant = "primary", size = "md" }: ButtonProps) {
  const className = [styles.button, styles[variant], styles[size]].join(" ");
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
