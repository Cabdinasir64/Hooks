import React, { useState, memo, useCallback } from "react";
import { motion } from "framer-motion";

const ProductCard = memo(({ product, onToggle }) => {
    return (
        <motion.div
            className={`p-6 rounded-2xl shadow-md border cursor-pointer ${product.available ? "bg-green-100" : "bg-red-100"
                }`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => onToggle(product.id)}
        >
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">
                {product.available ? "Available ✅" : "Out of stock ❌"}
            </p>
        </motion.div>
    );
});

const ReactMemo2 = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "Laptop", available: true },
        { id: 2, name: "Headphones", available: false },
        { id: 3, name: "Keyboard", available: true },
        { id: 4, name: "Mouse", available: true },
    ]);

    const toggleAvailability = useCallback((id) => {
        setProducts((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, available: !item.available } : item
            )
        );
    }, []);
    

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-200 flex flex-col items-center py-12 gap-8">
            <h1 className="text-3xl font-bold text-purple-700">ReactMemo2</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/4">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onToggle={toggleAvailability}
                    />
                ))}
            </div>
        </div>
    );
};

export default ReactMemo2;
