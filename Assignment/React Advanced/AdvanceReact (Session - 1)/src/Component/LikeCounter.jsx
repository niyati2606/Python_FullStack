import React, { useState } from 'react'

function LikeCounter() {

    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <div className="card shadow-sm p-4 text-center col-2 m-4">
            <p className="fs-5">
                ❤️ {likes} Likes
            </p>

            <button
                className="btn btn-danger"
                onClick={handleLike}
            >
                Like
            </button>
        </div>
    )
}

export default LikeCounter