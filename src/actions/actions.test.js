import { REMOVE_MOVIE, makeRemoveMovieAction } from "./actions"

describe("action remove movie creator", () => {
  it("should return a REMOVE_MOVIE action with movie id", () => {
    const expected = {
      type: REMOVE_MOVIE,
      movieId: 2
    }
    expect(makeRemoveMovieAction(2)).toEqual(expected)
  })
})
