import React, { useState } from 'react';

const UseState1 = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
        if (count <= 0) {
            setCount(0);
            alert("Count cannot be negative");
        }
    }
    const reset = () => {
        setCount(0);
    }





    return (
        <div className='h-screen flex justify-center items-center bg-gray-100'>
            <div className='bg-white p-10 rounded shadow-md'>
                <h1 className='text-2xl font-bold mb-4'>Counter: {count}</h1>
                <button onClick={increment} className='bg-blue-500 text-white px-4 py-2 rounded mr-2'>Increment</button>
                <button onClick={decrement} className='bg-red-500 text-white px-4 py-2 rounded mr-2'>Decrement</button>
                <button onClick={reset} className='bg-gray-500 text-white px-4 py-2 rounded'>Reset</button>
            </div>

        </div>
    );
}
export default UseState1;