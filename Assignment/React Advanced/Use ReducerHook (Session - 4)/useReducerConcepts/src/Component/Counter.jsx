import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return state + 1;

        case "decrement":
            return state - 1;

        case "reset":
            return 0;

        default:
            return state;
    }
}

function Counter() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div className="container mt-5 text-center">
            <h2>Counter: {count}</h2>

            <button
                className="btn btn-success m-2"
                onClick={() => dispatch({ type: "increment" })}
            >
                Increment
            </button>

            <button
                className="btn btn-danger m-2"
                onClick={() => dispatch({ type: "decrement" })}
            >
                Decrement
            </button>

            <button
                className="btn btn-secondary m-2"
                onClick={() => dispatch({ type: "reset" })}
            >
                Reset
            </button>
        </div>
    );
}

export default Counter;