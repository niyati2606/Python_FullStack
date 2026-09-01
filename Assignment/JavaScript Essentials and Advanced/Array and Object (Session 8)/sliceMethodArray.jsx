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

// Remove the second playlist and insert a new one
playlists.splice(1, 1, {
  name: "Bollywood Beats",
  numberOfSongs: 45,
  genre: "Bollywood"
});

console.log(playlists);