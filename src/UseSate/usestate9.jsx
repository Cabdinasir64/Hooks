import React, { useState } from 'react';

const UseState9 = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const incrementLikes = () => {
    setLikes(likes + 1);
  };

  const incrementDislikes = () => {
    setDislikes(dislikes + 1);
  };

  const resetVotes = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 font-sans px-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xs text-center">
        <h1 className="text-2xl font-bold mb-6">👍👎 Like / Dislike Counter</h1>
        
        <div className="flex justify-between items-center gap-4 mb-4">
          <button
            onClick={incrementLikes}
            className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600 transition"
          >
            👍 Like ({likes})
          </button>
          <button
            onClick={incrementDislikes}
            className="bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600 transition"
          >
            👎 Dislike ({dislikes})
          </button>
        </div>

        <button
          onClick={resetVotes}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition w-full"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseState9;
