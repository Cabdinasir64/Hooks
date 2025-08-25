import React from 'react'
import { useCounterStore } from './Zustand1'
import { motion, AnimatePresence } from 'framer-motion'

export default function Zustand1() {
    const { count, increase, decrease, reset } = useCounterStore()

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <AnimatePresence mode="wait">
                <motion.h1
                    key={count}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-6xl font-bold text-blue-600 mb-6"
                >
                    {count}
                </motion.h1>
            </AnimatePresence>

            <div className="flex space-x-4">
                <button
                    onClick={increase}
                    className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
                >
                    Kor
                </button>
                <button
                    onClick={decrease}
                    className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
                >
                    Hoos
                </button>
                <button
                    onClick={reset}
                    className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600 transition"
                >
                    Reset
                </button>
            </div>
        </div>
    )
}
