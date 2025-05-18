import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UseState12 = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => {
        if (step < 3) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted! ✅');
        console.log(formData);
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
            {/* Step Indicator with Line */}
            <div className="relative w-full max-w-52 mb-8">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-400 transform -translate-y-1/2 z-0"></div>
                <div className="absolute top-1/2 left-0 h-1 bg-blue-600 z-10 transition-all duration-300"
                    style={{
                        width: step === 1 ? '0%' : step === 2 ? '50%' : '100%',
                        transform: 'translateY(-50%)',
                    }}
                ></div>
                <div className="flex justify-between relative z-20">
                    {[1, 2, 3].map((s) => (
                        <div
                            key={s}
                            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${step >= s ? 'bg-blue-600' : 'bg-gray-400'
                                }`}
                        >
                            {s}
                        </div>
                    ))}
                </div>
            </div>

            {/* Form Area */}
            <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-4">📝 Multi-step Form</h2>

                <form onSubmit={handleSubmit}>
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <label className="block mb-2 font-medium">Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded mb-4"
                                />
                                <button type="button" onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">
                                    Next
                                </button>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <label className="block mb-2 font-medium">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded mb-4"
                                />
                                <div className="flex justify-between">
                                    <button type="button" onClick={prevStep} className="bg-gray-400 text-white px-4 py-2 rounded">
                                        Back
                                    </button>
                                    <button type="button" onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">
                                        Next
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <label className="block mb-2 font-medium">Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded mb-4"
                                />
                                <div className="flex justify-between">
                                    <button type="button" onClick={prevStep} className="bg-gray-400 text-white px-4 py-2 rounded">
                                        Back
                                    </button>
                                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                                        Submit
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </form>
            </div>
        </div>
    );
};

export default UseState12;
