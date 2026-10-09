"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowLeft, ExternalLink, LockKeyhole, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatMoney } from "@/lib/payment";
import styles from "../cart/shop.module.css";

const currency = new Intl.NumberFormat("en-US");

export default function CheckoutPage() {
  const { items, cartTotal } = useCart();
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasStartingPrice = items.some((item) => item.priceLabel.endsWith("+"));

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("cancelled")) {
      setMessage("Payment was cancelled. Your cart is still saved, so you can try again whenever you're ready.");
    }
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    const data = new FormData(event.currentTarget);

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/checkout/create-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: {
            name: data.get("name"),
            email: data.get("email"),
            company: data.get("company"),
            country: data.get("country"),
          },
          items: items.map((item) => ({ id: item.id, quantity: item.quantity })),
        }),
      });
      const result = (await response.json()) as { url?: string; error?: string };
      if (!response.ok || !result.url) {
        throw new Error(result.error || "Could not start Stripe checkout.");
      }
      window.location.assign(result.url);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not start Stripe checkout.");
      setIsSubmitting(false);
    }
  }

  return (
    <section className={styles.page}>
      <div className={`${styles.container} ${styles.checkoutContainer}`}>
        <Link href="/cart" className={styles.continue}>
          <ArrowLeft size={17} aria-hidden />
          Back to Cart
        </Link>
        <h1 className={styles.heading}>
          <LockKeyhole aria-hidden />
          Secure Checkout
        </h1>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <h2>Your cart is empty</h2>
            <p>Add a package before continuing to checkout.</p>
            <Link className={styles.primaryButton} href="/pricing">Browse Pricing</Link>
          </div>
        ) : (
          <div className={`${styles.columns} ${styles.checkoutColumns}`}>
            <form className={`${styles.panel} ${styles.billingForm}`} onSubmit={handleSubmit}>
              <h2>Billing Information</h2>
              <label htmlFor="full-name">Full Name <span>*</span></label>
              <input id="full-name" name="name" autoComplete="name" placeholder="John Smith" required />
              <label htmlFor="email">Email Address <span>*</span></label>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="john@company.com" required />
              <label htmlFor="company">Company Name</label>
              <input id="company" name="company" autoComplete="organization" placeholder="Acme Corp (optional)" />
              <label htmlFor="country">Country</label>
              <select id="country" name="country" autoComplete="country-name" defaultValue="United States">
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Australia</option>
                <option>India</option>
                <option>Other</option>
              </select>

              <p className={styles.paymentNote}>
                You'll be redirected to Stripe's secure hosted checkout to pay. We never see or store your card details.
              </p>

              {message && <p className={styles.formMessage} role="alert">{message}</p>}
              <button className={styles.primaryButton} type="submit" disabled={isSubmitting}>
                <LockKeyhole size={18} aria-hidden />
                {isSubmitting ? "Redirecting to Stripe..." : `Pay ${formatMoney(cartTotal)}${hasStartingPrice ? "+" : ""} with Stripe`}
                {!isSubmitting && <ExternalLink size={16} aria-hidden />}
              </button>
            </form>

            <aside className={`${styles.summary} ${styles.checkoutSummary}`}>
              <h2>Order Summary</h2>
              <div className={styles.summaryLines}>
                {items.map((item) => (
                  <div className={styles.summaryLine} key={item.id}>
                    <span>{item.name} × {item.quantity}</span>
                    <strong>
                      ${currency.format(item.price * item.quantity)}
                      {item.priceLabel.endsWith("+") ? "+" : ""}
                    </strong>
                  </div>
                ))}
              </div>
              <div className={styles.total}>
                <strong>Total</strong>
                <strong>${currency.format(cartTotal)}{hasStartingPrice ? "+" : ""}</strong>
              </div>
              {hasStartingPrice && <p className={styles.caption}>Starting price; final project scope is confirmed with our team.</p>}
              <p className={styles.recurrence}>Price and billing terms are shown for each package.</p>
              <div className={styles.security}>
                <p><ShieldCheck size={16} aria-hidden /> 256-bit SSL encryption</p>
                <p><ShieldCheck size={16} aria-hidden /> PCI DSS compliant via Stripe</p>
              </div>
              <p className={styles.poweredBy}>Powered by <strong>Stripe</strong></p>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}