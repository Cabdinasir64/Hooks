import React, { useState, memo, useCallback } from "react";
import { motion } from "framer-motion";


const TodoItem = memo(({ item, onToggle }) => {
    return (
      <motion.div
        className={`p-4 rounded-xl shadow-md border cursor-pointer ${
          item.done ? "bg-green-100" : "bg-red-100"
        }`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => onToggle(item.id)}
      >
        <p className={`text-lg ${item.done ? "line-through" : ""}`}>{item.text}</p>
      </motion.div>
    );
  },
);

export default function ReactMemo3() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Try React.memo", done: false },
    { id: 3, text: "Understand shallow comparison", done: false },
  ]);

  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-200 flex flex-col items-center py-12 gap-6">
      <h1 className="text-3xl font-bold text-yellow-700">ReactMemo3</h1>

      <div className="flex flex-col gap-4 w-3/4 md:w-1/2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} item={todo} onToggle={toggleTodo} />
        ))}
      </div>
    </div>
  );
}
