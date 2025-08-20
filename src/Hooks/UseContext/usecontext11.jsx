import React, { useContext, useState } from "react";
import { AuthContext } from './usecontext9'

function Dashboard() {
    const { user, setUser } = useContext(AuthContext);
    const [newName, setNewName] = useState("");

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center space-y-4">
            <p className="text-lg text-gray-700">
                Current user: <span className="text-purple-600 font-bold">{user}</span>
            </p>
            <div className="mt-2 mb-2">
                <input
                    type="text"
                    placeholder="Update user name"
                    className="border border-gray-300 rounded-lg p-2"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
            </div>
            <button
                onClick={() => {
                    setUser(newName);
                    setNewName("");
                }}
                className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-700 transition"
            >
                Change Name
            </button>
        </div>
    );
}

export default Dashboard;
