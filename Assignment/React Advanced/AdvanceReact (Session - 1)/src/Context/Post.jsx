import React from 'react'
import LikeButton from './LikeButton'

function Post() {
    return (
        <div className="card p-3">
            <h4>My Instagram Post</h4>

            <p>Beautiful day! 📸</p>

            <LikeButton />
        </div>
    )
}

export default Post