import React, { useRef, useState } from "react";

function AddToPlaylistComponent() {
    const [songName, setSongName] = useState("");
    const [playlist, setPlaylist] = useState([]);

    const inputRef = useRef(null);

    const handleAdd = () => {
        if (songName.trim() === "") {
            return;
        }

        setPlaylist([...playlist, songName]);

        setSongName("");

        // Focus input again
        inputRef.current.focus();
    };

    return (
        <div className="container mt-4" style={{ maxWidth: "500px" }}>
            <h2 className="mb-3">Add to Playlist</h2>

            <div className="input-group mb-3">
                <input
                    type="text"
                    ref={inputRef}
                    value={songName}
                    onChange={(e) => setSongName(e.target.value)}
                    className="form-control"
                    placeholder="Enter song name"
                />

            </div>
            <div>
                <button
                    className="btn btn-primary px-4"
                    onClick={handleAdd}
                >
                    Add
                </button>
            </div>

            <ul className="list-group mt-4">
                {playlist.map((song, index) => (
                    <li
                        key={index}
                        className="list-group-item"
                    >
                        {song}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AddToPlaylistComponent;