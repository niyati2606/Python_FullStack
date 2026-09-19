import React, {
    createContext,
    useReducer
} from "react";

export const FavoritesContext = createContext();

const initialState = {
    favorites: []
};

function favoritesReducer(state, action) {
    switch (action.type) {
        case "ADD_FAVORITE":
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };

        case "REMOVE_FAVORITE":
            return {
                ...state,
                favorites: state.favorites.filter(
                    (id) => id !== action.payload
                )
            };

        default:
            return state;
    }
}

export function FavoritesProvider({ children }) {
    const [state, dispatch] = useReducer(
        favoritesReducer,
        initialState
    );

    return (
        <FavoritesContext.Provider value={{ state, dispatch }}>
            {children}
        </FavoritesContext.Provider>
    );
}