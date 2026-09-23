import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

// Stripe calls this endpoint directly (not the browser), so it needs the raw
// request body to verify the signature before trusting the event payload.
export async function POST(req: NextRequest) {
  const signature = req.headers.get("stripe-signature");
  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature!, webhookSecret);
  } catch (err) {
    console.error("Stripe webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      // TODO: fulfillment - this fires once per successful subscription purchase.
      // Look up session.customer_details?.email and session.id, then deliver the
      // license key / installation instructions (e.g. via an email provider like
      // Resend or SendGrid) and record the order. Nothing sends that email yet.
      console.log("Checkout completed:", session.id, session.customer_details?.email);
      break;
    }
    case "invoice.paid": {
      // Fires on each successful renewal charge for the annual subscription.
      // TODO: extend access / send a renewal receipt if desired.
      break;
    }
    case "customer.subscription.deleted": {
      // Fires when a subscription is canceled or a renewal payment ultimately fails.
      // TODO: revoke access.
      break;
    }
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
