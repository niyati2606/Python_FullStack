import React, { useState } from "react";

function PlaylistAdderComponent() {

    const [song, setSong] = useState({
        songName: "",
        artist: ""
    });

    const [playlist, setPlaylist] = useState([]);

    const handleSubmit = () => {
     
        if (song.songName === "" || song.artist === "") {
            alert("Please enter song name and artist");
            return;
        }

        setPlaylist([...playlist, song]);

        // Clear input fields
        setSong({
            songName: "",
            artist: ""
        });
    };

    return (
        <div className="container mt-5">

            <div className="row">

                <div className="col-md-6 mx-auto">

                    <div className="card shadow p-4">

                        <h3 className="mb-4">
                             Add Song to Playlist
                        </h3>

                        <form onSubmit={handleSubmit}>

                            {/* Song Name */}
                            <div className="mb-3">
                                <label className="form-label">
                                    Song Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter song name"
                                    value={song.songName}
                                    onChange={(event) =>
                                        setSong({
                                            ...song,
                                            songName: event.target.value
                                        })
                                    }
                                />
                            </div>

                            {/* Artist */}
                            <div className="mb-3">
                                <label className="form-label">
                                    Artist
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter artist name"
                                    value={song.artist}
                                    onChange={(event) =>
                                        setSong({
                                            ...song,
                                            artist: event.target.value
                                        })
                                    }
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-success w-100"
                            >
                                + Add to Playlist
                            </button>

                        </form>

                    </div>

                    {/* Playlist */}
                    <div className="mt-4">

                        <h4> My Playlist</h4>

                        {playlist.length === 0 ? (
                            <p className="text-muted">
                                No songs added yet.
                            </p>
                        ) : (
                            playlist.map((item, index) => (
                                <div
                                    className="card mb-2"
                                    key={index}
                                >
                                    <div className="card-body d-flex justify-content-between align-items-center">

                                        <div>
                                            <h6 className="mb-1">
                                                {item.songName}
                                            </h6>

                                            <small className="text-muted">
                                                {item.artist}
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default PlaylistAdderComponent;