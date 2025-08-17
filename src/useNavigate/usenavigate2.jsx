import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const UseNavigate2 = () => {
    const { message } = useParams();
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-400 p-4"
        >
            <h1 className="text-3xl font-bold text-white mb-6">Page 2</h1>
            <p className="text-xl text-white mb-4">
                Fariinta laga helay Page 1:{" "}
                <span className="font-semibold">{decodeURIComponent(message)}</span>
            </p>
            <button
                onClick={() => navigate("/")}
                className="bg-white text-green-600 font-bold px-6 py-2 rounded-md hover:bg-green-100 transition-all duration-300"
            >
                Ku noqo Page 1
            </button>
        </motion.div>
    );
};

export default UseNavigate2;
