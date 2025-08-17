import React from "react";
import { motion } from "framer-motion";
import useCounter from "./customhook5";

const CustomHook4 = () => {
    const { count, increment, decrement, reset } = useCounter(50);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-400 p-6">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-sm text-center"
            >
                <h1 className="text-4xl font-bold mb-6 text-purple-600">Counter</h1>

                <motion.div
                    className="text-3xl font-mono mb-6 text-gray-700"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    {count}
                </motion.div>

                <div className="flex justify-center gap-4 mb-4">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={increment}
                        className="bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-600 transition-all"
                    >
                        +
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={decrement}
                        className="bg-red-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-red-600 transition-all"
                    >
                        -
                    </motion.button>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={reset}
                    className="bg-gray-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-gray-600 transition-all"
                >
                    Reset
                </motion.button>
            </motion.div>
        </div>
    );
};

export default CustomHook4;
