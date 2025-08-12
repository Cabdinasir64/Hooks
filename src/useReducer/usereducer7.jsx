import React, { useReducer } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Reducer
function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM":
            const existing = state.cart.find(item => item.id === action.payload.id);
            if (existing) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id
                            ? { ...item, qty: Math.min(item.qty + 1, item.maxQty) }
                            : item
                    ),
                };
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, qty: 1 }],
            };

        case "REMOVE_ITEM":
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };

        case "INCREASE_QTY":
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload
                        ? { ...item, qty: Math.min(item.qty + 1, item.maxQty) }
                        : item
                ),
            };

        case "DECREASE_QTY":
            return {
                ...state,
                cart: state.cart
                    .map(item =>
                        item.id === action.payload
                            ? { ...item, qty: item.qty - 1 }
                            : item
                    )
                    .filter(item => item.qty > 0),
            };

        case "CLEAR_CART":
            return { ...state, cart: [] };

        default:
            return state;
    }
}

// Products (maxQty kala duwan)
const initialProducts = [
    { id: 1, name: "Sneakers", price: 50, maxQty: 3, img: "https://picsum.photos/200/150?1" },
    { id: 2, name: "Backpack", price: 35, maxQty: 2, img: "https://picsum.photos/200/150?2" },
    { id: 3, name: "Headphones", price: 80, maxQty: 4, img: "https://picsum.photos/200/150?3" },
    { id: 4, name: "Watch", price: 120, maxQty: 1, img: "https://picsum.photos/200/150?4" },
];

export default function CartApp() {
    const [state, dispatch] = useReducer(cartReducer, { cart: [] });

    const totalPrice = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
            <h1 className="text-3xl font-bold text-blue-700 mb-6">🛒 Cart App (useReducer7)</h1>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {initialProducts.map(product => (
                    <motion.div
                        key={product.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
                        whileHover={{ scale: 1.03 }}
                    >
                        <img src={product.img} alt={product.name} className="w-full h-40 object-cover" />
                        <div className="p-4 flex flex-col flex-1">
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <p className="text-gray-600">${product.price}</p>
                            <p className="text-sm text-gray-500">Max: {product.maxQty}</p>
                            <button
                                onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
                                className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Cart */}
            <div className="bg-white rounded-lg shadow-lg p-4">
                <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                <AnimatePresence>
                    {state.cart.length > 0 ? (
                        <>
                            {state.cart.map(item => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    className="flex justify-between items-center border-b py-2"
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <div>
                                            <h3 className="font-semibold">{item.name}</h3>
                                            <p className="text-gray-500">${item.price} x {item.qty}</p>
                                            {item.qty >= item.maxQty && (
                                                <p className="text-red-500 text-xs">Reached max quantity</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => dispatch({ type: "DECREASE_QTY", payload: item.id })}
                                            className="bg-gray-300 px-2 rounded"
                                        >
                                            -
                                        </button>
                                        <button
                                            onClick={() => dispatch({ type: "INCREASE_QTY", payload: item.id })}
                                            className="bg-gray-300 px-2 rounded"
                                            disabled={item.qty >= item.maxQty}
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
                                            className="bg-red-500 text-white px-3 py-1 rounded"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                            <div className="flex justify-between items-center mt-4">
                                <span className="font-bold text-lg">Total: ${totalPrice}</span>
                                <button
                                    onClick={() => dispatch({ type: "CLEAR_CART" })}
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                                >
                                    Clear Cart
                                </button>
                            </div>
                        </>
                    ) : (
                        <p className="text-gray-500">Your cart is empty.</p>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
