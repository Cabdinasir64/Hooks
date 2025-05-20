import React, { useEffect, useState } from "react";

const UseEffect2 = () => {
    const [message, setMessage] = useState("Fadlan sug...");

    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage("Waqtigu wuu dhammaaday! 🎉");
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="h-screen flex items-center justify-center bg-yellow-100">
            <h1 className="text-2xl font-semibold text-yellow-800">
                {message}
            </h1>
        </div>
    );
};

export default UseEffect2;
