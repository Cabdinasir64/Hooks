import React, { useState, memo, useCallback } from "react";
import { FixedSizeList as List } from "react-window";
import { motion } from "framer-motion";

const initialProducts = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (Math.random() * 100).toFixed(2),
}));

const ProductRow = memo(({ index, style, products, onUpdate }) => {
    const product = products[index];

    return (
        <motion.div
            style={style}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.01 }}
            className="flex justify-between px-6 py-4 border-b items-center bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-green-50 transition-all"
        >
            <div>
                <p className="font-bold text-green-700 text-lg">{product.name}</p>
                <p className="text-gray-500">${product.price}</p>
            </div>
            <button
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
                onClick={() => onUpdate(product.id)}
            >
                Update Price
            </button>
        </motion.div>
    );
});


export default function Virtualization3() {
    const [products, setProducts] = useState(initialProducts);

    const updateProduct = useCallback((id) => {
        setProducts((prev) =>
            prev.map((p) =>
                p.id === id ? { ...p, price: (Math.random() * 100).toFixed(2) } : p
            )
        );
    }, []);

    return (
        <div className="h-screen w-full bg-gray-100">
            <h1 className="text-3xl font-bold p-6 text-gray-800">
                Virtualized Products List
            </h1>

            <List
                height={600}
                itemCount={products.length}
                itemSize={90}
                width={"100%"}
            >
                {({ index, style }) => (
                    <ProductRow
                        index={index}
                        style={style}
                        products={products}
                        onUpdate={updateProduct}
                    />
                )}
            </List>
        </div>
    );
}
