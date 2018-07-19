import React from "react"
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  CardFooter
} from "reactstrap"

const Movie = ({ name, description, image }) => {
  return (
    <div>
      <Card inverse>
        <CardImg width="25%" src={image} />
        <CardImgOverlay />
        <CardFooter>
          <CardTitle
            style={{
              fontSize: "2em",
              color: "black"
            }}
          >
            {name}
          </CardTitle>
          <CardText
            style={{
              fontSize: "1.5em",
              color: "black"
            }}
          >
            {description}
          </CardText>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Movie
