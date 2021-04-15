import { useState } from "react";

export const useCouter = (initialState = 10) => {
    const [counter, setCounter] = useState(initialState);
    const increment = ( a=1 ) => {
        setCounter(counter + a);
    };
    const decrement = ( a=1 ) => {
        setCounter(counter - a);
    };
    const reset = () => {
        setCounter(initialState);
    };
    const set = (a) => {
        setCounter(a);
    }

    return {
        counter,
        increment,
        decrement,
        reset,
        set
    };
}