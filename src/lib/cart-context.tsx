"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { CYSANA_PRODUCT } from "@/lib/shop-product"

export interface CartItem {
  id: string,
  name: string,
  description: string,
  unitAmount: number, // in cents
  image: string,
  quantity: number,
}

interface CartContextValue {
  items: CartItem[],
  isCartOpen: boolean,
  openCart: () => void,
  closeCart: () => void,
  addToCart: (item: Omit<CartItem, "quantity">, quantity: number) => void,
  updateQuantity: (id: string, quantity: number) => void,
  removeFromCart: (id: string) => void,
  cartCount: number,
  cartTotal: number, // in cents
}

const CartContext = createContext<CartContextValue | null>(null)

const STORAGE_KEY = "conatix-cart"

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)

  // load persisted cart once on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const saved: unknown = JSON.parse(raw)
        if (Array.isArray(saved)) {
          const restored = saved
            .filter((item): item is CartItem => item?.id === CYSANA_PRODUCT.id && Number.isInteger(item.quantity) && item.quantity > 0)
            .map((item) => ({ ...CYSANA_PRODUCT, quantity: Math.min(item.quantity, 100) }))
          // Reprice carts saved before the temporary $1 plan was introduced.
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setItems(restored)
        }
      }
    } catch {
      // ignore malformed/unavailable storage
    }
    setHasLoaded(true)
  }, [])

  // persist on every change (skip the very first render before load completes)
  useEffect(() => {
    if (!hasLoaded) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore storage failures (private mode, quota, etc.)
    }
  }, [items, hasLoaded])

  const addToCart = (item: Omit<CartItem, "quantity">, quantity: number) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) => i.id === item.id ? { ...item, quantity: Math.min(100, i.quantity + quantity) } : i)
      }
      return [...prev, { ...item, quantity: Math.min(100, quantity) }]
    })
    setIsCartOpen(true)
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return
    setItems((prev) => prev.map((i) => i.id === id ? { ...i, quantity: Math.min(100, quantity) } : i))
  }

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0)
  const cartTotal = items.reduce((sum, i) => sum + i.unitAmount * i.quantity, 0)

  return (
    <CartContext.Provider value={{
      items,
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      addToCart,
      updateQuantity,
      removeFromCart,
      cartCount,
      cartTotal,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within a CartProvider")
  return ctx
}
