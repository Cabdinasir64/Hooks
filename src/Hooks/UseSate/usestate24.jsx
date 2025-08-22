import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const products = [
    { id: 1, name: "Kameeri", category: "Electronics" },
    { id: 2, name: "Buug", category: "Books" },
    { id: 3, name: "Laptop", category: "Electronics" },
    { id: 4, name: "Qalin", category: "Stationery" },
    { id: 5, name: "Joornaal", category: "Books" },
    { id: 6, name: "Makiinada Qorista", category: "Electronics" },
    { id: 7, name: "Buug-gacmeed", category: "Books" },
    { id: 8, name: "Xarig", category: "Stationery" },
];

const categories = ["All", "Electronics", "Books", "Stationery"];

const ITEMS_PER_PAGE = 3;

const UseState24 = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    // Filter + Search
    const filtered = products.filter((product) => {
        const matchCategory = filter === "All" || product.category === filter;
        const matchSearch = product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        return matchCategory && matchSearch;
    });

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = filtered.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleFilter = (cat) => {
        setFilter(cat);
        setCurrentPage(1);
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow-md overflow-y-hidden">
            <h2 className="text-2xl font-bold mb-6 text-center">Pagination + Filter + Search</h2>

            {/* Search */}
            <div className="relative mb-4">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Raadi..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <FiSearch className="absolute left-3 top-2.5 text-gray-400 text-lg" />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => handleFilter(cat)}
                        className={`px-4 py-2 rounded-full text-sm ${filter === cat
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 hover:bg-gray-300"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Products */}
            <ul className="space-y-3 min-h-[150px]">
                {currentItems.length > 0 ? (
                    currentItems.map((product) => (
                        <li
                            key={product.id}
                            className="p-3 bg-blue-50 rounded border border-blue-200"
                        >
                            <strong>{product.name}</strong> -{" "}
                            <span className="italic text-gray-600">{product.category}</span>
                        </li>
                    ))
                ) : (
                    <li
                        key="no-results"
                        className="text-center text-gray-500"
                    >
                        Lama helin wax natiijo ah.
                    </li>
                )}
            </ul>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-6">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-40"
                >
                    &larr;
                </button>

                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${currentPage === i + 1
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 hover:bg-gray-200"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-40"
                >
                    &rarr;
                </button>
            </div>
        </div>
    );
};

export default UseState24;
