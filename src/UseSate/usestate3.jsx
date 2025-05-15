import React, { useState } from 'react';

const UseState3 = () => {

    const [isopen, setopen] = useState(false)
   
    return (
        <div className='h-screen flex justify-center items-center bg-gray-100 font-sans'>
            <button className='bg-blue-400 p-4 rounded-md text-white' onClick={() => setopen(isopen)}>Open</button>

           
          
        </div>
    );
};

export default UseState3;
