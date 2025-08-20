import React, { useState, useEffect } from "react";

const UseEffect4 = () => {
    const [countdown, setCountdown] = useState(60);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;

        if (isRunning && countdown > 0) {
            timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
        }

        if (countdown === 0) {
            setIsRunning(false);
        }

        return () => clearInterval(timer);
    }, [isRunning, countdown]);

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100 gap-6">
            <h1 className="text-6xl font-bold text-red-600">{countdown}</h1>

            <div className="flex gap-4">
                <button
                    onClick={() => setIsRunning(true)}
                    className={`px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 ${isRunning ? "cursor-not-allowed" : ""}`}
                    disabled={isRunning}
                >
                    Start
                </button>

                <button
                    onClick={() => setIsRunning(false)}
                    className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500"
                    disabled={!isRunning}
                >
                    Pause
                </button>

                <button
                    onClick={() => {
                        setCountdown(60);
                        setIsRunning(false);
                    }}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default UseEffect4;
