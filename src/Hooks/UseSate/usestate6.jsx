import React, { useState } from 'react';

const UseState6 = () => {
  const [isChange, setIsChange] = useState(false);

  const toggleColor = () => {
    setIsChange(!isChange);
  };

  return (
    <div
      className={`h-screen flex justify-center items-center transition-colors duration-500 ${
        isChange ? 'bg-blue-600 text-white' : 'bg-white text-black'
      }`}
    >
      <button
        className="px-6 py-3 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition"
        onClick={toggleColor}
      >
        Change Color
      </button>
    </div>
  );
};

export default UseState6;
