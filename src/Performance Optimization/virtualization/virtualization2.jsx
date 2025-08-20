import React, { useEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";
import { motion } from "framer-motion";

const ProductRow = ({ index, style, data }) => {
    const product = data[index];
    return (
        <motion.div
            style={style}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.01 }}
            className="flex justify-between px-6 py-4 border-b items-center bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-yellow-50 transition-all"
        >
            <div className="flex items-center space-x-4">
                <img src={product.image} alt={product.title} className="h-16 w-16 object-contain" />
                <div>
                    <p className="font-bold text-lg text-yellow-700">{product.title}</p>
                    <p className="text-gray-500">${product.price}</p>
                </div>
            </div>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all">
                Buy
            </button>
        </motion.div>
    );
};

export default function Virtualization2() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="h-8 w-8 border-2 border-dashed border-yellow-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="h-screen w-full bg-gray-100">
            <h1 className="text-2xl font-bold p-4">Virtualized Products List (API)</h1>

            <List
                height={600}
                itemCount={products.length}
                itemSize={100}
                width={"100%"}
                itemData={products}
            >
                {({ index, style, data }) => (
                    <ProductRow index={index} style={style} data={data} />
                )}
            </List>
        </div>
    );
}
