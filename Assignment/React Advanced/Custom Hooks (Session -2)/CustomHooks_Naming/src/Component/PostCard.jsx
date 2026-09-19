import React from "react";
import useLikeButton from "../CustomHooks/useLikeButton";

function PostCard() {
    const { liked, likeCount, toggleLike } = useLikeButton(120);

    return (
        <div className="container mt-5">
            <div className="card shadow" style={{ maxWidth: "300px" }}>

                <img
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                    className="card-img-top"
                    alt="Instagram Post"
                    style={{ height: "200px" }}
                />

                <div className="card-body">

                    <h5 className="card-title">
                        Beautiful Day
                    </h5>

                    <p className="card-text">
                        Enjoying this beautiful view!
                    </p>

                    <p className="fw-bold">
                        ❤️{likeCount} likes
                    </p>

                    <button
                        onClick={toggleLike}
                        className={`btn ${liked ? "btn-danger" : "btn-outline-danger"
                            }`}
                    >
                        {liked ? "❤️ Liked" : "♡ Like"}
                    </button>

                </div>
            </div>
        </div>
    );
}

export default PostCard;