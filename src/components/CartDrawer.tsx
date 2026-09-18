"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "@/lib/cart-context"

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`
}

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, updateQuantity, removeFromCart, cartTotal } = useCart()
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            id: i.id,
            quantity: i.quantity,
          })),
        }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert("Checkout failed: " + (data.error || "Unknown error"))
      }
    } catch (err) {
      console.error("Checkout error:", err)
      alert("Failed to initiate checkout. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={closeCart} />

      {/* drawer panel */}
      <div className="relative w-full max-w-md h-full bg-dark-grey border-l border-white/10 flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <h2 className="text-lg font-bold text-white">
            Cart ({items.reduce((n, i) => n + i.quantity, 0)} item{items.reduce((n, i) => n + i.quantity, 0) === 1 ? "" : "s"})
          </h2>
          <button onClick={closeCart} className="text-light-grey hover:text-white transition cursor-pointer">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-5">
          {items.length === 0 && (
            <p className="text-light-grey text-sm">Your cart is empty.</p>
          )}
          {items.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="w-16 h-16 shrink-0 bg-white rounded flex items-center justify-center p-1">
                <Image src={item.image} width={64} height={64} alt={item.name} className="object-contain max-h-[56px]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white font-semibold leading-snug">{item.name}</p>
                <p className="text-sm text-light-grey mt-1">{formatPrice(item.unitAmount)}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="w-6 h-6 flex items-center justify-center border border-white/20 rounded text-light-grey hover:text-white hover:border-white/40 transition disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-sm text-white w-6 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    disabled={item.quantity >= 100}
                    className="w-6 h-6 flex items-center justify-center border border-white/20 rounded text-light-grey hover:text-white hover:border-white/40 transition disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-3 text-light-grey hover:text-red-400 transition cursor-pointer"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="text-sm text-white font-semibold whitespace-nowrap">
                {formatPrice(item.unitAmount * item.quantity)}
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div className="p-5 border-t border-white/10 flex flex-col gap-4">
            <div className="flex items-center justify-between text-white">
              <span className="font-semibold">Estimated total</span>
              <span className="font-bold text-lg">{formatPrice(cartTotal)}</span>
            </div>
            <p className="text-xs text-light-grey">Final amount is shown at secure checkout.</p>
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full py-3 px-6 rounded bg-khaki hover:bg-khaki-bright text-white font-bold text-base transition duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Redirecting to Secure Checkout..." : "Checkout"}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
