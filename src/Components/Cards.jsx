import React from 'react';
import { Card, } from 'react-bootstrap';

export default function Cards(props) {
  return (
      <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.artist}
            </Card.Text>
        </Card.Body>
          <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
      </Card>
  );
}