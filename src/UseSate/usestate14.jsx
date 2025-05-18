import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UseState15 = () => {
    const [showNotification, setShowNotification] = useState(true);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <AnimatePresence>
                {showNotification && (
                    <motion.div
                        key="notification"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 40 }}
                        transition={{ duration: 0.3 }}
                        className="bg-blue-500 text-white px-6 py-4 rounded shadow flex items-center space-x-4 max-w-md w-full"
                    >
                        <p>This is a notification message!</p>
                        <button
                            onClick={() => setShowNotification(false)}
                            className="font-bold hover:text-gray-300"
                            aria-label="Dismiss notification"
                        >
                            ✖
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {!showNotification && (
                <button
                    onClick={() => setShowNotification(true)}
                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    Show Notification
                </button>
            )}
        </div>
    );
};

export default UseState15;
