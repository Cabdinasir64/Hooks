import React, { useReducer, useEffect } from "react";

// Reducer function
function myReducer(state, action) {
    if (action.type === "increment") {
        const newCount = state.count + 1;

        if (newCount > 15) {
            return { count: state.count, message: "waxaad ka weynaantey 15 hamplayo 🎉🎉🎉" };
        } else if (newCount === 15) {
            return { count: newCount, message: "Waxaad gaartay 15 🎯" };
        } else if (newCount === 10) {
            return { count: newCount, message: "Wow, 10 la gaaray! 🎉" };
        } else {
            return { count: newCount, message: "Waxaad kor u qaaday tirada ✅" };
        }
    }
    else if (action.type === "decrement") {
        const newCount = state.count - 1;

        if (newCount < 0) {
            return { count: 0, message: "Count ma yaraado 0! ❌" };
        } else {
            return { count: newCount, message: "Waxaad dhimisay tirada 📉" };
        }
    }
    else if (action.type === "reset") {
        return { count: 0, message: "Dib ayaa loo celiyay 🔄" };
    }
    else if (action.type === "clearMessage") {
        return { ...state, message: "" };
    }
    return state;
}

const UseReducer2 = () => {
    const [state, dispatch] = useReducer(myReducer, { count: 0, message: "Bilowga tirinta" });

    useEffect(() => {
        if (state.message !== "") {
            const timer = setTimeout(() => {
                dispatch({ type: "clearMessage" });
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [state.message]);

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200">
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm w-full">
                <h1 className="text-5xl font-bold text-purple-700 mb-4">
                    {state.count}
                </h1>
                {state.message && (
                    <p className="text-lg text-gray-700 mb-6">{state.message}</p>
                )}
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => dispatch({ type: "increment" })}
                        className="px-5 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
                    >
                        +
                    </button>
                    <button
                        onClick={() => dispatch({ type: "decrement" })}
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
        </div>
    );
};

export default UseReducer2;
