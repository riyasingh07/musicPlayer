import React from "react";
import { Container, Button, Badge } from "react-bootstrap";

import CardSet from "./Cardset";
import Navhead from "./Navhead";
import Footnote from "./Footnote";
import Playbar from "./Playbar";
import "../styles.css";

export default function Home() {
  return (
    <div className="Home">
      <Navhead />
      <Container fluid className="box"></Container>
      <div className="recom">
        <Badge pill variant="warning">
          Recommendations
        </Badge>
      </div>
      <CardSet />
      <Playbar />
      <Footnote />
    </div>
  );
}
