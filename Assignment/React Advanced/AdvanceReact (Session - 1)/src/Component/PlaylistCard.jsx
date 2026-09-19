import React from 'react'

function PlaylistCard({songName, artist}) {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <h5 className="card-title">{songName}</h5>
        <p className="card-text text-muted">
          Artist: {artist}
        </p>
        
      </div>
    </div>
  )
}

export default PlaylistCard