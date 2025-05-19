import React, { useState } from "react";
import { FiFilter } from "react-icons/fi"; // Filter icon
import { MdKeyboardArrowDown } from "react-icons/md"; // Arrow icon

const products = [
  { id: 1, name: "Kameeri", category: "Electronics" },
  { id: 2, name: "Buug", category: "Books" },
  { id: 3, name: "Laptop", category: "Electronics" },
  { id: 4, name: "Qalin", category: "Stationery" },
  { id: 5, name: "Joornaal", category: "Books" },
  { id: 6, name: "Makiinada Qorista", category: "Electronics" },
  { id: 7, name: "Buug-gacmeed", category: "Books" },
  { id: 8, name: "Xarig", category: "Stationery" },
];

const categories = ["All", "Electronics", "Books", "Stationery"];

const UseState22 = () => {
  const [filter, setFilter] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Filters Example</h2>

      {/* Dropdown filter */}
      <div className="relative w-48 mx-auto mb-6">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center justify-between w-full px-4 py-2 text-gray-700 bg-gray-100 rounded shadow hover:bg-gray-200 focus:outline-none"
        >
          <div className="flex items-center gap-2">
            <FiFilter className="text-lg" />
            <span>{filter}</span>
          </div>
          <MdKeyboardArrowDown
            className={`text-lg transition-transform duration-200 ${
              dropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown menu */}
        {dropdownOpen && (
          <ul className="absolute z-10 w-full mt-1 bg-white rounded shadow-md max-h-48 overflow-auto">
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setDropdownOpen(false);
                }}
                className={`cursor-pointer px-4 py-2 hover:bg-blue-100 ${
                  filter === cat ? "bg-blue-400 text-white font-semibold" : ""
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Display filtered products */}
      <ul className="space-y-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li
              key={product.id}
              className="p-3 bg-blue-50 rounded border border-blue-200"
            >
              <span className="font-semibold">{product.name}</span> -{" "}
              <span className="italic text-gray-600">{product.category}</span>
            </li>
          ))
        ) : (
          <li className="text-center text-gray-500">Ma jiro wax la helay.</li>
        )}
      </ul>
    </div>
  );
};

export default UseState22;
