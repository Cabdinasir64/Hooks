import { motion } from "framer-motion"
import useCartStore from "./Zustand7"

const products = [
    { id: 1, name: "Apple", price: 1.5 },
    { id: 2, name: "Banana", price: 0.9 },
    { id: 3, name: "Orange", price: 1.2 },
    { id: 4, name: "Mango", price: 2.0 },
]

export default function Products() {
    const addToCart = useCartStore((state) => state.addToCart)

    return (
        <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
                <motion.div
                    key={product.id}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl p-4 shadow-md flex flex-col justify-between"
                >
                    <div className="flex-1">
                        <h2 className="text-xl font-bold">{product.name}</h2>
                        <p className="mt-2 text-gray-700">${product.price.toFixed(2)}</p>
                    </div>
                    <button
                        onClick={() => addToCart(product)}
                        className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
                    >
                        Add to Cart
                    </button>
                </motion.div>
            ))}
        </main>
    )
}
