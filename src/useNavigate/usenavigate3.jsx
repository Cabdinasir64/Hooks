import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: "$1200", description: "High-end laptop", category: "Electronics" },
  { id: 2, name: "Headphones", price: "$150", description: "Noise-cancelling", category: "Electronics" },
  { id: 3, name: "Shoes", price: "$80", description: "Running shoes", category: "Fashion" }
];

const UseNavigate3 = () => {
  const navigate = useNavigate();

  const handleClick = (product) => {
    navigate(`/usenavigate4/${encodeURIComponent(product.name)}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-pink-400 p-4">
      <h1 className="text-3xl font-bold text-white mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() => handleClick(product)}
          >
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseNavigate3;
