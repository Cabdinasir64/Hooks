import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

export default function UseMemo4() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const itemsPerPage = 6;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    const filteredProducts = useMemo(() => {
        return products.filter((p) =>
            p.title.toLowerCase().includes(search.toLowerCase())
        );
    }, [products, search]);

    const sortedProducts = useMemo(() => {
        return [...filteredProducts].sort((a, b) =>
            sortOrder === "asc" ? a.price - b.price : b.price - a.price
        );
    }, [filteredProducts, sortOrder]);

    const paginatedProducts = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return sortedProducts.slice(start, start + itemsPerPage);
    }, [sortedProducts, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-10 flex flex-col items-center">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-8">
                🛍 Products
            </h1>

            <div className="flex flex-col md:flex-row gap-4 mb-6 w-full max-w-4xl">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setCurrentPage(1);
                    }}
                    className="border rounded-lg p-3 w-full shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
                />

                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="border rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
                >
                    <option value="asc">Price: Low → High</option>
                    <option value="desc">Price: High → Low</option>
                </select>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <motion.div
                        className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    />
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                        {paginatedProducts.length > 0 ? (
                            paginatedProducts.map((product) => (
                                <motion.div
                                    key={product.id}
                                    className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                        {product.title}
                                    </h2>
                                    <p className="text-gray-600 mb-2">${product.price}</p>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-24 h-24 object-contain mx-auto"
                                    />
                                </motion.div>
                            ))
                        ) : (
                            <p className="text-gray-500 col-span-2">No products found</p>
                        )}
                    </div>

                    <div className="flex items-center gap-2 mt-10 flex-wrap justify-center">
                        <button
                            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow disabled:opacity-50"
                        >
                            Prev
                        </button>

                        {[...Array(totalPages)].map((_, idx) => (
                            <motion.button
                                key={idx}
                                onClick={() => setCurrentPage(idx + 1)}
                                className={`px-4 py-2 rounded-lg shadow ${currentPage === idx + 1
                                        ? "bg-blue-600 text-white"
                                        : "bg-white text-gray-700"
                                    }`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {idx + 1}
                            </motion.button>
                        ))}

                        <button
                            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
