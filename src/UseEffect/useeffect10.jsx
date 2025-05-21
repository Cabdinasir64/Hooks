import React, { useEffect, useState } from "react";

const UseEffect10 = () => {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filtering, setFiltering] = useState(false);

    const [category, setCategory] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [minRating, setMinRating] = useState("");
    const [search, setSearch] = useState("");

    // Fetch data
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            const fetchData = async () => {
                try {
                    const res = await fetch("/data.json");
                    const data = await res.json();
                    setProducts(data);
                    setFiltered(data);
                } catch (error) {
                    console.error("Fetch failed", error);
                } finally {
                    setLoading(false);
                }
            };
            fetchData();
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // Filter data
    useEffect(() => {
        if (products.length === 0) return;
        setFiltering(true);

        const filterTimer = setTimeout(() => {
            let result = [...products];

            if (category) {
                result = result.filter(p => p.category === category);
            }

            if (maxPrice) {
                result = result.filter(p => p.price <= Number(maxPrice));
            }

            if (minRating) {
                result = result.filter(p => p.rating >= Number(minRating));
            }

            if (search.trim()) {
                const keyword = search.toLowerCase();
                result = result.filter(p =>
                    p.name.toLowerCase().includes(keyword) ||
                    p.description.toLowerCase().includes(keyword)
                );
            }

            setFiltered(result);
            setFiltering(false);
        }, 1500);

        return () => clearTimeout(filterTimer);
    }, [category, maxPrice, minRating, search, products]);

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6 text-center">UseEffect10 - Advanced Filter</h1>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <select
                    className="p-2 border rounded"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    disabled={loading}
                >
                    <option value="">All Categories</option>
                    <option value="Development">Development</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                </select>

                <input
                    type="number"
                    className="p-2 border rounded"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={e => setMaxPrice(e.target.value)}
                    min="0"
                />

                <input
                    type="number"
                    className="p-2 border rounded"
                    placeholder="Min Rating"
                    value={minRating}
                    onChange={e => setMinRating(e.target.value)}
                    min="0" max="5" step="0.1"
                />

                <input
                    type="text"
                    className="p-2 border rounded"
                    placeholder="Search by name/description"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

            {/* Loader */}
            {(loading || filtering) ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-24 bg-gray-300 rounded-lg animate-pulse" />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filtered.length > 0 ? (
                        filtered.map(product => (
                            <div key={product.id} className="bg-white p-4 rounded shadow">
                                <h2 className="text-lg font-semibold">{product.name}</h2>
                                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                                <div className="flex justify-between text-sm">
                                    <span>📚 {product.category}</span>
                                    <span>💵 ${product.price}</span>
                                    <span>⭐ {product.rating}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-red-500">No results found.</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default UseEffect10;
