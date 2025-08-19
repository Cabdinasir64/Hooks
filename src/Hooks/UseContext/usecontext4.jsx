import React, { useState, createContext } from "react";
import UseContext5 from "./usecontext5";

export const ProductsContext = createContext();

function UseContext4() {
  const [products] = useState([
    { id: 1, name: "Laptop", category: "Electronics", price: "$1200", desc: "High-performance laptop for work and gaming" },
    { id: 2, name: "Shoes", category: "Fashion", price: "$80", desc: "Comfortable and stylish running shoes" },
    { id: 3, name: "Phone", category: "Electronics", price: "$900", desc: "Latest smartphone with amazing features" },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <ProductsContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-6">
          <h1 className="text-2xl font-bold mb-4">Products</h1>
          <ul className="space-y-3">
            {products.map((product) => (
              <li
                key={product.id}
                className="border p-3 rounded-lg flex justify-between hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <span>{product.name}</span>
                <span className="text-gray-500">{product.category}</span>
              </li>
            ))}
          </ul>
          {selectedProduct && <UseContext5 />}
        </div>
      </div>
    </ProductsContext.Provider>
  );
}

export default UseContext4;
