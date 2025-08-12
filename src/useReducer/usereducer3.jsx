import React, { useReducer } from "react";

const initialState = {
    name: "",
    email: "",
    age: "",
    birthday: "",
    errors: {}
};

function formReducer(state, action) {
    switch (action.type) {
        case "ADDNewDate": {
            const { field, value } = action.payload;
            let errors = { ...state.errors };

            // Validation waqtiga dhabta ah
            if (field === "name") {
                if (!value.trim()) errors.name = "Magaca lama haayo!";
                else if (value.trim().length < 3) errors.name = "Magaca waa inuu ka weyn yahay 2 xaraf!";
                else delete errors.name;
            }

            if (field === "email") {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) errors.email = "Email sax ah geli!";
                else delete errors.email;
            }

            if (field === "age") {
                const num = Number(value);
                if (!num || num <= 0) errors.age = "Da'da sax geli!";
                else delete errors.age;
            }

            if (field === "birthday") {
                if (!value) errors.birthday = "Taariikh geli!";
                else delete errors.birthday;
            }

            return {
                ...state,
                [field]: value,
                errors
            };
        }

        case "RESET":
            return initialState;

        default:
            return state;
    }
}

const UseReducer3 = () => {
    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleChange = (e) => {
        dispatch({
            type: "ADDNewDate",
            payload: { field: e.target.name, value: e.target.value }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(state.errors).length === 0 &&
            state.name && state.email && state.age && state.birthday) {
            alert("Form-ka waa la gudbiyay ✅");
            dispatch({ type: "RESET" });
        } else {
            alert("Fadlan xog gali ❌");
        }
    };

    const inputClass = (field) =>
        `w-full p-2 border rounded-md focus:outline-none ${state.errors[field]
            ? "border-red-500 focus:ring-2 focus:ring-red-300"
            : state[field]
                ? "border-green-500 focus:ring-2 focus:ring-green-300"
                : "border-gray-300 focus:ring-2 focus:ring-blue-300"
        }`;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-4"
            >
                <h1 className="text-2xl font-bold text-center text-purple-700 mb-4">
                    Foomka Isticmaalaha
                </h1>

                {/* Name */}
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Magaca"
                        value={state.name}
                        onChange={handleChange}
                        className={inputClass("name")}
                    />
                    {state.errors.name && (
                        <p className="text-red-500 text-sm mt-1">{state.errors.name}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={state.email}
                        onChange={handleChange}
                        className={inputClass("email")}
                    />
                    {state.errors.email && (
                        <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>
                    )}
                </div>

                {/* Age */}
                <div>
                    <input
                        type="number"
                        name="age"
                        placeholder="Da'da"
                        value={state.age}
                        onChange={handleChange}
                        className={inputClass("age")}
                    />
                    {state.errors.age && (
                        <p className="text-red-500 text-sm mt-1">{state.errors.age}</p>
                    )}
                </div>

                {/* Birthday */}
                <div>
                    <input
                        type="date"
                        name="birthday"
                        value={state.birthday}
                        onChange={handleChange}
                        className={inputClass("birthday")}
                    />
                    {state.errors.birthday && (
                        <p className="text-red-500 text-sm mt-1">{state.errors.birthday}</p>
                    )}
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                    >
                        Gudbi
                    </button>
                    <button
                        type="button"
                        onClick={() => dispatch({ type: "RESET" })}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
                    >
                        Nadiifi
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UseReducer3;
