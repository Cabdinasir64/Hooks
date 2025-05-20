import React, { useEffect } from "react";

const UseEffect1 = () => {
    useEffect(() => {
        alert("Component-kaan waa la mount-gareeyay (UseEffect1)");
    }, []);

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-2xl font-bold text-gray-800">
                Tani waa UseEffect1 Example
            </h1>
        </div>
    );
};

export default UseEffect1;
