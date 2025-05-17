import React, { useState } from 'react';

const UseState5 = () => {
    const [isDarkMode, setIsDarkMode] = useState(false); 

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`h-screen flex justify-center items-center transition-colors duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <div className='text-center'>
                <h1 className='text-2xl font-bold mb-4'>Mode: {isDarkMode ? 'Dark' : 'Light'}</h1>
                <button
                    className='px-6 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600'
                    onClick={() => toggleMode()}
                >
                    Toggle Mode
                </button>
            </div>
        </div>
    );
};

export default UseState5;
