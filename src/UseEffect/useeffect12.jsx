import { useState, useEffect } from "react";


const UseEffect12 = () => {

    const [task, settask] = useState([])
    const [input, setinput] = useState("")


    const AddTask = () => {
        if (input == "") {
            alert("Enter a task")
        }
        else {
            settask([...task, input])
            localStorage.setItem("tasks", JSON.stringify(task)) || []
            setinput("")
        }

    }

    useEffect(() => {
        const task = JSON.parse(localStorage.getItem("tasks"))
        settask(task)


    }, [])

     const Delete = (index) => {
        const updatedTasks = task.filter((_, i) => i !== index);
        localStorage.removeItem()
        settask(updatedTasks);

    };

    return (
        <>

            <div className="h-screen flex items-center justify-center bg-gray-200">
                <div className="rounded shadow-md w-full max-w-xl bg-white p-4">
                    <div className="flex items-center justify-between gap-x-4">
                        <input type="text" placeholder="Enter a task" className="flex-1 rounded outline-none border-2 p-2 focus:border-blue-400  "
                            value={input}
                            onChange={(e) => setinput(e.target.value)} />
                        <button className="py-2 px-3 bg-blue-400 hover:bg-blue-500 rounded text-white" onClick={() => AddTask()}>Add</button>
                    </div>
                    <div className='flex flex-col gap-y-2 mt-8'>
                        {task.map((item, index) => (
                            <div key={index} className='bg-gray-300 text-gray-800 p-2 rounded-md shadow-sm flex items-center justify-between'>
                                <span>{item}</span>
                                <button onClick={() => Delete(index)} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )

}
export default UseEffect12