import React, { useState } from "react";

function LikeButton({ onLike }) {
  const [likeCount, setLikeCount] = useState(0);

  console.log("LikeButton re-rendered");

  const handleLike = () => {
    setLikeCount((prevCount) => prevCount + 1);
    onLike();
  };

  return (
    <div className="mt-2">
      <span className="me-2">❤️ {likeCount}</span>

      <button
        className="btn btn-sm btn-outline-danger"
        onClick={handleLike}
      >
        Like
      </button>
    </div>
  );
}

export default LikeButton;
