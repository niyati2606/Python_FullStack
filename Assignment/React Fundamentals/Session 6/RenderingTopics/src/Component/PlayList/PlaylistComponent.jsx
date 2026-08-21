import React from 'react'

function PlaylistComponent({ songs }) {
    return (
        <div className="container">
            <ul className="list-group">
                {songs.map((song, index) => (
                    <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        <div>
                            <strong>{song.title}</strong>
                            <div className="text-muted">{song.artist}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PlaylistComponent