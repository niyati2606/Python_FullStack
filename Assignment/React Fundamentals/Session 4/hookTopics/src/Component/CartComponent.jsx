import React, { useState } from "react";

function CartComponent() {

    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="container mt-5">

            <div
                className="card shadow-sm border-0"
                style={{
                    maxWidth: "700px",
                    borderRadius: "12px"
                }} >
                <div className="card-body p-4">

                    <div className="row align-items-center">

                        {/* Product Image */}
                        <div className="col-md-3 text-center">

                            <img
                                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                                alt="Wireless Headphones"
                                className="img-fluid rounded"
                                style={{
                                    width: "150px",
                                    height: "150px",
                                    objectFit: "cover"
                                }}
                            />

                        </div>

                        {/* Product Details */}
                        <div className="col-md-9">

                            <h5 className="fw-bold mb-2">
                                Wireless Bluetooth Headphones
                            </h5>

                            <p className="text-muted mb-2">
                                Wireless headphones with noise cancellation
                            </p>

                            {/* Price */}
                            <div className="mt-3">

                                <span className="fs-4 fw-bold">
                                    ₹1,999
                                </span>

                            </div>

                            {/* Quantity */}
                            <div className="d-flex align-items-center mt-4">

                                <span className="me-3 fw-semibold">
                                    Quantity:
                                </span>

                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={decreaseQuantity}
                                >
                                    −
                                </button>

                                <span
                                    className="border px-4 py-2 fw-bold"
                                >
                                    {quantity}
                                </span>

                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={increaseQuantity}
                                >
                                    +
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default CartComponent;