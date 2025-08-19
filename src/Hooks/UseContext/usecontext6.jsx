import React, { createContext, useState } from "react";
import { motion } from "framer-motion";
import UseContext7 from "./usecontext7";

export const ProductsContext = createContext();

export default function UseContext6() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", category: "Electronics", price: "$1200", desc: "High-performance laptop for work and gaming" },
    { id: 2, name: "Shoes", category: "Fashion", price: "$80", desc: "Comfortable and stylish running shoes" },
    { id: 3, name: "Phone", category: "Electronics", price: "$900", desc: "Latest smartphone with amazing features" },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mode, setMode] = useState(null);

  const newId = () => Date.now();

  const addProduct = (data) => {
    const product = { id: newId(), ...data };
    setProducts((prev) => [product, ...prev]);
  };

  const updateProduct = (id, data) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...data } : p)));
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const startCreate = () => {
    setSelectedProduct({ id: null, name: "", category: "Electronics", price: "", desc: "" });
    setMode("create");
  };

  const startEdit = (product) => {
    setSelectedProduct(product);
    setMode("edit");
  };

  const startView = (product) => {
    setSelectedProduct(product);
    setMode("view");
  };

  const closeModal = () => {
    setMode(null);
    setSelectedProduct(null);
  };

  const ctxValue = {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    selectedProduct,
    setSelectedProduct,
    mode,
    setMode,
    closeModal,
  };

  return (
    <ProductsContext.Provider value={ctxValue}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Products</h1>
              <p className="text-gray-500">Add, edit, view, and delete items using Context.</p>
            </div>
            <button
              onClick={startCreate}
              className="px-4 py-2 rounded-xl shadow bg-purple-600 text-white hover:bg-purple-700 transition"
            >
              + Add Product
            </button>
          </div>

          {/* List */}
          <div className="bg-white rounded-2xl shadow p-4">
            {products.length === 0 ? (
              <p className="text-center text-gray-500 py-8">No products yet. Click “Add Product”.</p>
            ) : (
              <ul className="space-y-3">
                {products.map((product) => (
                  <motion.li
                    key={product.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border rounded-xl p-4 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-semibold text-gray-800">{product.name}</p>
                      <p className="text-sm text-gray-500">{product.category} • {product.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => startView(product)}
                        className="px-3 py-1.5 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                      >
                        View
                      </button>
                      <button
                        onClick={() => startEdit(product)}
                        className="px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="px-3 py-1.5 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <UseContext7 />
    </ProductsContext.Provider>
  );
}
