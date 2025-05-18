import React, { useState } from 'react';

const UseState11 = () => {
    const [text, setText] = useState('');
    const maxLength = 200;

    const handleChange = (e) => {
        if (e.target.value.length <= maxLength) {
            setText(e.target.value);
        }
        else {
            alert("Maximum character limit reached!");
        }
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
                <h2 className="text-xl font-bold mb-4 text-center">📝 Character Counter</h2>
                <textarea
                    className="w-full h-40 p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Type your message here..."
                    value={text}
                    onChange={handleChange}
                ></textarea>
                <div className={`text-right mt-2 ${text.length === maxLength ? 'text-red-500' : 'text-gray-500'}`}>
                    {text.length} / {maxLength} characters
                </div>
            </div>
        </div>
    );
};

export default UseState11;
