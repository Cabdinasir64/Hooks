import { motion } from "framer-motion"
import { FaSun, FaMoon } from "react-icons/fa"
import useThemeStore from "./Zustand5"

export default function App() {
    const { theme, toggleTheme } = useThemeStore()

    return (
        <div
            className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-500 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
                }`}
        >
            <motion.header
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className={`w-full py-6 text-center font-bold text-2xl shadow-md ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                    }`}
            >
                Zustand Theme Persist 🚀
            </motion.header>
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="p-10 mt-10 rounded-2xl shadow-xl flex flex-col items-center gap-6"
            >
                <h1 className="text-3xl font-bold">Switch Theme</h1>

                <motion.button
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={toggleTheme}
                    className="px-6 py-3 flex items-center gap-3 rounded-xl shadow-md bg-indigo-500 text-white font-medium"
                >
                    {theme === "light" ? <FaMoon /> : <FaSun />}
                    {theme === "light" ? "Dark Mode" : "Light Mode"}
                </motion.button>
            </motion.div>
        </div>
    )
}
