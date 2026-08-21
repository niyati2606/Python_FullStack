import React, { useEffect, useState } from "react";
import axios from "axios";

function MovieListComponent() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setMovies(response.data.slice(0, 5));
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to fetch movies");
                setLoading(false);
            });
    }, []);

    return (
        <div className="container mt-4">
            <div className="card shadow-sm">
                <div className="card-header bg-primary text-white">
                    <h3 className="mb-0">Trending Movies</h3>
                </div>

                <div className="card-body">
                    {loading && (
                        <div className="alert alert-info">
                            Loading...
                        </div>
                    )}

                    {error && (
                        <div className="alert alert-danger">
                            {error}
                        </div>
                    )}

                    {!loading && !error && (
                        <div className="list-group">
                            {movies.map((movie) => (
                                <div
                                    key={movie.id}
                                    className="list-group-item"
                                >
                                    {movie.title}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MovieListComponent;