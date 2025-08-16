import React, { useState, useMemo } from "react";

export default function UseMemo2() {
    const products = [
        { id: 1, name: "iPhone 14", price: 1200 },
        { id: 2, name: "Samsung Galaxy S23", price: 999 },
        { id: 3, name: "Google Pixel 7", price: 799 },
        { id: 4, name: "OnePlus 11", price: 699 },
        { id: 5, name: "Nokia XR20", price: 499 },
    ];

    const [sortOrder, setSortOrder] = useState("all");

    const sortedProducts = useMemo(() => {
        let sorted = [...products];
        if (sortOrder === "asc") {
            sorted.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "desc") {
            sorted.sort((a, b) => b.price - a.price);
        }
        return sorted;
    }, [sortOrder, products]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col items-center p-6">
            <h1 className="text-3xl font-extrabold mb-6 text-gray-800">
                🛍 Product Sorting
            </h1>

            <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="mb-8 px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
            >
                <option value="all">All</option>
                <option value="asc">Price: Low → High</option>
                <option value="desc">Price: High → Low</option>
            </select>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
                {sortedProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            {product.name}
                        </h2>
                        <p className="text-lg text-gray-600">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
