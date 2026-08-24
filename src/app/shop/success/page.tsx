import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <main className="max-w-xl mx-auto my-12 text-center">
      <div className="bg-dark-grey p-8 md:p-12 rounded-lg border border-white/10 flex flex-col items-center gap-6">
        {/* Success Icon */}
        <CheckCircle className="w-16 h-16 text-khaki-gold-bright" />
        
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Thank you for your purchase!</h1>
          <p className="text-light-grey text-lg">
            Your subscription to <strong>Cysana malware detector and ransomware blocker</strong> has been activated successfully.
          </p>
        </div>

        {/* Next steps card */}
        <div className="bg-grey p-4 rounded border border-white/5 w-full text-left text-sm text-light-grey">
          <p className="font-semibold text-white mb-1">What happens next?</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>An email receipt has been sent to your billing address.</li>
            <li>Your license key and installation instructions will arrive in a separate email shortly.</li>
          </ul>
        </div>

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
