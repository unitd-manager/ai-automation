"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import styles from "./PricingCartLink.module.css";

export default function PricingCartLink() {
  const { itemCount } = useCart();
  if (itemCount === 0) return null;

  return (
    <div className={styles.wrap}>
      <Link href="/cart" className={styles.link}>
        <ShoppingCart size={17} aria-hidden />
        View Cart ({itemCount} {itemCount === 1 ? "item" : "items"})
      </Link>
    </div>
  );
}
