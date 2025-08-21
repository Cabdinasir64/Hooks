import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UseNavigate1 = () => {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/usenavigate2/${encodeURIComponent(message)}`);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-pink-400 p-4">
            <h1 className="text-3xl font-bold text-white mb-6">Page 1</h1>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Qor fariintaada"
                className="p-2 rounded-md w-72 mb-4 text-black"
            />
            <button
                onClick={handleNavigate}
                className="bg-white text-purple-600 font-bold px-6 py-2 rounded-md hover:bg-purple-100 transition-all duration-300"
            >
                Send message to Page 2
            </button>
        </div>
    );
};

export default UseNavigate1;
