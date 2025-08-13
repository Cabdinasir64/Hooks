import React, { createContext, useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";

const ProductsContext = createContext();

export default function UseContext8() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                console.error("Fetch error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const ctxValue = { products };

    return (
        <ProductsContext.Provider value={ctxValue}>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        Products Store
                    </h1>
                    {loading ? <ProductsSkeleton /> : <ProductsList />}
                </div>
            </div>
        </ProductsContext.Provider>
    );
}


function ProductsSkeleton() {
    const skeletonArray = new Array(6).fill(null);

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skeletonArray.map((_, idx) => (
                <motion.div
                    key={idx}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                    <div className="w-full h-48 bg-gray-200 animate-pulse" />
                    <div className="p-4 space-y-3">
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
                        <div className="h-3 bg-gray-200 rounded animate-pulse w-full" />
                        <div className="flex justify-between items-center pt-3">
                            <div className="h-4 bg-gray-200 rounded animate-pulse w-16" />
                            <div className="h-8 bg-gray-200 rounded-lg animate-pulse w-20" />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

function ProductsList() {
    const { products } = useContext(ProductsContext);

    return (
        <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
            }}
        >
            {products.map((product) => (
                <motion.div
                    key={product.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                    whileHover={{ scale: 1.03 }}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-48 object-contain p-4 bg-gray-50"
                    />
                    <div className="p-4">
                        <h2 className="font-semibold text-lg text-gray-800 mb-1">
                            {product.title}
                        </h2>
                        <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                            {product.description}
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-purple-600">${product.price}</span>
                            <button className="px-3 py-1.5 rounded-lg bg-purple-600 text-white hover:bg-purple-700">
                                View
                            </button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}
