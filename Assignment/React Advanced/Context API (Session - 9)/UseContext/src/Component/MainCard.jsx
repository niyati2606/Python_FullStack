import React, { useContext } from "react";
import { FavoritesContext, FavoritesProvider } from "../Context/FavoritesContext";
import RestaurantCard from "./RestaurantCard";
import { UserProvider } from "../Context/UserContext";

function FavoritesCount() {
    const { state } = useContext(FavoritesContext);

    return (
        <div className="alert alert-success" style={{width : "400px"}}>
            ❤️ Favorite Restaurants:{" "}
            <strong>{state.favorites.length}</strong>

            <br />

            IDs: {state.favorites.join(", ") || "None"}
        </div>
    );
}

function MainCard() {
    return (
        <UserProvider>
            <FavoritesProvider>
                <div className="container mt-5">
                    <h1 className="text-danger mb-4">
                        Zomato Favorites
                    </h1>

                    <FavoritesCount />

                    <RestaurantCard
                        id={101}
                        name="The Spice House"
                        cuisine="North Indian"
                    />

                    <RestaurantCard
                        id={102}
                        name="Pizza Palace"
                        cuisine="Italian"
                    />

                    <RestaurantCard
                        id={103}
                        name="Burger Point"
                        cuisine="Fast Food"
                    />
                </div>
            </FavoritesProvider>
        </UserProvider>
    );
}

export default MainCard;