import React, { useContext } from "react";
import { ProductsContext } from "./usecontext4";
import { motion, AnimatePresence } from "framer-motion";

function UseContext5() {
  const { selectedProduct, setSelectedProduct } = useContext(ProductsContext);

  if (!selectedProduct) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="product-details"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        onClick={() => setSelectedProduct(null)}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-bold mb-2">Product Details</h2>
          <p><strong>Name:</strong> {selectedProduct.name}</p>
          <p><strong>Category:</strong> {selectedProduct.category}</p>
          <p><strong>Price:</strong> {selectedProduct.price}</p>
          <p className="mt-2 text-gray-600">{selectedProduct.desc}</p>
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            onClick={() => setSelectedProduct(null)}
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default UseContext5;
