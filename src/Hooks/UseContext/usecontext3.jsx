import React, { createContext, useContext, useState } from "react";


const ProductsContext = createContext();

function UseContext3() {
    const [products] = useState([
        { id: 1, name: "Laptop", category: "Electronics" },
        { id: 2, name: "Shoes", category: "Fashion" },
        { id: 3, name: "Phone", category: "Electronics" },
        { id: 4, name: "T-Shirt", category: "Fashion" },
    ]);
    const [filteredProducts, setFilteredProducts] = useState(products);

    const filterByCategory = (category) => {
        if (category === "All") {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter((p) => p.category === category));
        }
    };

    return (
        <ProductsContext.Provider
            value={{ products, filteredProducts, filterByCategory }}
        >
            <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-2xl space-y-6">
                    <h1 className="text-2xl font-bold text-center">Product List</h1>
                    <FilterButtons />
                    <ProductList />
                </div>
            </div>
        </ProductsContext.Provider>
    );
}

function FilterButtons() {
    const { filterByCategory } = useContext(ProductsContext);

    return (
        <div className="flex gap-3 justify-center">
            {["All", "Electronics", "Fashion"].map((cat) => (
                <button
                    key={cat}
                    onClick={() => filterByCategory(cat)}
                    className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}


function ProductList() {
    const { filteredProducts } = useContext(ProductsContext);

    return (
        <ul className="space-y-2">
            {filteredProducts.map((product) => (
                <li
                    key={product.id}
                    className="border p-3 rounded-lg flex justify-between"
                >
                    <span>{product.name}</span>
                    <span className="text-gray-500">{product.category}</span>
                </li>
            ))}
        </ul>
    );
}

export default UseContext3;
