import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
    {
        id: 1,
        name: "Product One",
        description: "Description for product one.",
        price: 29.99,
    },
    {
        id: 2,
        name: "Product Two",
        description: "Description for product two.",
        price: 49.99,
    },
    {
        id: 3,
        name: "Product Three",
        description: "Description for product three.",
        price: 19.99,
    },
];

const UseState15 = () => {
    const [cart, setCart] = useState({});

    const addToCart = (product) => {
        setCart((prevCart) => {
            const currentQty = prevCart[product.id]?.quantity || 0;
            return {
                ...prevCart,
                [product.id]: { product, quantity: currentQty + 1 },
            };
        });
    };

    const increaseQty = (productId) => {
        setCart((prevCart) => ({
            ...prevCart,
            [productId]: {
                ...prevCart[productId],
                quantity: prevCart[productId].quantity + 1,
            },
        }));
    };

    const decreaseQty = (productId) => {
        setCart((prevCart) => {
            const currentQty = prevCart[productId].quantity;
            if (currentQty === 1) {
                const newCart = { ...prevCart };
                delete newCart[productId];
                return newCart;
            }
            return {
                ...prevCart,
                [productId]: {
                    ...prevCart[productId],
                    quantity: currentQty - 1,
                },
            };
        });
    };

    const removeItem = (productId) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            delete newCart[productId];
            return newCart;
        });
    };

    const totalItems = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = Object.values(cart).reduce(
        (acc, item) => acc + item.quantity * item.product.price,
        0
    );

    return (
        <div className="min-h-screen bg-gray-100 flex p-6 gap-8 overflow-x-hidden">
            {/* Products List */}
            <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6">Products</h2>
                <div className="space-y-6">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-4 rounded shadow"
                        >
                            <h3 className="text-xl font-semibold">{product.name}</h3>
                            <p className="text-gray-600">{product.description}</p>
                            <p className="font-bold mt-2">${product.price.toFixed(2)}</p>
                            <button
                                onClick={() => addToCart(product)}
                                className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            >
                                Add to Cart
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Cart Sidebar */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="w-80 bg-white p-4 rounded shadow flex flex-col"
            >
                <h2 className="text-2xl font-bold mb-4">🛒 Cart ({totalItems})</h2>

                {totalItems === 0 ? (
                    <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                    <>
                        <div className="flex flex-col gap-4 flex-grow overflow-auto">
                            <AnimatePresence mode="popLayout">
                                {Object.values(cart).map(({ product, quantity }) => (
                                    <motion.div
                                        key={product.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9, x: -20 }}
                                        animate={{ opacity: 1, scale: 1, x: 0 }}
                                        exit={{ opacity: 0, scale: 0.85, x: 30 }}
                                        transition={{ duration: 0.3 }}
                                        className="border-b pb-2 flex flex-col"
                                    >
                                        <div className="flex justify-between items-center">
                                            <h4 className="font-semibold">{product.name}</h4>
                                            <button
                                                onClick={() => removeItem(product.id)}
                                                className="text-red-500 font-bold hover:text-red-700"
                                                aria-label="Remove item"
                                            >
                                                ✖
                                            </button>
                                        </div>
                                        <p className="text-gray-600 text-sm">{product.description}</p>
                                        <div className="flex justify-between items-center mt-2">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => decreaseQty(product.id)}
                                                    className="bg-gray-300 rounded px-2 py-1 hover:bg-gray-400"
                                                >
                                                    -
                                                </button>
                                                <span>{quantity}</span>
                                                <button
                                                    onClick={() => increaseQty(product.id)}
                                                    className="bg-gray-300 rounded px-2 py-1 hover:bg-gray-400"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <p className="font-semibold">
                                                ${(product.price * quantity).toFixed(2)}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Total Price */}
                        <p className="mt-4 text-right font-bold text-green-700">
                            Total: ${totalPrice.toFixed(2)}
                        </p>
                    </>
                )}
            </motion.div>
        </div>
    );
};

export default UseState15;
