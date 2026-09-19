import React, { useState } from "react";

function SongItem({ song, dispatch }) {
    const [isEditing, setIsEditing] = useState(false);
    const [songName, setSongName] = useState(song.name);

    const handleSave = () => {
        dispatch({
            type: "EDIT_SONG",
            payload: {
                id: song.id,
                name: songName
            }
        });

        setIsEditing(false);
    };

    return (
        <div className="d-flex align-items-center justify-content-between mb-2 p-3 border rounded">
            {isEditing ? (
                <div className="d-flex gap-2">
                    <input
                        type="text"
                        className="form-control"
                        value={songName}
                        onChange={(e) => setSongName(e.target.value)}
                    />

                    <button
                        className="btn btn-success"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>
            ) : (
                <>
                    <span className="fw-bold">
                        🎵 {song.name}
                    </span>

                    <div>
                        <button
                            className="btn btn-warning btn-sm me-2"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit
                        </button>

                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() =>
                                dispatch({
                                    type: "REMOVE_SONG",
                                    payload: song.id
                                })
                            }
                        >
                            Delete
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default SongItem;