const movies = [
  {
    title: "Inception",
    year: 2010,
    rating: {
      imdb: 8.8,
      rottenTomatoes: 87
    }
  },
  {
    title: "Interstellar",
    year: 2014,
    rating: {
      imdb: 8.7,
      rottenTomatoes: 73
    }
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: {
      imdb: 9.0,
      rottenTomatoes: 94
    }
  }
];

for (let movie of movies) {
  console.log(movie.title + " - IMDb Rating: " + movie.rating.imdb);
}