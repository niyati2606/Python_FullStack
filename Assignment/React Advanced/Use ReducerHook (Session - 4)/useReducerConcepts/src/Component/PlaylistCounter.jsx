import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return state + 1;

        case "decrement":
            return state > 0 ? state - 1 : 0;

        case "reset":
            return 0;

        default:
            return state;
    }
}

function PlaylistCounter() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div className="container mt-5">
            <div className="card shadow p-4 text-center" style={{ maxWidth: "400px" }}>
                <h2 className="mb-3">🎵 Playlist Counter</h2>

                <h1 className="display-4 mb-4">
                    {count}
                </h1>

                <p className="text-muted">
                    Number of songs in playlist
                </p>

                <div className="d-flex justify-content-center gap-2">
                    <button
                        className="btn btn-success"
                        onClick={() => dispatch({ type: "increment" })}
                    >
                        + Add Song
                    </button>

                    <button
                        className="btn btn-danger"
                        onClick={() => dispatch({ type: "decrement" })}
                        disabled={count === 0}
                    >
                        - Remove Song
                    </button>

                    <button
                        className="btn btn-secondary"
                        onClick={() => dispatch({ type: "reset" })}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PlaylistCounter;