import Stripe from "stripe";

let client: Stripe | null = null;

export function getStripe(): Stripe {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is not set. Add it to .env.local and restart the dev server.");
  }
  if (!client) client = new Stripe(secretKey);
  return client;
}

export function getStripeCurrency() {
  return (process.env.STRIPE_CURRENCY || "usd").toLowerCase();
}

export function getSiteUrl(request: Request) {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) return configured.replace(/\/+$/, "");
  return new URL(request.url).origin;
}