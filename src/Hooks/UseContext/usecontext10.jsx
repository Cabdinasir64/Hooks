import React, { useContext } from "react";
import { AuthContext } from './usecontext9'

function Navbar() {
    const { user } = useContext(AuthContext);

    return (
        <nav className="bg-purple-600 text-white p-4 flex justify-between items-center rounded-lg shadow-lg w-full">
            <h1 className="text-lg font-bold">🌐 My Website</h1>
            <span className="text-sm">Welcome, {user} 👋</span>
        </nav>
    );
}

export default Navbar;
