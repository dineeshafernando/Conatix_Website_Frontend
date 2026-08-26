"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

export default function ShopPage() {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"info" | "refund" | "shipping">("info");

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Checkout failed: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Failed to initiate checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-5xl mx-auto px-4 min-h-[70vh]">
      {/* Wix Style Breadcrumbs */}
      <div className="text-light-grey text-xs mb-8 font-light flex items-center gap-2">
        <Link href="/" className="hover:text-white transition duration-200">Home</Link>
        <span>&gt;</span>
        <span className="text-white">All Products</span>
      </div>

      {/* Main Grid: Sidebar + Product Grid */}
      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Left Sidebar: Browse Categories */}
        <div className="w-full md:w-1/4 flex flex-col gap-4">
          <h3 className="text-xs uppercase tracking-wider text-light-grey font-bold">Browse by</h3>
          <div className="border-t border-white/10 pt-3">
            <span className="text-sm text-white font-semibold underline cursor-pointer hover:opacity-80 transition">
              All Products
            </span>
          </div>
        </div>

        {/* Right Catalog: Product Card */}
        <div className="w-full md:w-3/4 flex flex-col gap-6">
          <div className="flex justify-between items-baseline mb-2">
            <h1 className="text-3xl text-white font-normal">All Products</h1>
            <span className="text-xs text-light-grey uppercase tracking-wider">Sort by: Recommended</span>
          </div>
          
          <span className="text-sm text-light-grey block -mt-4 mb-4">1 product</span>

          {/* Product Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div 
              onClick={() => setShowModal(true)}
              className="flex flex-col gap-3 group cursor-pointer"
            >
              {/* Square image card container */}
              <div className="aspect-square border border-white/15 flex items-center justify-center p-2 rounded hover:opacity-95 transition-opacity duration-200">
                <Image
                  src="/images/logos/cysana-cat-head-v2.png"
                  width={280}
                  height={280}
                  alt="Cysana Logo"
                  className="object-contain max-h-[280px]"
                />
              </div>
              
              {/* Product Label */}
              <div className="text-left">
                <h2 className="text-sm text-white font-semibold leading-snug group-hover:underline group-hover:text-electric-blue transition-colors">
                  Cysana malware detector and ransomware blocker
                </h2>
                <p className="text-sm text-light-grey mt-1 font-light">$100.00</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Checkout Pop-up Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 transition-all duration-300">
          <div className="bg-dark-grey p-8 md:p-12 rounded-lg max-w-4xl w-full border border-white/10 relative max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-light-grey hover:text-white cursor-pointer transition p-2"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              
              {/* Modal Left Column: Logo Showcase */}
              <div className="flex items-center justify-center p-8 bg-grey rounded border border-white/5 h-full min-h-[300px]">
                <Image
                  src="/images/logos/conatix-cysana.png"
                  width={300}
                  height={300}
                  alt="Cysana Branding"
                  className="object-contain max-h-[300px]"
                />
              </div>

              {/* Modal Right Column: Checkout Form */}
              <div className="flex flex-col gap-5 text-left">
                <div>
                  <span className="text-xs text-electric-blue font-bold tracking-wider uppercase">Subscription</span>
                  <h2 className="text-2xl font-bold text-white mt-1 mb-2">
                    Cysana malware detector and ransomware blocker
                  </h2>
                  <p className="text-sm text-light-grey leading-relaxed font-light">
                    Detect more dangerous malware using the latest AI technology and prevent malware from encrypting your data and becoming ransomware.
                  </p>
                </div>

                <div className="border-t border-b border-white/10 py-3 my-1">
                  <span className="text-2xl font-bold text-white">$100.00</span>
                  <span className="text-light-grey text-sm ml-2 font-light">USD / seat / year</span>
                </div>

                {/* Secure Checkout Button */}
                <button
                  onClick={handleCheckout}
                  disabled={loading}
                  className="w-full py-3 px-6 rounded bg-khaki-gold text-white font-bold text-base hover:bg-khaki-gold-bright transition duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Redirecting to Secure Checkout...
                    </>
                  ) : (
                    "Buy Now"
                  )}
                </button>

                {/* Info tabs section */}
                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex border-b border-white/10 gap-5 text-xs font-semibold tracking-wider pb-1">
                    <button
                      onClick={() => setActiveTab("info")}
                      className={`pb-1 border-b-2 transition duration-200 ${
                        activeTab === "info"
                          ? "border-khaki-gold-bright text-white"
                          : "border-transparent text-light-grey hover:text-white"
                      }`}
                    >
                      PRODUCT INFO
                    </button>
                    <button
                      onClick={() => setActiveTab("refund")}
                      className={`pb-1 border-b-2 transition duration-200 ${
                        activeTab === "refund"
                          ? "border-khaki-gold-bright text-white"
                          : "border-transparent text-light-grey hover:text-white"
                      }`}
                    >
                      REFUND POLICY
                    </button>
                    <button
                      onClick={() => setActiveTab("shipping")}
                      className={`pb-1 border-b-2 transition duration-200 ${
                        activeTab === "shipping"
                          ? "border-khaki-gold-bright text-white"
                          : "border-transparent text-light-grey hover:text-white"
                      }`}
                    >
                      SHIPPING INFO
                    </button>
                  </div>

                  <div className="text-light-grey text-xs leading-relaxed min-h-[60px]">
                    {activeTab === "info" && (
                      <p>Cysana malware detector can be purchased per seat on an annual subscription basis.</p>
                    )}
                    {activeTab === "refund" && (
                      <p>Refunds are available within 30 days of purchase. Please contact support to initiate a refund.</p>
                    )}
                    {activeTab === "shipping" && (
                      <p>No physical shipping required. Access credentials and download links will be delivered immediately to your email upon successful payment.</p>
                    )}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}
    </main>
  );
}