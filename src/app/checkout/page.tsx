"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowLeft, LockKeyhole, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import styles from "../cart/shop.module.css";

const currency = new Intl.NumberFormat("en-US");

export default function CheckoutPage() {
  const { items, cartTotal } = useCart();
  const [message, setMessage] = useState("");
  const hasStartingPrice = items.some((item) => item.priceLabel.endsWith("+"));

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Online payment is not configured yet. Please contact us to complete your order.");
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
              {message && <p className={styles.formMessage} role="alert">{message}</p>}
              <button className={styles.primaryButton} type="submit">Continue to Payment</button>
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
                <p><ShieldCheck size={16} aria-hidden /> Secure billing information</p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
