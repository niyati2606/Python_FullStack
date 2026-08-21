import React from 'react'

function OrderStatusComponent({ isDelivered }) {
    return (
        <div>
            <div className="container mt-4">
                <div className="card shadow-sm p-4 text-center">
                    <div className={isDelivered ? "alert alert-success" : "alert alert-warning"}>
                        {isDelivered
                            ? 'Order Delivered 🎉'
                            : 'Order on the way 🚚'}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderStatusComponent