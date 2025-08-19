import React, { createContext, useContext, useState } from "react";

const MyName = createContext();

function UseContext1() {
    const [user, setUser] = useState("Abdinasir");

    return (
        <MyName.Provider value={{ user, setUser }}>
            <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-6">
                <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 space-y-6">
                    {/* Navbar */}
                    <Navbar />

                    {/* Content */}
                    <div className="text-center space-y-4">
                        <p className="text-lg font-medium text-gray-700">
                            Current user: <span className="text-purple-600 font-bold">{user}</span>
                        </p>
                        <button
                            onClick={() => setUser("Nasir Updated")}
                            className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition"
                        >
                            Change Name
                        </button>
                    </div>
                </div>
            </div>
        </MyName.Provider>
    );
}

function Navbar() {
    const { user } = useContext(MyName);
    return (
        <nav className="bg-purple-500 text-white py-3 px-6 rounded-lg shadow flex justify-between items-center">
            <h1 className="text-lg font-semibold">My Website</h1>
            <span className="text-sm">Welcome, {user} 👋</span>
        </nav>
    );
}

export default UseContext1;

