import React, { useContext } from 'react'
import { UserContext } from './MainContext'

function LikeButton() {
    const user = useContext(UserContext)

    return (
        <div>
            <button className="btn btn-danger">
                ❤️ Like
            </button>

            <p className="mt-2">
                Liked by: <strong>{user.username}</strong>
            </p>
        </div>
    )
}

export default LikeButton