import React from 'react'
import CartComponent from './CartComponent'

function CartSummaryComponent() {

    const cartItems =
        [
            { name: "Laptop", price: 50000 },
            { name: "Mouse", price: 1000 },
            { name: "Keyboard", price: 2000 }
        ]

    const twoCartItems =
        [
            { name: "Laptop", price: 50000 },
            { name: "Keyboard", price: 2000 }
        ]

    return (
        <div>
            <CartComponent cartItems={[]} />
            <CartComponent cartItems={twoCartItems}/>
            <CartComponent cartItems={cartItems} />
        </div>
    )
}

export default CartSummaryComponent