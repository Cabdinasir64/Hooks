import React, { useState, useEffect } from "react";

const ProductFilter = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isFiltering, setIsFiltering] = useState(false);

    // Initial data fetch
    useEffect(() => {
        setIsLoading(true);

        const timer = setTimeout(() => {
            fetch("/data.json")
                .then(res => res.json())
                .then(data => {
                    setProducts(data);
                    setFilteredProducts(data);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error("Failed to fetch data:", error);
                    setIsLoading(false);
                });
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // Filter products
    useEffect(() => {
        if (products.length === 0) return;

        setIsFiltering(true);

        const filterTimer = setTimeout(() => {
            let result = [...products];

            if (category) {
                result = result.filter(product => product.category === category);
            }

            if (maxPrice) {
                result = result.filter(product => product.price <= Number(maxPrice));
            }

            setFilteredProducts(result);
            setIsFiltering(false);
        }, 500); // Filtering delay for skeleton effect

        return () => clearTimeout(filterTimer);
    }, [category, maxPrice, products]);

    return (
        <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6">Product Filter</h1>

            {/* Filter Controls */}
            <div className="w-full max-w-md bg-white p-4 rounded-lg shadow mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Category
                        </label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            disabled={isLoading}
                        >
                            <option value="">All Categories</option>
                            <option value="Development">Development</option>
                            <option value="Design">Design</option>
                            <option value="Marketing">Marketing</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Max Price
                        </label>
                        <input
                            type="number"
                            placeholder="No limit"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            disabled={isLoading}
                            min="0"
                        />
                    </div>
                </div>
            </div>

            {/* Content Area */}
            {isLoading || isFiltering ? (
                // Skeleton Loading
                <div className="w-full max-w-xl space-y-4">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="h-20 bg-gray-200 rounded-lg animate-pulse"
                        />
                    ))}
                </div>
            ) : (
                // Results
                <div className="w-full max-w-xl">
                    {filteredProducts.length > 0 ? (
                        <ul className="space-y-3">
                            {filteredProducts.map((product) => (
                                <li
                                    key={product.id}
                                    className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
                                >
                                    <h3 className="font-semibold text-lg">{product.name}</h3>
                                    <div className="flex justify-between mt-2">
                                        <span className="text-sm text-gray-600">
                                            {product.category}
                                        </span>
                                        <span className="font-medium">
                                            ${product.price}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="bg-white p-4 rounded-lg shadow text-center">
                            <p className="text-gray-600">No products found</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductFilter;