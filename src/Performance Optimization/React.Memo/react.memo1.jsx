import React, { useState, memo } from "react";
import { motion } from "framer-motion";

const Navbar = memo(() => {
    return (
        <motion.nav
            className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white shadow-lg"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <h1 className="text-2xl font-bold">ReactMemo1</h1>
            <ul className="flex gap-6 text-lg">
                <li className="hover:text-blue-200 transition">Home</li>
                <li className="hover:text-blue-200 transition">About</li>
                <li className="hover:text-blue-200 transition">Contact</li>
            </ul>
        </motion.nav>
    );
});

const Card = memo(({ value }) => {
    return (
        <motion.div
            className="bg-white shadow-md rounded-2xl p-6 text-center border hover:shadow-xl transition"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <h2 className="text-xl font-semibold text-gray-800">Value: {value}</h2>
        </motion.div>
    );
});

const ReactMemo1 = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
            <Navbar />
            <div className="flex flex-col items-center justify-center mt-20 gap-6">
                <button
                    onClick={() => setCount((prev) => prev + 1)}
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
                >
                    Increase Count
                </button>
                <Card value={count} />
            </div>
        </div>
    );
};

export default ReactMemo1;
