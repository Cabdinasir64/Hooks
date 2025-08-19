import React from "react";
import { useAppContext } from './usecontext13'
function Navbar() {
  const { user, theme, toggleTheme, cart } = useAppContext();

  return (
    <nav className={`p-4 flex justify-between items-center top-0 left-0 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-purple-600 text-white"} rounded-lg shadow-lg w-full`}>
      <h1 className="text-lg font-bold">🌐 My Shop</h1>
      <div className="flex items-center gap-4">
        <span>Welcome, {user.name} 👋</span>
        <button
          onClick={toggleTheme}
          className="px-2 py-1 rounded bg-white text-purple-600 font-bold"
        >
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        <span>🛒 {cart.length}</span>
      </div>
    </nav>
  );
}

export default Navbar;
