import React from 'react'

function CartComponent({ cartItems }) {
    return (
        <div className="container mt-4">
            <div className="card p-4 shadow-sm" style={{ width: "400px" }}>
                <h2 className="mb-3">Cart Summary</h2>

                {cartItems.length === 0 ? (
                    <p className="text-muted">Cart is empty</p>
                ) : (
                    <ul className="list-group mb-3">
                        {cartItems.map((item, index) => (
                            <li
                                className="list-group-item d-flex justify-content-between"
                                key={index}
                            >
                                <span>{item.name}</span>
                                <strong>₹{item.price}</strong>
                            </li>
                        ))}
                    </ul>
                )}

                {cartItems.length >= 3 && (
                    <button className="btn btn-success">
                        Checkout Now
                    </button>
                )}
            </div>
        </div>
    )
}

export default CartComponent