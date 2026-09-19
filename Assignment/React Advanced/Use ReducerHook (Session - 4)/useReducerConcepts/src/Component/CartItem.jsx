import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return state + 1;

        case "decrement":
            return state > 1 ? state - 1 : 1;

        case "reset":
            return 1;

        default:
            return state;
    }
}

function CartItem() {
    const [quantity, dispatch] = useReducer(reducer, 1);

    return (
        <div className="container mt-5">
            <div className="card shadow mx-auto" style={{ maxWidth: "450px" }}>
                <div className="card-body text-center">

                    <h3 className="mb-3">🛒 Flipkart Cart</h3>

                    <h5 className="mb-3">Wireless Headphones</h5>

                    <p className="text-muted">
                        Quantity: <strong>{quantity}</strong>
                    </p>

                    <div className="d-flex justify-content-center gap-2">

                        <button
                            className="btn btn-success"
                            onClick={() =>
                                dispatch({ type: "increment" })
                            }
                        >
                            +
                        </button>

                        <button
                            className="btn btn-danger"
                            onClick={() =>
                                dispatch({ type: "decrement" })
                            }
                            disabled={quantity === 1}
                        >
                            -
                        </button>

                        <button
                            className="btn btn-secondary"
                            onClick={() =>
                                dispatch({ type: "reset" })
                            }
                        >
                            Reset
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default CartItem;