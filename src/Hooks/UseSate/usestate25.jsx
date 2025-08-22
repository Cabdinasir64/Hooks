import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const products = [
    { id: 1, name: "Laptop", category: "Electronics", color: "Black", price: 1200 },
    { id: 2, name: "Buug", category: "Books", color: "White", price: 25 },
    { id: 3, name: "Qalin", category: "Stationery", color: "Blue", price: 2 },
    { id: 4, name: "Tablet", category: "Electronics", color: "Silver", price: 600 },
    { id: 5, name: "Buug-gacmeed", category: "Books", color: "Green", price: 15 },
    { id: 6, name: "Printer", category: "Electronics", color: "White", price: 300 },
    { id: 7, name: "Joornaal", category: "Books", color: "Brown", price: 10 },
    { id: 8, name: "Xarig", category: "Stationery", color: "Black", price: 1 },
];

const categories = ["All", "Electronics", "Books", "Stationery"];
const colors = ["All", "Black", "White", "Blue", "Green", "Silver", "Brown"];
const priceRanges = [
    { label: "All", min: 0, max: Infinity },
    { label: "$0 - $50", min: 0, max: 50 },
    { label: "$51 - $500", min: 51, max: 500 },
    { label: "$501 - $1500", min: 501, max: 1500 },
];

const UseState25 = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [color, setColor] = useState("All");
    const [priceRange, setPriceRange] = useState(priceRanges[0]);

    const handleClear = () => {
        setSearch("");
        setCategory("All");
        setColor("All");
        setPriceRange(priceRanges[0]);
    };

    const filtered = products.filter((p) => {
        const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
        const matchCategory = category === "All" || p.category === category;
        const matchColor = color === "All" || p.color === color;
        const matchPrice = p.price >= priceRange.min && p.price <= priceRange.max;

        return matchSearch && matchCategory && matchColor && matchPrice;
    });

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded shadow space-y-6">
            <h2 className="text-2xl font-bold text-center">Advanced Product Filters</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Sidebar Filters */}
                <div className="space-y-4 md:col-span-1">
                    {/* Search */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Raadi badeecad..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:ring-blue-400 focus:outline-none"
                        />
                        <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Category</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                        >
                            {categories.map((c) => (
                                <option key={c}>{c}</option>
                            ))}
                        </select>
                    </div>

                    {/* Color */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Color</label>
                        <select
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                        >
                            {colors.map((c) => (
                                <option key={c}>{c}</option>
                            ))}
                        </select>
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Price Range</label>
                        <select
                            value={priceRange.label}
                            onChange={(e) => {
                                const selected = priceRanges.find((r) => r.label === e.target.value);
                                setPriceRange(selected);
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                        >
                            {priceRanges.map((r) => (
                                <option key={r.label}>{r.label}</option>
                            ))}
                        </select>
                    </div>

                    {/* Clear Filters */}
                    <button
                        onClick={handleClear}
                        className="w-full py-2 mt-2 bg-gray-200 hover:bg-gray-300 rounded text-sm"
                    >
                        Clear Filters
                    </button>
                </div>

                {/* Product List */}
                <div className="md:col-span-3">
                    {filtered.length > 0 ? (
                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filtered.map((p) => (
                                <li
                                    key={p.id}
                                    className="p-4 bg-blue-50 rounded border border-blue-200 shadow-sm"
                                >
                                    <div className="font-semibold text-lg">{p.name}</div>
                                    <div className="text-sm text-gray-600">
                                        {p.category} • {p.color} • ${p.price}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="text-center text-gray-500 mt-10">
                            Ma jiraan badeecooyin ku habboon.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UseState25;
