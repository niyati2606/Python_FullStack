import React from 'react'
import PlaylistCard from './PlaylistCard'

function MainCard() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Playlist</h2>

      <div className="row">
        <div className="col-md-4">
          <PlaylistCard
            songName="Blinding Lights"
            artist="The Weeknd"
          />
        </div>

        <div className="col-md-4">
          <PlaylistCard
            songName="Shape of You"
            artist="Ed Sheeran"
          />
        </div>

        <div className="col-md-4">
          <PlaylistCard
            songName="Perfect"
            artist="Ed Sheeran"
          />
        </div>
      </div>
    </div>
  );
}


export default MainCard