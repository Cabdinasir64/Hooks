import { useState, useEffect } from "react";

const UseEffect12 = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);
    const [editInput, setEditInput] = useState("");

    // load tasks
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(savedTasks);
    }, []);

    // Add new task
    const addTask = () => {
        if (input.trim() === "") {
            alert("Please enter task!");
            return;
        }
        const newTasks = [...tasks, input];
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
        setInput("");
    };

    // Delete task
    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    // Edit task
    const startEditing = (index) => {
        setEditingIndex(index);
        setEditInput(tasks[index]);
    };

    const saveEdit = (index) => {
        if (editInput.trim() === "") {
            alert("Task cannot be empty!");
            return;
        }
        const updatedTasks = [...tasks];
        updatedTasks[index] = editInput;
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        setEditingIndex(null);
    };

    const cancelEdit = () => {
        setEditingIndex(null);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
                <h1 className="text-2xl font-bold mb-6">Todo List</h1>

                <div className="flex gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="Enter task"
                        className="flex-1 border-2 p-2 rounded"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        onClick={addTask}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add
                    </button>
                </div>

                <div className="space-y-3">
                    {tasks.length === 0 ? (
                        <p>You don't have any tasks yet!</p>
                    ) : (
                        tasks.map((task, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-3 rounded flex justify-between items-center"
                            >
                                {editingIndex === index ? (
                                    <div className="flex gap-2 w-full">
                                        <input
                                            type="text"
                                            value={editInput}
                                            onChange={(e) => setEditInput(e.target.value)}
                                            className="flex-1 border-2 p-1 rounded"
                                            autoFocus
                                        />
                                        <button
                                            onClick={() => saveEdit(index)}
                                            className="bg-green-500 text-white px-2 rounded"
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={cancelEdit}
                                            className="bg-gray-500 text-white px-2 rounded"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <span>{task}</span>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => startEditing(index)}
                                                className="bg-yellow-500 text-white px-2 rounded"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => deleteTask(index)}
                                                className="bg-red-500 text-white px-2 rounded"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default UseEffect12;