"use client"

import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export default function CartIcon() {
  const { cartCount, openCart } = useCart()

  return (
    <button
      onClick={openCart}
      className="relative text-light-grey hover:text-white transition cursor-pointer"
      aria-label="Open cart"
    >
      <ShoppingCart className="w-6 h-6" />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-electric-blue text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </button>
  )
}
