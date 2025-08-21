import React, { useState } from 'react';

const UseState2 = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !age) {
            alert("please fill all the fields")
            return
        }
        else if (age < 0) {
            alert("please enter a valid age")
            return
        }
        else if (age == 0) {
            alert("You are not born yet")
            return
        }
        else {
            alert("Form submitted successfully");
            setName('');
            setAge('');
            return
        }
    };

    return (
        <div className='h-screen flex justify-center items-center bg-gray-100'>
            <form
                onSubmit={handleSubmit}
                className='bg-white p-8 rounded shadow-md w-full max-w-sm space-y-4'
            >
                <h1 className='text-2xl font-bold text-center'>Macluumaadkaaga</h1>

                <input
                    type='text'
                    placeholder='Magaca'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='border p-2 rounded w-full'
                />

                <input
                    type='number'
                    placeholder="Da'da"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className='border p-2 rounded w-full'
                />

                <button
                    type='submit'
                    className='bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600'
                >
                    Gudbi
                </button>

                <div className='mt-4 text-center text-gray-600'>
                    <p><strong>Magaca:</strong> {name || "..."}</p>
                    <p><strong>Da'da:</strong> {age || "..."}</p>
                </div>
            </form>
        </div>
    );
};

export default UseState2;
