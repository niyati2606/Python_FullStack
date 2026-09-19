import React, { useReducer, useState } from 'react'
import PlaylistReducer from './playlistReducer';
import SongItem from './SongItem';

function MainComponent() {
    const initialSongs = [
        { id: 1, name: "Blinding Lights" },
        { id: 2, name: "Shape of You" },
        { id: 3, name: "Perfect" }
    ];

    const [songs, dispatch] = useReducer(
        PlaylistReducer,
        initialSongs
    );

    const [newSong, setNewSong] = useState("");

    const handleAddSong = () => {
        if (newSong.trim() === "") {
            return;
        }

        dispatch({
            type: "ADD_SONG",
            payload: {
                id: Date.now(),
                name: newSong
            }
        });

        setNewSong("");
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "700px" }}>
            <div className="card shadow">
                <div className="card-body">

                    <h2 className="text-center mb-4">
                        🎵 My Spotify Playlist
                    </h2>

                    {/* Add Song */}
                    <div className="input-group mb-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter song name"
                            value={newSong}
                            onChange={(e) => setNewSong(e.target.value)}
                        />

                        <button
                            className="btn btn-success"
                            onClick={handleAddSong}
                        >
                            Add
                        </button>
                    </div>

                    {/* Song List */}
                    <h5>My Songs</h5>

                    {songs.length === 0 ? (
                        <p className="text-muted">
                            No songs in playlist.
                        </p>
                    ) : (
                        songs.map(song => (
                            <SongItem
                                key={song.id}
                                song={song}
                                dispatch={dispatch}
                            />
                        ))
                    )}

                </div>
            </div>
        </div>
    );
}

export default MainComponent