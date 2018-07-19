import { REMOVE_MOVIE } from "../actions/actions"

const initialState = []

const movieReducer = (prevState = initialState, action) => {
  if (action.type === REMOVE_MOVIE) {
    return prevState.filter(movie => action.movieId !== movie.id)
  }
  return prevState
}

export default movieReducer
