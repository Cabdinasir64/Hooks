import { useState } from "react";

function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => {
        if (prev - 1 < 0) {
            alert("Count cannot be negative");
            return prev;
        }
        return prev - 1;
    });
    const reset = () => setCount(0);

    return { count, increment, decrement, reset };
}

export default useCounter;
