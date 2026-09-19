import React from "react";
import useTrendingMovies from "../CustomHooks/useTrendingMovies";

function MoviesList() {
  const { loading, error, data } = useTrendingMovies();

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-danger"></div>
        <p className="mt-2">Loading movies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">
          🎬 Movie Collection
        </h1>

        <p className="text-muted">
          Explore your favorite movies
        </p>
      </div>

      {/* Movie Cards */}
      <div className="row g-4">

        {data.map((movie) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3"
            key={movie.imdbID}
          >
            <div className="card border-0 shadow h-100">

              {/* Poster */}
              <img
                src={movie.Poster}
                className="card-img-top"
                alt={movie.Title}
                style={{
                  height: "380px",
                  objectFit: "cover"
                }}
              />

              {/* Details */}
              <div className="card-body d-flex flex-column">

                <h5 className="card-title fw-bold">
                  {movie.Title}
                </h5>

                <div className="mb-3">
                  <span className="badge bg-dark me-2">
                    {movie.Year}
                  </span>

                  <span className="badge bg-danger">
                    {movie.Type}
                  </span>
                </div>

                <button className="btn btn-outline-danger mt-auto">
                  View Details
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default MoviesList;