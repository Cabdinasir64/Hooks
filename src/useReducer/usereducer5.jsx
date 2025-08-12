import React, { useReducer, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Reducer-ka
function taskReducer(state, action) {
    switch (action.type) {
        case "load":
            return action.payload;
        case "add":
            return [
                ...state,
                { id: Date.now(), text: action.payload, done: false }
            ];
        case "toggle":
            return state.map(task =>
                task.id === action.payload
                    ? { ...task, done: !task.done }
                    : task
            );
        case "delete":
            return state.filter(task => task.id !== action.payload);
        default:
            return state;
    }
}

export default function UseReducer5() {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const saved = localStorage.getItem("tasks");
            if (saved) {
                dispatch({ type: "load", payload: JSON.parse(saved) });
            }
            setLoading(false);
        }, 2000); 
    }, []);

    useEffect(() => {
        if (!loading) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, [tasks, loading]);

    const addTask = () => {
        if (!input.trim()) {
            alert("Fadlan qor wax!");
            return;
        }
        dispatch({ type: "add", payload: input.trim() });
        setInput("");
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-blue-100 to-purple-100">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full"
                />
                <p className="ml-4 text-purple-700 font-semibold">Loading your tasks...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 p-6">
            <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-purple-700 mb-4">📋 Task Manager</h1>

                {/* Input Form */}
                <div className="flex mb-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Qor task cusub..."
                        className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-300"
                    />
                    <button
                        onClick={addTask}
                        className="bg-purple-500 text-white px-4 py-2 rounded-r-md hover:bg-purple-600 transition"
                    >
                        Add
                    </button>
                </div>

                {/* Task List */}
                {tasks.length === 0 ? (
                    <p className="text-gray-500 text-center">Ma jiraan tasks hadda.</p>
                ) : (
                    <ul className="space-y-3">
                        <AnimatePresence>
                            {tasks.map(task => (
                                <motion.li
                                    key={task.id}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.3 }}
                                    className={`flex justify-between items-center p-3 rounded-md shadow-sm ${task.done ? "bg-green-100" : "bg-gray-50"
                                        }`}
                                >
                                    <span
                                        className={`flex-1 cursor-pointer ${task.done ? "line-through text-gray-500" : ""
                                            }`}
                                        onClick={() =>
                                            dispatch({ type: "toggle", payload: task.id })
                                        }
                                    >
                                        {task.text}
                                    </span>
                                    <button
                                        onClick={() =>
                                            dispatch({ type: "delete", payload: task.id })
                                        }
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                                    >
                                        Delete
                                    </button>
                                </motion.li>
                            ))}
                        </AnimatePresence>
                    </ul>
                )}
            </div>
        </div>
    );
}
