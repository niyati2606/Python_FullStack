import { useCallback, useState } from "react";

function SongItem({ song, toggleFavorite }) {
    return (
        <div className="card mb-3 shadow-sm">
            <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                    <h5 className="card-title mb-1">
                        {song.name}
                    </h5>

                    <p className="card-text text-muted mb-0">
                        {song.artist}
                    </p>
                </div>

                <button
                    className={`btn ${
                        song.isFavorite
                            ? "btn-danger"
                            : "btn-outline-danger"
                    }`}
                    onClick={() => toggleFavorite(song.id)}
                >
                    {song.isFavorite ? "♥ Favorite" : "♡ Favorite"}
                </button>
            </div>
        </div>
    );
}

function PlaylistManager() {
    const [songs, setSongs] = useState([
        {
            id: 1,
            name: "Shape of You",
            artist: "Ed Sheeran",
            isFavorite: false
        },
        {
            id: 2,
            name: "Blinding Lights",
            artist: "The Weeknd",
            isFavorite: false
        },
        {
            id: 3,
            name: "Perfect",
            artist: "Ed Sheeran",
            isFavorite: false
        },
        {
            id: 4,
            name: "Believer",
            artist: "Imagine Dragons",
            isFavorite: false
        },
        {
            id: 5,
            name: "Levitating",
            artist: "Dua Lipa",
            isFavorite: false
        }
    ]);

    // Memoized favorite toggle function
    const toggleFavorite = useCallback((id) => {
        setSongs((previousSongs) =>
            previousSongs.map((song) =>
                song.id === id
                    ? {
                          ...song,
                          isFavorite: !song.isFavorite
                      }
                    : song
            )
        );
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">
                🎵 Playlist Manager
            </h2>

            <div className="row justify-content-center">
                <div className="col-md-8">
                    {songs.map((song) => (
                        <SongItem
                            key={song.id}
                            song={song}
                            toggleFavorite={toggleFavorite}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PlaylistManager;
