import Link from "next/link";
import { XCircle } from "lucide-react";

export default function CancelPage() {
  return (
    <main className="max-w-xl mx-auto my-12 text-center">
      <div className="bg-dark-grey p-8 md:p-12 rounded-lg border border-white/10 flex flex-col items-center gap-6">
        {/* Cancel Icon */}
        <XCircle className="w-16 h-16 text-red-500" />
        
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Checkout Cancelled</h1>
          <p className="text-light-grey text-lg">
            Your transaction was not completed. No charges were made to your account.
          </p>
        </div>

        <div className="flex gap-4">
          {/* Action links */}
          <Link
            href="/shop"
            className="inline-block px-6 py-3 rounded-md bg-electric-blue text-white font-bold hover:bg-electric-blue/80 transition duration-200"
          >
            Try Again
          </Link>
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-md bg-grey border border-white/10 text-white font-bold hover:bg-white/10 transition duration-200"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
