import React, { useCallback } from 'react';

export default function useCallback2() {

    const logMessage = useCallback(() => {
        console.log('Button clicked! 🎉');
    }, []);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
            <h1 className="text-2xl font-bold">useCallback Example 2</h1>
            <button
                onClick={logMessage}
                className="px-6 py-3 bg-green-500 text-white rounded shadow hover:bg-green-600 transition"
            >
                Click Me
            </button>
        </div>
    );
}
