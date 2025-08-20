import React, { useState, memo, useCallback } from "react";
import { motion } from "framer-motion";

const ShoppingItem = memo(({ item, onToggle, onRemove }) => {
  console.log("Render:", item.name);

  return (
    <motion.div
      className={`p-4 rounded-xl shadow-md border flex justify-between items-center cursor-pointer ${
        item.bought ? "bg-green-100" : "bg-yellow-100"
      }`}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-4 flex-1">
        <input
          type="checkbox"
          checked={item.bought}
          onChange={() => onToggle(item.id)}
        />
        <p className={`text-lg ${item.bought ? "line-through" : ""}`}>
          {item.name} - <span className="font-semibold">{item.priority}</span>
        </p>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="ml-4 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Remove
      </button>
    </motion.div>
  );
});

export default function ReactMemo4() {
  const [items, setItems] = useState([
    { id: 1, name: "Milk", bought: false, priority: "High" },
    { id: 2, name: "Bread", bought: false, priority: "Medium" },
    { id: 3, name: "Eggs", bought: true, priority: "Low" },
  ]);
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("Medium");

  const toggleItem = useCallback((id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  }, []);

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const addItem = () => {
    if (input.trim() === "") return;
    setItems((prev) => [
      ...prev,
      { id: Date.now(), name: input.trim(), bought: false, priority },
    ]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-200 flex flex-col items-center py-12 gap-6">
      <h1 className="text-3xl font-bold text-purple-700">ReactMemo4 - Shopping List</h1>

      <div className="flex gap-2 w-3/4 md:w-1/2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new item"
          className="flex-1 px-4 py-2 border rounded-xl shadow"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="px-2 py-2 border rounded-xl"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button
          onClick={addItem}
          className="px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
        >
          Add
        </button>
      </div>

      <div className="flex flex-col gap-4 w-3/4 md:w-1/2">
        {items.map((item) => (
          <ShoppingItem
            key={item.id}
            item={item}
            onToggle={toggleItem}
            onRemove={removeItem}
          />
        ))}
      </div>
    </div>
  );
}
