import React, { useContext } from "react";
import { FavoritesContext } from "../Context/FavoritesContext";
import { UserContext } from "../Context/UserContext";

function RestaurantCard({ id, name, cuisine }) {
    const user = useContext(UserContext);

    const { state, dispatch } =
        useContext(FavoritesContext);

    const isFavorite = state.favorites.includes(id);

    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch({
                type: "REMOVE_FAVORITE",
                payload: id
            });
        } else {
            dispatch({
                type: "ADD_FAVORITE",
                payload: id
            });
        }
    };

    return (
        <div className="card shadow-sm mb-3" style={{width : "400px"}}>
            <div className="card-body">
                <h4 className="card-title">{name}</h4>

                <p className="text-muted">{cuisine}</p>

                <p>
                    Welcome, <strong>{user.name}</strong>
                </p>

                <button
                    className={
                        isFavorite
                            ? "btn btn-danger"
                            : "btn btn-outline-danger"
                    }
                    onClick={toggleFavorite}
                >
                    {isFavorite
                        ? "❤️ Remove Favorite"
                        : "♡ Add Favorite"}
                </button>
            </div>
        </div>
    );
}

export default RestaurantCard;