import React from "react";
import {Container, Row,Col} from "react-bootstrap";

export default function Footnote() {
  return (
    <footer className="foot">
      <Container className="footContainer">
        <Row className="justify-content-md-center">
          <Col xs lg="2"></Col>
          <Col md="auto">
            Made with love hue hue hueee
          </Col>
          <Col xs lg="2"></Col>
        </Row>
      </Container>
  </footer>
  );
};