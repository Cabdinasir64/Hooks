import React, { useState } from "react";
import { motion } from "framer-motion";
import useInput from './customhook3';


const CustomHook2 = () => {
    const name = useInput("");
    const email = useInput("");
    const [submittedData, setSubmittedData] = useState(null);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!name.value.trim()) newErrors.name = "Name is required";
        if (!email.value.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email.value)) {
            newErrors.email = "Email is invalid";
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setSubmittedData({ name: name.value, email: email.value });
            setErrors({});
            name.reset();
            email.reset();
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-400 p-6">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-10 shadow-2xl w-full max-w-md"
            >
                <h1 className="text-3xl font-bold text-purple-600 mb-6 text-center">
                    Custom Hook Example 2
                </h1>

                {!submittedData ? (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <input
                                type="text"
                                placeholder="Name"
                                className={`p-4 rounded-xl border ${errors.name ? "border-red-500" : "border-gray-300"
                                    } focus:outline-none focus:ring-2 focus:ring-purple-400 transition`}
                                {...name}
                            />
                            {errors.name && (
                                <span className="text-red-500 text-sm mt-1">{errors.name}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <input
                                type="email"
                                placeholder="Email"
                                className={`p-4 rounded-xl border ${errors.email ? "border-red-500" : "border-gray-300"
                                    } focus:outline-none focus:ring-2 focus:ring-purple-400 transition`}
                                {...email}
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm mt-1">{errors.email}</span>
                            )}
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-purple-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:bg-purple-700 transition-all"
                        >
                            Submit
                        </motion.button>
                    </form>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h2 className="text-2xl font-bold mb-2 text-purple-600">Fariin La Diray!</h2>
                        <p className="text-gray-700 mb-1">Name: {submittedData.name}</p>
                        <p className="text-gray-700 mb-4">Email: {submittedData.email}</p>
                        <motion.button
                            onClick={() => setSubmittedData(null)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-4 bg-purple-600 text-white py-3 px-6 rounded-xl hover:bg-purple-700 transition-all"
                        >
                            Reset
                        </motion.button>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default CustomHook2;
