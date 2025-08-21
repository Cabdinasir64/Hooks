import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
    {
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces."
    },
    {
        question: "What is a Hook?",
        answer: "Hooks are functions that let you use React state and lifecycle features in functional components."
    },
    {
        question: "What is useState?",
        answer: "useState is a Hook that lets you add state to functional components."
    }
];

const UseState10 = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-8">
            <div className="w-full max-w-xl bg-white rounded shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 text-center">❓ FAQ - Accordion Example</h2>
                {faqData.map((item, index) => (
                    <div key={index} className="mb-4 border-b pb-2">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full text-left text-lg font-medium text-blue-600 focus:outline-none"
                        >
                            {item.question}
                        </button>

                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="mt-2 text-gray-700 overflow-hidden">
                                        {item.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UseState10;
