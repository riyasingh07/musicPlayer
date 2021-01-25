import React from "react";
import { Row, Col, CardDeck, Container } from "react-bootstrap";

import Cards from "./Cards";
function CardSet() {
  return (
    <div>
      <Container className="cardContainer">
        <Row className="justify-content-md-center">
          <Col xs lg="2"></Col>
          <Col md="auto">
            <CardDeck>
              <Cards />

              <Cards />

              <Cards />
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
              <Cards />

              <Cards />

              <Cards />
            </CardDeck>
          </Col>
          <Col xs lg="2"></Col>
        </Row>
      </Container>
    </div>
  );
}
export default CardSet;
