import React, { useState, useCallback } from 'react';

export default function useCallback1() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const increment = useCallback(() => {
        setCount(prev => prev + step);
    }, [step]);

    const decrement = useCallback(() => {
        setCount(prev => {
            if (prev - step < 0) {
                alert('Count cannot be negative');
                return prev;
            }
            return prev - step;
        });
    }, [step]);

    const reset = useCallback(() => {
        setCount(0);
        setStep(1);
    }, []);



    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white p-4">
            <p className="text-3xl font-semibold mb-6 drop-shadow-md">Count: {count}</p>
            <div className="flex space-x-4 mb-6">
                <button
                    onClick={increment}
                    className="px-6 py-3 bg-white text-green-600 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition"
                >
                    Increment
                </button>
                <button
                    onClick={decrement}
                    className="px-6 py-3 bg-white text-red-600 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition"
                >
                    Decrement
                </button>
                <button
                    onClick={reset}
                    className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition"
                >
                    Reset
                </button>
            </div>
            <input
                type="number"
                value={step}
                onChange={e => setStep(Number(e.target.value))}
                className="px-4 py-2 rounded-lg text-black shadow-inner mb-4"
                placeholder="Step"
            />
        </div>
    );
}
