const playlists = [
  {
    name: "Top Hits",
    creator: "Spotify",
    numberOfSongs: 50
  },
  {
    name: "Chill Vibes",
    creator: "Aarya",
    numberOfSongs: 30
  },
  {
    name: "Workout Mix",
    creator: "Rahul",
    numberOfSongs: 40
  }
];
console.log("Old Playlist : ", playlists)

playlists.pop()

console.log("New Playlist : ", playlists);