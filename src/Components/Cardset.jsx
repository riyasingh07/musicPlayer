import React from "react";
import { Row, Col, CardDeck, Container } from "react-bootstrap";

import songlist from "./Songlist";
import Cards from "./Cards";
function createEntry(songData) {
  return (
    <Cards
      key={songData.id}
      image={songData.img_src}
      title={songData.title}
      artist={songData.artist}
    />
  ); 
}

function CardSet() {
  return (
    <div>
      <Container className="cardContainer">
        <Row className="justify-content-md-center">
          <Col xs lg="2"></Col>
          <Col md="auto">
            <CardDeck>
              {songlist.map(createEntry)}
            </CardDeck>
          </Col>
          <Col xs lg="2"></Col>
        </Row>
      </Container>

      <Container className="cardContainer">
        <Row className="justify-content-md-center">
          <Col xs lg="2"></Col>
          <Col md="auto">
            <CardDeck>
            {songlist.map(createEntry)}
            </CardDeck>
          </Col>
          <Col xs lg="2"></Col>
        </Row>
      </Container>
    </div>
  );
}
export default CardSet;
