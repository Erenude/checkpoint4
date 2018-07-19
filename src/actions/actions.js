export const REMOVE_MOVIE = "REMOVE_MOVIE"

export const makeRemoveMovieAction = movieId => ({
  type: REMOVE_MOVIE,
  movieId
})
