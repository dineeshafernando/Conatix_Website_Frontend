import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { CYSANA_PRODUCT } from "@/lib/shop-product";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const items = body?.items;
    const item = Array.isArray(items) && items.length === 1 ? items[0] : null;
    if (
      item?.id !== CYSANA_PRODUCT.id ||
      !Number.isInteger(item.quantity) ||
      item.quantity < 1 ||
      item.quantity > 100
    ) {
      return NextResponse.json({ error: "Invalid cart" }, { status: 400 });
    }

    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json({ error: "Checkout is not configured" }, { status: 503 });
    }

    const stripe = new Stripe(secretKey);
    const siteOrigin = new URL(req.url).origin;

    // Create a new Checkout Session on Stripe's server
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{
        price_data: {
          currency: "usd",
          product_data: {
            name: CYSANA_PRODUCT.name,
            description: CYSANA_PRODUCT.description,
          },
          unit_amount: CYSANA_PRODUCT.unitAmount,
          recurring: {
            interval: "year", // Annual subscription
          },
        },
        quantity: item.quantity,
      }],
      mode: "subscription",
      success_url: `${siteOrigin}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteOrigin}/shop/cancel`,
    });

    // Return the secure checkout page URL to the frontend
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe Checkout Error:", err);
    return NextResponse.json(
      { error: "Failed to initiate Stripe session" },
      { status: 500 }
    );
  }
}
