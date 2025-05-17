import React, { useState } from 'react';

const UseState4 = () => {
    const [inputValue, setInputValue] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const addTask = () => {
        if (inputValue.trim() === '') {
            alert('Please enter a task');
            return;
        }
        if (editIndex !== null) {
            const updatedTasks = taskList.map((task, i) =>
                i === editIndex ? inputValue : task
            );
            setTaskList(updatedTasks);
            setEditIndex(null);
        } else {
            setTaskList([...taskList, inputValue]);
        }

        setInputValue('');
    };
    const removeTask = (index) => {
        const updatedTasks = taskList.filter((_, i) => i !== index);
        setTaskList(updatedTasks);
    };

    const editTask = (index) => {
        setInputValue(taskList[index]);
        setEditIndex(index);
    };

    return (
        <div className='h-screen flex justify-center items-center bg-blue-200 font-sans'>
            <div className='w-full max-w-[300px] bg-gray-100 shadow-md rounded-lg p-4'>
                <div className='flex items-center justify-between gap-x-4 mb-4'>
                    <input
                        type="text"
                        placeholder='Enter your task'
                        className='w-full p-2 rounded-md border border-gray-300 flex-1'
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button
                        className='bg-blue-400 py-2 px-3 rounded-lg text-white'
                        onClick={addTask}
                    >
                        {editIndex !== null ? 'Update' : 'Add'}
                    </button>
                </div>

                <div className='flex flex-col gap-y-2'>
                    {taskList.map((item, index) => (
                        <div key={index} className='bg-white p-2 rounded-md shadow-sm flex items-center justify-between'>
                            <span>{item}</span>
                            <div className='flex gap-x-2 items-center'>
                                <button className='text-lime-500' onClick={() => editTask(index)}>Edit</button>
                                <button className='text-red-500' onClick={() => removeTask(index)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UseState4;
