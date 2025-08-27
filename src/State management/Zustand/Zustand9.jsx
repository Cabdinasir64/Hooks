import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaShoppingCart, FaPlus, FaMinus, FaTrash } from "react-icons/fa"
import useCartStore from "./Zustand7"
import Products from "./Zustand8"

export default function App() {
    const [cartOpen, setCartOpen] = useState(false)
    const { cart, increase, decrease, remove, totalCount } = useCartStore()

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-indigo-600 text-white p-4 flex justify-between items-center shadow-md">
                <h1 className="text-2xl font-bold">My Store</h1>
                <button className="relative" onClick={() => setCartOpen(!cartOpen)}>
                    <FaShoppingCart size={24} />
                    {totalCount() > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                            {totalCount()}
                        </span>
                    )}
                </button>
            </header>
            <Products />
            <AnimatePresence>
                {cartOpen && (
                    <motion.aside
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl p-6 flex flex-col"
                    >
                        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
                        <div className="flex-1 overflow-y-auto">
                            {cart.length === 0 && <p className="text-gray-500">Cart is empty.</p>}
                            {cart.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    className="flex items-center justify-between mb-4 p-2 border rounded-lg"
                                >
                                    <div>
                                        <h3 className="font-semibold">{item.name}</h3>
                                        <p>${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button onClick={() => decrease(item.id)} className="p-1 bg-gray-200 rounded">
                                            <FaMinus />
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => increase(item.id)} className="p-1 bg-gray-200 rounded">
                                            <FaPlus />
                                        </button>
                                        <button onClick={() => remove(item.id)} className="p-1 bg-red-500 text-white rounded">
                                            <FaTrash />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        {cart.length > 0 && (
                            <div className="mt-4 p-2 border-t border-gray-300 font-bold text-lg">
                                Total: ${totalPrice.toFixed(2)}
                            </div>
                        )}

                        <button
                            onClick={() => setCartOpen(false)}
                            className="mt-4 bg-indigo-500 text-white py-2 rounded-lg"
                        >
                            Close Cart
                        </button>
                    </motion.aside>
                )}
            </AnimatePresence>
        </div>
    )
}
