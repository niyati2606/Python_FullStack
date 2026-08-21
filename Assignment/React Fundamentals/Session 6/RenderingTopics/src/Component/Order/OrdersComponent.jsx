import React from 'react'
import OrderStatusComponent from './OrderStatusComponent'

function OrdersComponent() {
    return (
        <div>

            <h2 className="my-3" style={{textAlign :"center"}}>Order Status</h2>
            <OrderStatusComponent isDelivered={true} />
            <OrderStatusComponent isDelivered={false} />
        </div>
    )
}

export default OrdersComponent