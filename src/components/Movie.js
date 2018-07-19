import React from "react"
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  CardFooter,
  Button
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
          <Button outline color="danger" value="delete">
            Poubelle
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Movie
