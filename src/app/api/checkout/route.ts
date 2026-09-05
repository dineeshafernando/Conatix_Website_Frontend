import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe using the private Secret Key from .env.local
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

interface CheckoutItem {
  name: string,
  description?: string,
  unitAmount: number, // in cents
  quantity: number,
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const items: CheckoutItem[] = body?.items?.length
      ? body.items
      : [
          {
            name: "Cysana malware detector and ransomware blocker",
            description: "Detect more dangerous malware using the latest AI technology and prevent malware from encrypting your data.",
            unitAmount: 10000,
            quantity: 1,
          },
        ];

    // Create a new Checkout Session on Stripe's server
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            description: item.description,
          },
          unit_amount: item.unitAmount,
          recurring: {
            interval: "year", // Annual subscription
          },
        },
        quantity: item.quantity,
      })),
      mode: "subscription",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/shop/cancel`,
    });

    // Return the secure checkout page URL to the frontend
    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe Checkout Error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to initiate Stripe session" },
      { status: 500 }
    );
  }
}
