import React, { useEffect, useState } from "react";

function TrendingSongs() {
    const [songs, setSongs] = useState([]);
    const [error, setError] = useState(false);

    const fetchSongs = async () => {
        try {
            setError(false);

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const data = await response.json();

            setSongs(data.slice(0, 3));
        } catch (error) {
            setError(true);
            setSongs([]);
        }
    };

    useEffect(() => {
        fetchSongs();
    }, []);

    return (
        <div className="container mt-4">
            <div className="card shadow">
                <div className="card-header bg-primary text-white">
                    <h3>Trending Songs</h3>
                </div>

                <div className="card-body">
                    {error ? (
                        <div>
                            <div className="alert alert-danger">
                                Error loading data
                            </div>

                            <button
                                className="btn btn-primary"
                                onClick={fetchSongs}
                            >
                                Reload
                            </button>
                        </div>
                    ) : (
                        <div className="list-group">
                            {songs.map((song) => (
                                <div
                                    key={song.id}
                                    className="list-group-item"
                                >
                                    {song.title}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TrendingSongs;