import React from 'react'
import PlaylistComponent from './PlaylistComponent';

function PlaylistListComponent() {

    const songs = [
        { title: "Kesariya", artist: "Arijit Singh" },
        { title: "Apna Bana Le", artist: "Arijit Singh" },
        { title: "Chaleya", artist: "Arijit Singh, Shilpa Rao" },
        { title: "Raataan Lambiyan", artist: "Jubin Nautiyal, Asees Kaur" },
        { title: "Agar Tum Saath Ho", artist: "Alka Yagnik, Arijit Singh" },
        { title: "Tera Ban Jaunga", artist: "Akhil Sachdeva, Tulsi Kumar" }
    ];

    return (
        <div className="container mt-4">
            <h3 className="mb-3">My Playlist</h3>
            <PlaylistComponent songs={songs} />
        </div>
    )
}

export default PlaylistListComponent