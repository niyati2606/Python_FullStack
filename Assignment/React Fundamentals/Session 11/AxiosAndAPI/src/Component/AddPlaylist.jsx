import React, { useState } from "react";
import axios from "axios";

function AddPlaylist() {
    const [playlistName, setPlaylistName] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("https://jsonplaceholder.typicode.com/posts", {
                title: playlistName,
                body: description
            })
            .then(() => {
                setMessage("Playlist added successfully!");
                setPlaylistName("");
                setDescription("");
            })
            .catch(() => {
                setMessage("Failed to add playlist");
            });
    };

    return (
        <div className="container mt-4">
            <div className="card shadow-sm">
                <div className="card-header bg-success text-white">
                    <h3 className="mb-0">Add Playlist</h3>
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">
                                Playlist Name
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                value={playlistName}
                                onChange={(e) =>
                                    setPlaylistName(e.target.value)
                                }
                                placeholder="Enter playlist name"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Description
                            </label>

                            <textarea
                                className="form-control"
                                value={description}
                                onChange={(e) =>
                                    setDescription(e.target.value)
                                }
                                placeholder="Enter description"
                                rows="3"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-success"
                        >
                            Add Playlist
                        </button>
                    </form>

                    {message && (
                        <div className="alert alert-success mt-3">
                            {message}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AddPlaylist;