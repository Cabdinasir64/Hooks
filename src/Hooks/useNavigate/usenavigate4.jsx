import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Laptop", price: "$1200", description: "High-end laptop", category: "Electronics" },
  { id: 2, name: "Headphones", price: "$150", description: "Noise-cancelling", category: "Electronics" },
  { id: 3, name: "Shoes", price: "$80", description: "Running shoes", category: "Fashion" }
];

const UseNavigate4 = () => {
  const { productName } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (p) => p.name === decodeURIComponent(productName)
  );

  if (!product) return <p className="text-center mt-10">Product lama helin</p>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-400 p-4"
    >
      <h1 className="text-3xl font-bold text-white mb-4">{product.name}</h1>
      <p className="text-xl text-white mb-2">Price: {product.price}</p>
      <p className="text-white mb-2">Category: {product.category}</p>
      <p className="text-white mb-6">Description: {product.description}</p>
      <button
        onClick={() => navigate(-1)}
        className="bg-white text-green-600 font-bold px-6 py-2 rounded-md hover:bg-green-100 transition-all duration-300"
      >
        Go Back
      </button>
    </motion.div>
  );
};

export default UseNavigate4;
