import React from "react";
import { useAppContext } from './usecontext13'

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 100 },
];

function ProductList() {
  const { addToCart, theme } = useAppContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
      {products.map(product => (
        <div key={product.id} className={`p-4 rounded-lg shadow ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white"}`}>
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p>${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-700 transition"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
