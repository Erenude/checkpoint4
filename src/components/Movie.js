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
        <CardImgOverlay>
          <CardTitle
            style={{
              fontSize: "2em"
            }}
          >
            {name}
          </CardTitle>
          <CardText
            style={{
              fontSize: "1.5em"
            }}
          >
            {description}
          </CardText>
        </CardImgOverlay>
        <CardFooter />
      </Card>
    </div>
  )
}

export default Movie
