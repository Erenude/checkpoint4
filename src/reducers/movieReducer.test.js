import { makeRemoveMovieAction } from "../actions/actions"
import movieReducer from "./movieReducer"

describe("movieReducer", () => {
  it("should not change the state for unhanfled action", () => {
    const prevState = [
      {
        id: 1,
        name: "Ant-Man et la Guêpe",
        description: "Un film avec une fourmi et une guêpe",
        image:
          "http://fr.web.img5.acsta.net/r_1920_1080/pictures/18/06/08/14/35/0842353.jpg"
      },
      {
        id: 2,
        name: "Thor Ragnarok",
        description: "Un film avec des éclairs et une gelée verte",
        image:
          "http://fr.web.img3.acsta.net/r_1920_1080/pictures/17/08/24/17/34/098917.jpg"
      },
      {
        id: 3,
        name: "Black Panther",
        description: "Un film avec des gros chats noir",
        image:
          "http://fr.web.img2.acsta.net/r_1920_1080/pictures/17/10/16/15/40/0883250.jpg"
      }
    ]
    const anyAction = {
      type: "ANY_ACTION"
    }
    expect(movieReducer(prevState, anyAction)).toEqual(prevState)
  })
  it("should remove a movie from the list", () => {
    const prevState = [
      {
        id: 1,
        name: "Ant-Man et la Guêpe",
        description: "Un film avec une fourmi et une guêpe",
        image:
          "http://fr.web.img5.acsta.net/r_1920_1080/pictures/18/06/08/14/35/0842353.jpg"
      },
      {
        id: 2,
        name: "Thor Ragnarok",
        description: "Un film avec des éclairs et une gelée verte",
        image:
          "http://fr.web.img3.acsta.net/r_1920_1080/pictures/17/08/24/17/34/098917.jpg"
      },
      {
        id: 3,
        name: "Black Panther",
        description: "Un film avec des gros chats noir",
        image:
          "http://fr.web.img2.acsta.net/r_1920_1080/pictures/17/10/16/15/40/0883250.jpg"
      }
    ]
    const expected = [
      {
        id: 1,
        name: "Ant-Man et la Guêpe",
        description: "Un film avec une fourmi et une guêpe",
        image:
          "http://fr.web.img5.acsta.net/r_1920_1080/pictures/18/06/08/14/35/0842353.jpg"
      },
      {
        id: 2,
        name: "Thor Ragnarok",
        description: "Un film avec des éclairs et une gelée verte",
        image:
          "http://fr.web.img3.acsta.net/r_1920_1080/pictures/17/08/24/17/34/098917.jpg"
      }
    ]
    const removeBlackPantherAction = makeRemoveMovieAction(3)
    expect(movieReducer(prevState, removeBlackPantherAction)).toEqual(expected)
  })
})
