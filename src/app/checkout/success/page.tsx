"use client";

import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatMoney } from "@/lib/payment";
import styles from "../../cart/shop.module.css";

type Verified = {
  verified: boolean;
  paymentIntentId: string;
  amount: number;
  currency: string;
  customerEmail: string;
  items: { title: string; quantity: number }[];
};

function SuccessContent() {
  const params = useSearchParams();
  const { clearCart } = useCart();
  const checkoutReference = params.get("checkout_reference");
  const sessionId = params.get("session_id");
  const [status, setStatus] = useState<"loading" | "success" | "failed">("loading");
  const [result, setResult] = useState<Verified | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    if (!checkoutReference || !sessionId) {
      setStatus("failed");
      return;
    }

    (async () => {
      try {
        const response = await fetch("/api/checkout/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ checkoutReference, sessionId }),
        });
        const data = (await response.json()) as Verified;
        if (!response.ok || !data.verified) throw new Error("Not verified");
        setResult(data);
        setStatus("success");
        clearCart();
      } catch {
        setStatus("failed");
      }
    })();
  }, [checkoutReference, sessionId, clearCart]);

  return (
    <div className={styles.statusCard}>
      <span className={`${styles.statusIcon} ${status === "failed" ? styles.statusWarn : ""}`}>
        {status === "loading" && <Loader2 className={styles.spin} aria-hidden />}
        {status === "success" && <CheckCircle2 aria-hidden />}
        {status === "failed" && <AlertCircle aria-hidden />}
      </span>

      {status === "loading" && (
        <>
          <h1>Confirming your payment…</h1>
          <p>Stripe is confirming your payment securely. Please keep this page open.</p>
        </>
      )}

      {status === "success" && result && (
        <>
          <h1>Payment successful</h1>
          <p>
            Thank you for your purchase{result.items.length ? ` of ${result.items.map((i) => i.title).join(", ")}` : ""}.
            Our team will reach out within 24 hours to get started.
          </p>
          <dl className={styles.receipt}>
            <div><dt>Amount paid</dt><dd>{formatMoney(result.amount, result.currency)}</dd></div>
            {result.customerEmail && <div><dt>Receipt sent to</dt><dd>{result.customerEmail}</dd></div>}
            {result.paymentIntentId && <div><dt>Payment reference</dt><dd>{result.paymentIntentId}</dd></div>}
          </dl>
          <Link className={styles.primaryButton} href="/">
            Back to Home <ArrowRight size={18} aria-hidden />
          </Link>
        </>
      )}

      {status === "failed" && (
        <>
          <h1>Payment not completed</h1>
          <p>We couldn't verify a successful Stripe payment for this visit. Your cart is still saved, so you can return to checkout and try again.</p>
          <Link className={styles.primaryButton} href="/checkout">
            Return to Checkout <ArrowRight size={18} aria-hidden />
          </Link>
        </>
      )}
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <Suspense fallback={null}>
          <SuccessContent />
        </Suspense>
      </div>
    </section>
  );
}