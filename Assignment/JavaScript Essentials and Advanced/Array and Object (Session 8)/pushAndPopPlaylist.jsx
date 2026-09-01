const playlists = [
  {
    name: "Top Hits",
    numberOfSongs: 50,
    genre: "Pop"
  },
  {
    name: "Chill Vibes",
    numberOfSongs: 30,
    genre: "Lo-fi"
  },
  {
    name: "Rock Classics",
    numberOfSongs: 40,
    genre: "Rock"
  }
];

// Original Playlist
console.log("Original Playlist : ",playlists)

// Add a new playlist using push()
playlists.push({
  name: "My Favorite Songs",
  numberOfSongs: 35,
  genre: "Bollywood"
});

console.log("After push():", playlists);

// Remove the last playlist using pop()
playlists.pop();

console.log("After pop():", playlists);