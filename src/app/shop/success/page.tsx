import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Stripe from "stripe";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;
  let confirmed = false;

  if (sessionId && process.env.STRIPE_SECRET_KEY) {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      confirmed = session.mode === "subscription" && session.payment_status === "paid";
    } catch (error) {
      console.error("Unable to verify checkout session:", error);
    }
  }

  return (
    <main className="max-w-xl mx-auto my-12 text-center">
      <div className="bg-dark-grey p-8 md:p-12 rounded-lg border border-white/10 flex flex-col items-center gap-6">
        {/* Success Icon */}
        {confirmed && <CheckCircle className="w-16 h-16 text-khaki-gold-bright" />}
        
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            {confirmed ? "Payment confirmed" : "Payment could not be confirmed"}
          </h1>
          <p className="text-light-grey text-lg">
            {confirmed
              ? "Stripe confirmed your Cysana subscription payment."
              : "Please check your payment status in Stripe or contact us before trying again."}
          </p>
        </div>

        {/* Next steps card */}
        {confirmed && <div className="bg-grey p-4 rounded border border-white/5 w-full text-left text-sm text-light-grey">
          <p className="font-semibold text-white mb-1">What happens next?</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Confirm the payment and subscription status in Stripe.</li>
            <li>License delivery is not automated yet.</li>
          </ul>
        </div>}

        {/* Back home link */}
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-md bg-electric-blue text-white font-bold hover:bg-electric-blue/80 transition duration-200"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
}
