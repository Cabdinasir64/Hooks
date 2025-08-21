import React, { useEffect, useState } from "react";

const UseEffect11 = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const storedMode = localStorage.getItem("darkMode") === "true";
        setDarkMode(storedMode);
        document.documentElement.classList.toggle("dark", storedMode);
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("darkMode", newMode);
        document.documentElement.classList.toggle("dark", newMode);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-blue-400 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
            <button
                onClick={toggleDarkMode}
                className="px-6 py-3 bg-black text-white dark:bg-yellow-300 dark:text-black rounded shadow"
            >
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
        </div>
    );
};

export default UseEffect11;
