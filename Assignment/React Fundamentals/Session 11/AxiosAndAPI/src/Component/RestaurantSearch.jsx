import React, { useEffect, useState } from "react";
import axios from "axios";

function RestaurantSearch() {
    const [restaurants, setRestaurants] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
            .get(
                "https://mocki.io/v1/570c5e5c-8c8b-4c1e-8c8b-4c1e8c8b4c1e"
            )
            .then((response) => {
                setRestaurants(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const filteredRestaurants = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <div className="card shadow-sm">
                <div className="card-header bg-warning">
                    <h3 className="mb-0">Restaurant Search</h3>
                </div>

                <div className="card-body">
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Search restaurant..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <div className="list-group">
                        {filteredRestaurants.map((restaurant) => (
                            <div
                                key={restaurant.id}
                                className="list-group-item"
                            >
                                🍴 {restaurant.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantSearch;