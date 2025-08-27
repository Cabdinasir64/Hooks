import { create } from "zustand"
import { persist } from "zustand/middleware"

const useCartStore = create(
    persist((set, get) => ({
        cart: [],
        addToCart: (product) => {
            const existing = get().cart.find((p) => p.id === product.id)
            if (existing) {
                set({
                    cart: get().cart.map((p) =>
                        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                    ),
                })
            } else {
                set({ cart: [...get().cart, { ...product, quantity: 1 }] })
            }
        },
        increase: (id) => {
            set({
                cart: get().cart.map((p) =>
                    p.id === id && p.quantity < 10
                        ? { ...p, quantity: p.quantity + 1 }
                        : p
                ),
            })
        },
        decrease: (id) => {
            set({
                cart: get().cart.map((p) =>
                    p.id === id ? { ...p, quantity: p.quantity - 1 } : p
                ).filter((p) => p.quantity > 0),
            })

        },
        remove: (id) => {
            set({ cart: get().cart.filter((p) => p.id !== id) })
        },
        totalCount: () => get().cart.reduce((sum, p) => sum + p.quantity, 0),
    }),
        { name: "cart-storage" }
    )
)

export default useCartStore
