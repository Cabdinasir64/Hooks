import React, { useState, useEffect } from "react";

const UseEffect5 = () => {
    const targetDate = new Date("2025-05-21T00:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState({
        years: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            return {
                years: 0,
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        const seconds = Math.floor((difference / 1000) % 60);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 365);
        const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));

        return { years, days, hours, minutes, seconds };
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const { years, days, hours, minutes, seconds } = timeLeft;

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100 gap-6 text-center">
            <h1 className="text-4xl font-bold mb-6">Countdown to New Year 2026</h1>
            <div className="flex gap-8 text-2xl font-mono text-gray-800">
                <div>
                    <span className="block text-6xl font-extrabold">{years}</span>
                    Years
                </div>
                <div>
                    <span className="block text-6xl font-extrabold">{days}</span>
                    Days
                </div>
                <div>
                    <span className="block text-6xl font-extrabold">{hours}</span>
                    Hours
                </div>
                <div>
                    <span className="block text-6xl font-extrabold">{minutes}</span>
                    Minutes
                </div>
                <div>
                    <span className="block text-6xl font-extrabold">{seconds}</span>
                    Seconds
                </div>
            </div>

            {years + days + hours + minutes + seconds === 0 && (
                <div className="mt-8 text-3xl text-green-600 font-semibold">
                    🎉 Waqtigu wuu dhammaaday! 🎉
                </div>
            )}
        </div>
    );
};

export default UseEffect5;
