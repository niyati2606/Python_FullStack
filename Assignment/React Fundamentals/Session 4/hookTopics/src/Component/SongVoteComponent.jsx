import React, { useState } from "react";

function SongVoteComponent() {
    const [votes, setVotes] = useState(0);

    const upVote = () => {
        setVotes(votes + 1);
    };

    const downVote = () => {
        if (votes > 0) {
            setVotes(votes - 1);
        }
    };

    return (
        <div>
            <h3  className="m-4">Spotify playlist</h3>
        <div
            className="card shadow-sm p-3 m-4"
            style={{ width: "fit-content" }}
        >

            <div className="d-flex align-items-center">

                {/* Song Image */}
                <img
                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
                    alt="Song"
                    className="rounded"
                    style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover"
                    }}
                />
                <div className="ms-3 flex-grow-1">
                    <h5 className="mb-1">Blinding Lights</h5>

                    <p className="text-muted mb-2">
                        The Weeknd
                    </p>

                    <div className="d-flex align-items-center">

                        {/* Up Vote */}
                        <button
                            className="btn btn-outline-success btn-sm"
                            onClick={upVote}
                        >
                            ▲
                        </button>

                        <span className="fw-bold mx-3">
                            {votes}
                        </span>

                        <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={downVote}
                        >
                            ▼
                        </button>

                    </div>
                </div>

            </div>
        </div>
        </div>
    );
}

export default SongVoteComponent;