import React, { useState } from 'react'

function useLikeButton(initialLikes) {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(initialLikes);

    const toggleLike = () => {
        if (liked) {
            setLiked(false);
            setLikeCount(likeCount - 1);
        } else {
            setLiked(true);
            setLikeCount(likeCount + 1);
        }
    };

    return {
        liked,
        likeCount,
        toggleLike
    };
}

export default useLikeButton