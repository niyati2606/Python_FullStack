import React, {
    createContext,
    useReducer
} from "react";

export const CartContext = createContext();

const initialState = {
    cart: []
};

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(
                    (item) => item.id !== action.payload
                )
            };

        case "CLEAR_CART":
            return {
                ...state,
                cart: []
            };

        default:
            return state;
    }
}

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(
        cartReducer,
        initialState
    );

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}