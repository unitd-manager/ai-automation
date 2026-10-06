"use client";

import { Check, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { PricingTier } from "@/data/pricing";
import styles from "./PricingCard.module.css";

export default function PricingAddToCart({ tier }: { tier: PricingTier }) {
  const { items, addToCart } = useCart();
  const isInCart = items.some((item) => item.id === tier.code);
  const price = Number(tier.price.replace(/[$,+]/g, ""));

  return (
    <button
      type="button"
      className={`${styles.addToCart} ${isInCart ? styles.addedToCart : ""}`}
      onClick={() =>
        addToCart({
          id: tier.code,
          name: tier.name,
          price,
          priceLabel: tier.price,
          billing: tier.priceNote,
        })
      }
      aria-label={isInCart ? `${tier.name} already in cart; add another` : `Add ${tier.name} to cart`}
    >
      {isInCart ? <Check size={18} aria-hidden /> : <ShoppingCart size={18} aria-hidden />}
      {isInCart ? "Add Another" : "Add to Cart"}
    </button>
  );
}
