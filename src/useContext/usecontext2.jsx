import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();
const ThemeContext = createContext();

function UseContext2() {
  
    const [name, setName] = useState("Abdinasir");
    const [theme, setTheme] = useState("light");

    
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <UserContext.Provider value={{ name, setName }}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <div
                    className={`min-h-screen flex items-center justify-center p-6 ${theme === "light"
                            ? "bg-gradient-to-br from-blue-100 to-purple-200"
                            : "bg-gray-900"
                        }`}
                >
                    <div
                        className={`rounded-2xl shadow-lg w-full max-w-md p-6 space-y-6 ${theme === "light" ? "bg-white" : "bg-gray-800 text-white"
                            }`}
                    >
                        <Navbar />
                        <ProfileEditor />
                        <ThemeSwitcher />
                    </div>
                </div>
            </ThemeContext.Provider>
        </UserContext.Provider>
    );
}

function Navbar() {
    const { name } = useContext(UserContext);
    const { theme } = useContext(ThemeContext);

    return (
        <nav
            className={`py-3 px-6 rounded-lg shadow flex justify-between items-center ${theme === "light" ? "bg-purple-500 text-white" : "bg-gray-700 text-yellow-300"
                }`}
        >
            <h1 className="text-lg font-semibold">My Website</h1>
            <span className="text-sm">Welcome, {name} 👋</span>
        </nav>
    );
}

// 4️⃣ Profile editor changes user name
function ProfileEditor() {
    const { name, setName } = useContext(UserContext);

    return (
        <div className="text-center space-y-4">
            <p className="text-lg font-medium">
                Current user: <span className="text-purple-600 font-bold">{name}</span>
            </p>
            <button
                onClick={() => setName("Nasir Updated")}
                className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition"
            >
                Change Name
            </button>
        </div>
    );
}

function ThemeSwitcher() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="text-center">
            <button
                onClick={toggleTheme}
                className="px-4 py-2 mt-4 rounded-lg shadow transition 
          bg-gray-200 hover:bg-gray-300 text-gray-800"
            >
                Switch to {theme === "light" ? "Dark" : "Light"} Mode
            </button>
        </div>
    );
}

export default UseContext2;
