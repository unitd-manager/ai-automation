import { pricingTiers, type PricingTier } from "@/data/pricing";

export const MAX_QUANTITY = 10;

export function parseTierPrice(tier: PricingTier): number {
  const amount = Number(tier.price.replace(/[$,+\s]/g, ""));
  if (!Number.isFinite(amount) || amount <= 0) {
    throw new Error(`Package "${tier.name}" has an invalid price: ${tier.price}`);
  }
  return amount;
}

export function findTier(id: unknown): PricingTier | undefined {
  if (typeof id !== "string") return undefined;
  return pricingTiers.find((tier) => tier.code === id);
}

export function formatMoney(amount: number, currency = (process.env.NEXT_PUBLIC_STRIPE_CURRENCY || "USD").toUpperCase()) {
  return new Intl.NumberFormat(currency === "SGD" ? "en-SG" : "en-US", { style: "currency", currency, maximumFractionDigits: 2 }).format(amount);
}