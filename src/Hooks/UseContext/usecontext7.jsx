import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProductsContext } from "./usecontext6";

export default function UseContext7() {
  const { mode, selectedProduct, addProduct, updateProduct, closeModal } = useContext(ProductsContext);

  const isOpen = Boolean(mode);
  const isEdit = mode === "edit";
  const isCreate = mode === "create";
  const isView = mode === "view";

  const [form, setForm] = useState({ name: "", category: "Electronics", price: "", desc: "" });

  useEffect(() => {
    if ((isEdit || isView) && selectedProduct) {
      const { name, category, price, desc } = selectedProduct;
      setForm({ name, category, price, desc });
    }
    if (isCreate) {
      setForm({ name: "", category: "Electronics", price: "", desc: "" });
    }
  }, [mode, isEdit, isCreate, isView, selectedProduct]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;

    if (isEdit && selectedProduct) {
      updateProduct(selectedProduct.id, form);
    } else if (isCreate) {
      const normalized = { ...form, price: form.price?.startsWith("$") ? form.price : `$${form.price || "0"}` };
      addProduct(normalized);
    }
    closeModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="crud-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6"
          >
            {/* View Mode */}
            {isView && selectedProduct && (
              <>
                <h2 className="text-xl font-bold mb-4">Product Details</h2>
                <p><strong>Name:</strong> {selectedProduct.name}</p>
                <p><strong>Category:</strong> {selectedProduct.category}</p>
                <p><strong>Price:</strong> {selectedProduct.price}</p>
                <p className="mt-2 text-gray-600">{selectedProduct.desc}</p>
                <div className="flex justify-end mt-6">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700"
                  >
                    Close
                  </button>
                </div>
              </>
            )}

            {/* Create/Edit Form */}
            {(isCreate || isEdit) && (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">{isEdit ? "Edit Product" : "Add Product"}</h2>
                  <button
                    onClick={closeModal}
                    className="rounded-lg px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700"
                  >
                    Close
                  </button>
                </div>

                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      className="w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                      placeholder="e.g. Keyboard"
                      autoFocus
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Category</label>
                      <select
                        name="category"
                        value={form.category}
                        onChange={onChange}
                        className="w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                      >
                        <option>Electronics</option>
                        <option>Fashion</option>
                        <option>Home</option>
                        <option>Sports</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Price</label>
                      <input
                        type="text"
                        name="price"
                        value={form.price}
                        onChange={onChange}
                        className="w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        placeholder="$199"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Description</label>
                    <textarea
                      name="desc"
                      value={form.desc}
                      onChange={onChange}
                      rows={3}
                      className="w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                      placeholder="Short description..."
                    />
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700"
                    >
                      {isEdit ? "Update" : "Add"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
