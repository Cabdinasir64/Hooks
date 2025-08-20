import React, { useState, useEffect } from "react";

const UseEffect3 = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isRunning]);

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-blue-50 gap-4">
            <h1 className="text-4xl font-bold text-blue-800">Timer: {count} s</h1>

            <div className="flex gap-4">
                <button
                    onClick={() => setIsRunning(false)}
                    className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
                >
                    Pause
                </button>

                <button
                    onClick={() => setIsRunning(true)}
                    className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
                >
                    Start
                </button>

                <button
                    onClick={() => setCount(0)}
                    className="bg-yellow-400 text-black px-4 py-2 rounded shadow hover:bg-yellow-500"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default UseEffect3;
