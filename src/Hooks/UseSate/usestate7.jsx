import React, { useState } from 'react';

const UseState7 = () => {
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-80">
                <h2 className="text-xl font-semibold mb-4">Password Input</h2>
                <div className="flex items-center border rounded px-3 py-2">
                    <input
                        type={isVisible ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full focus:outline-none"
                    />
                    <button onClick={toggleVisibility} className="ml-2 text-blue-500 font-semibold">
                        {isVisible ? 'Hide' : 'Show'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UseState7;
