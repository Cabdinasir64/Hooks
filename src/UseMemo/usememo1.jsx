import React, { useState, useMemo } from "react";

export default function UseMemo1() {
    const products = [
        { id: 1, name: "iPhone 14", price: 1200 },
        { id: 2, name: "Samsung Galaxy S23", price: 999 },
        { id: 3, name: "Google Pixel 7", price: 799 },
        { id: 4, name: "OnePlus 11", price: 699 },
        { id: 5, name: "Nokia XR20", price: 499 },
    ];

    const [search, setSearch] = useState("");

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            return product.name.toLowerCase().includes(search.toLowerCase());
        });
    }, [search, products]);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <h1 className="text-2xl font-bold mb-4">🛒 Product Filter</h1>

            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border rounded-lg p-2 mb-4 w-80 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition"
                        >
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <p className="text-gray-600">${product.price}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 col-span-2">No products found</p>
                )}
            </div>
        </div>
    );
}
