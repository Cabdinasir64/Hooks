import React, { useReducer, useState } from "react";

// Reducer function
function todoReducer(state, action) {
    switch (action.type) {
        case "add":
            if (!action.payload.trim()) {
                alert("Fadlan xog soo geli!");
                return state;
            }
            return [
                ...state,
                { id: Date.now(), text: action.payload, isEditing: false }
            ];
        case "delete":
            return state.filter(todo => todo.id !== action.payload);
        case "startEdit":
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, isEditing: true } : todo
            );
        case "saveEdit":
            if (!action.payload.text.trim()) {
                alert("Fadlan xog soo geli!");
                return state;
            }
            return state.map(todo =>
                todo.id === action.payload.id
                    ? { ...todo, text: action.payload.text, isEditing: false }
                    : todo
            );
        case "cancelEdit":
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, isEditing: false } : todo
            );
        default:
            return state;
    }
}

const UseReducer4 = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [input, setInput] = useState("");

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4">
            <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
                    ✅ My Todo List
                </h1>

                {/* Add new todo */}
                <div className="flex mb-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Add new task..."
                        className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-300"
                    />
                    <button
                        onClick={() => {
                            dispatch({ type: "add", payload: input });
                            setInput("");
                        }}
                        className="bg-purple-500 text-white px-4 py-2 rounded-r-md hover:bg-purple-600 transition"
                    >
                        Add
                    </button>
                </div>

                {/* Show message if empty */}
                {todos.length === 0 && (
                    <p className="text-center text-gray-500 italic mb-4">
                        🚀 Fadlan xog soo geli si list-ka uu u muuqdo.
                    </p>
                )}

                {/* Todo items */}
                <ul className="space-y-3">
                    {todos.map(todo => (
                        <li
                            key={todo.id}
                            className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm"
                        >
                            {todo.isEditing ? (
                                <div className="flex w-full gap-2">
                                    <input
                                        type="text"
                                        defaultValue={todo.text}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                dispatch({
                                                    type: "saveEdit",
                                                    payload: {
                                                        id: todo.id,
                                                        text: e.target.value
                                                    }
                                                });
                                            }
                                        }}
                                        className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
                                    />
                                    <button
                                        onClick={() =>
                                            dispatch({
                                                type: "cancelEdit",
                                                payload: todo.id
                                            })
                                        }
                                        className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400 transition"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <span className="flex-1">{todo.text}</span>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() =>
                                                dispatch({ type: "startEdit", payload: todo.id })
                                            }
                                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() =>
                                                dispatch({ type: "delete", payload: todo.id })
                                            }
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UseReducer4;
