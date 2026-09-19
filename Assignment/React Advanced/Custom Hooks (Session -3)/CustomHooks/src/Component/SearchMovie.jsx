import React, { useState } from 'react'
import useSearchMovies from '../Custom Hooks/useSearchMovies';

function SearchMovie() {
    const [query, setQuery] = useState("batman");
    const { movies, loading, error } = useSearchMovies(query);

    return (
        <div className="container py-4">
            <h1 className="mb-4 text-center">Movie Search</h1>

            <div className="row justify-content-center mb-4">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search movies..."
                    />
                </div>
            </div>

            {loading && (
                <div className="d-flex justify-content-center my-4">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            {error && (
                <div className="alert alert-danger text-center" role="alert">
                    {error}
                </div>
            )}

            {!loading && !error && (
                <div className="row g-4">
                    {movies?.map((m) => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={m.imdbID}>
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={m.Poster !== "N/A" ? m.Poster : "https://via.placeholder.com/300x445?text=No+Poster"}
                                    className="card-img-top"
                                    alt={m.Title}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{m.Title}</h5>
                                    <p className="card-text text-muted">{m.Year}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchMovie