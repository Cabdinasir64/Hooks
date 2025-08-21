import React, { useState } from 'react';

const UseState3 = () => {

    const [isopen, setopen] = useState(false)

    return (
        <div className='h-screen flex justify-center items-center bg-gray-100 font-sans'>
            <button className='bg-blue-400 p-4 rounded-md text-white' onClick={() => setopen(!isopen)}>Open</button>

            {isopen && (
                <div className='bg-white p-4 rounded-md shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <h1 className='text-xl font-bold'>Hello World</h1>
                    <p className='mt-2'>This is a simple modal.</p>
                    <button className='bg-red-400 p-2 rounded-md text-white mt-4 w-full' onClick={() => setopen(false)}>Close</button>
                </div>
            ) }

        </div>
    );
};

export default UseState3;
