import React from 'react';
import { Card } from 'react-bootstrap';

const style = {
      height: "200px"
};
export default function Cards(props) {
  return (
      <Card className="Cards">
        <Card.Img variant="top" src={props.image} style={style}/>
        <Card.Body>
          <Card.Title><h4><b>{props.title}</b></h4></Card.Title>
            <Card.Text>
            <small className="text-muted">{props.artist}</small>
            </Card.Text>
        </Card.Body>
      </Card>
  );
}