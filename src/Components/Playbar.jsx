import React from "react";
import { Form, Container, Button, Col, Row } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faPause, faForward, faBackward} from '@fortawesome/free-solid-svg-icons';

function Playbar() {
  return (
    <Container fluid fixed="bottom" className="slidecontainer">
      <Form>
        <Form.Group controlId="formBasicRange">
          <Form.Label className="songName">Song Name</Form.Label>
          <p className="timer">00.00/00.00</p>
          <Form.Control type="range" className="slider" />
          <Container>
            <Row>
              <Col>
                {" "}
                <button className="skip-btn" >
                  <FontAwesomeIcon icon={faBackward}/>
                </button>
              </Col>
              <Col>
                {" "}
                <button className="play-btn" >
                  <FontAwesomeIcon icon={faPlay}/>
                </button>
              </Col>
              <Col>
                {" "}
                <button className="skip-btn" >
                  <FontAwesomeIcon icon={faForward}/>
              </button>
              </Col>{" "}
            </Row>{" "}
          </Container>
        </Form.Group>
      </Form>
    </Container>
  );
}
export default Playbar;
