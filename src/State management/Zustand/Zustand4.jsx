import React, { useState } from 'react'
import { useTodoStore } from './Zustand3'
import { motion, AnimatePresence } from 'framer-motion'

export default function TodoList() {
    const [text, setText] = useState('')
    const [editId, setEditId] = useState(null)
    const [tab, setTab] = useState('All')

    const { todos, addTodo, toggleTodo, editTodo, removeTodo, clearAll } = useTodoStore()
    const handleAdd = () => {
        if (text.trim() === '') {
            alert('Please enter a todo!')
            return
        }
        if (editId) {
            editTodo(editId, text)
            setEditId(null)
        } else {
            addTodo(text)
        }
        setText('')
    }
    const filteredTodos = tab === 'All' ? todos : tab === 'Active' ? todos.filter((t) => !t.completed) : todos.filter((t) => t.completed)

    return (
        <div className="flex flex-col items-center justify-start min-h-screen p-6 bg-gray-100">
            <h1 className="text-4xl font-bold mb-6 text-blue-600">Todo List</h1>

            <div className="flex mb-4 space-x-4">
                {['All', 'Active', 'Completed'].map((t) => (
                    <button
                        key={t}
                        className={`px-4 py-2 rounded ${tab === t ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                            }`}
                        onClick={() => setTab(t)}
                    >
                        {t}
                    </button>
                ))}
            </div>
            <div className="flex mb-4 w-full max-w-md">
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add new todo"
                    className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none"
                />
                <button
                    onClick={handleAdd}
                    className="px-4 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600 transition"
                >
                    {editId ? 'Update' : 'Add'}
                </button>
            </div>
            <AnimatePresence>
                <ul className="w-full max-w-md">
                    {filteredTodos.map((todo) => (
                        <motion.li
                            key={todo.id}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.3 }}
                            className="flex justify-between items-center p-3 mb-2 bg-white rounded shadow hover:shadow-lg transition"
                        >
                            <div className="flex items-center space-x-2 flex-1">
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleTodo(todo.id)}
                                    className="w-5 h-5"
                                />
                                <span
                                    className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''
                                    }`}
                                >
                                    {todo.text}
                                </span>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => {
                                        setEditId(todo.id)
                                        setText(todo.text)
                                    }}
                                    className="px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => removeTodo(todo.id)}
                                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                                >
                                    Delete
                                </button>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </AnimatePresence>
            {todos.length > 0 && (
                <button
                    onClick={clearAll}
                    className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                >
                    Clear All
                </button>
            )}
        </div>
    )
}
