"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Package, ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import styles from "./shop.module.css";

const currency = new Intl.NumberFormat("en-US");

export default function CartPage() {
  const { items, cartTotal, removeFromCart, clearCart } = useCart();
  const hasStartingPrice = items.some((item) => item.priceLabel.endsWith("+"));

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          <ShoppingCart aria-hidden />
          Your Cart
        </h1>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <Package className={styles.emptyIcon} aria-hidden />
            <h2>Your cart is empty</h2>
            <p>Browse our pricing packages and add one to get started.</p>
            <Link className={styles.secondaryButton} href="/pricing">
              <ArrowLeft size={17} aria-hidden />
              View Packages
            </Link>
          </div>
        ) : (
          <div className={styles.columns}>
            <div className={styles.itemsColumn}>
              <div className={styles.items}>
                {items.map((item) => (
                  <article className={styles.item} key={item.id}>
                    <span className={styles.packageIcon}><Package aria-hidden /></span>
                    <div className={styles.itemDetails}>
                      <h2>{item.name}</h2>
                      <p>Package · {item.billing}</p>
                      <strong>{item.priceLabel}</strong>
                    </div>
                    <span className={styles.quantity}>Qty: {item.quantity}</span>
                    <button
                      className={styles.remove}
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 size={18} aria-hidden />
                    </button>
                  </article>
                ))}
              </div>
              <Link href="/pricing" className={styles.continue}>
                <ArrowLeft size={17} aria-hidden />
                Continue Shopping
              </Link>
            </div>

            <aside className={styles.summary}>
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
              <Link className={styles.primaryButton} href="/checkout">
                Proceed to Checkout
                <ArrowRight size={18} aria-hidden />
              </Link>
              <button className={styles.clear} onClick={clearCart}>Clear cart</button>
              <div className={styles.security}>
                <p>Secure checkout</p>
                <p>256-bit SSL encryption</p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
