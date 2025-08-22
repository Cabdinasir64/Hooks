import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const products = [
    { id: 1, name: "Kameeri" },
    { id: 2, name: "Buug" },
    { id: 3, name: "Laptop" },
    { id: 4, name: "Qalin" },
    { id: 5, name: "Joornaal" },
    { id: 6, name: "Makiinada Qorista" },
    { id: 7, name: "Buug-gacmeed" },
    { id: 8, name: "Xarig" },
];

const UseState23 = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Search Example</h2>

            {/* Search bar */}
            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder="Raadi badeecad..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <FiSearch className="absolute left-3 top-2.5 text-gray-400 text-lg" />
            </div>

            {/* Display filtered results with animation */}
            <ul className="space-y-3">
                <AnimatePresence>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <motion.li
                                key={product.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="p-3 bg-blue-50 rounded border border-blue-200"
                            >
                                {product.name}
                            </motion.li>
                        ))
                    ) : (
                        <motion.li
                            key="no-results"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center text-gray-500"
                        >
                            Ma jiro wax la helay oo la mid ah:{" "}
                            <strong>{searchTerm}</strong>
                        </motion.li>
                    )}
                </AnimatePresence>
            </ul>
        </div>
    );
};

export default UseState23;
