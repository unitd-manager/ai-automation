import { NextResponse } from "next/server";
import { findTier } from "@/lib/payment";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: { checkoutReference?: string; sessionId?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const checkoutReference = body.checkoutReference?.trim();
  const sessionId = body.sessionId?.trim();
  if (!checkoutReference || !sessionId) {
    return NextResponse.json({ error: "Checkout reference and session ID are required." }, { status: 400 });
  }

  try {
    const session = await getStripe().checkout.sessions.retrieve(sessionId);

    if (
      session.client_reference_id !== checkoutReference ||
      session.metadata?.checkoutReference !== checkoutReference
    ) {
      return NextResponse.json({ error: "This payment does not match the checkout." }, { status: 400 });
    }
    if (session.payment_status !== "paid" && session.payment_status !== "no_payment_required") {
      return NextResponse.json({ error: "Stripe has not confirmed payment for this checkout." }, { status: 402 });
    }

    const paymentIntentId =
      typeof session.payment_intent === "string" ? session.payment_intent : session.payment_intent?.id || "";

    type OrderLine = { title: string; quantity: number };
    const rawItems: string = session.metadata?.items || "";
    const items = rawItems
      .split(",")
      .map((part: string): OrderLine | null => {
        const [code, qty] = part.split("x");
        const tier = findTier(code);
        return tier ? { title: tier.name, quantity: Number(qty) || 1 } : null;
      })
      .filter((item: OrderLine | null): item is OrderLine => item !== null);

    return NextResponse.json({
      verified: true,
      checkoutReference,
      sessionId: session.id,
      paymentIntentId,
      amount: (session.amount_total ?? 0) / 100,
      currency: (session.currency || "usd").toUpperCase(),
      customerName: session.metadata?.customerName || "",
      customerEmail: session.customer_details?.email || session.customer_email || "",
      items,
    });
  } catch (error) {
    console.error("Stripe session verification failed:", error);
    return NextResponse.json({ error: "Stripe could not verify this payment." }, { status: 502 });
  }
}