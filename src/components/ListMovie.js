import React from "react"
// Component
import Movie from "./Movie"
import { Row, Col } from "reactstrap"

export default class ListMovie extends React.Component {
  render() {
    return (
      <Row>
        <Col lg="4" className="text-center mb-3">
          <Movie
            name="Ant-Man et la Guêpe"
            description="Un film avec une fourmi et une guêpe"
            image="http://fr.web.img5.acsta.net/r_1920_1080/pictures/18/06/08/14/35/0842353.jpg"
          />
        </Col>
        <Col lg="4" className="text-center mb-3">
          <Movie
            name="Thor Ragnarok"
            description="Un film avec des éclairs et une gelée verte"
            image="http://fr.web.img3.acsta.net/r_1920_1080/pictures/17/08/24/17/34/098917.jpg"
          />
        </Col>
        <Col lg="4" className="text-center mb-3">
          <Movie
            name="Black Panther"
            description="Un film avec des gros chats noir"
            image="http://fr.web.img2.acsta.net/r_1920_1080/pictures/17/10/16/15/40/0883250.jpg"
          />
        </Col>
      </Row>
    )
  }
}
