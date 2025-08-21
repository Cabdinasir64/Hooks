import React, { useReducer } from "react";

// Reducer function
function counterReducer(state, action) {
    switch (action.type) {
        case "+":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return { count: 0 };
        default:
            return state;
    }
}

const UseReducer1 = () => {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    // Function decrement ka hor hubinaya
    const handleDecrement = () => {
        if (state.count <= 0) {
            alert("Count ka ma yaraado 0!");
        } else {
            dispatch({ type: "decrement" });
        }
    };


    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
            <h1 className="text-4xl font-bold text-blue-800 mb-6">
                Count: {state.count}
            </h1>
            <div className="flex gap-4">
                <button
                    onClick={() => dispatch({ type: "+" })}
                    className="px-5 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
                >
                    +
                </button>
                <button
                    onClick={handleDecrement}
                    className="px-5 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
                >
                    -
                </button>
                <button
                    onClick={() => dispatch({ type: "reset" })}
                    className="px-5 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default UseReducer1;
