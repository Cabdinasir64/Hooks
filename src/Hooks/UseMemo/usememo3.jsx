import React, { useState, useEffect, useMemo } from "react";

export default function UseMemo3() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    const filteredProducts = useMemo(() => {
        let result = products.filter((p) =>
            p.title.toLowerCase().includes(search.toLowerCase())
        );

        if (sortOrder === "asc") {
            result.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "desc") {
            result.sort((a, b) => b.price - a.price);
        }

        return result;
    }, [products, search, sortOrder]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6 flex flex-col items-center">
            <h1 className="text-3xl font-extrabold mb-6 text-gray-800">
                🛍 Big Data Filtering & Sorting
            </h1>

            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border rounded-lg p-2 mb-4 w-80 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border rounded-lg p-2 mb-6 w-80 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
            >
                <option value="asc">Price: Low → High</option>
                <option value="desc">Price: High → Low</option>
            </select>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
                        >
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                {product.title}
                            </h2>
                            <p className="text-gray-600 mb-2">${product.price}</p>
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-24 h-24 object-contain"
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 col-span-2">No products found</p>
                )}
            </div>
        </div>
    );
}
