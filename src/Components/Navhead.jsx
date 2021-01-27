import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Playlist from './Playlist';

function Navhead() {
  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt="logo"
          src="./images/LogoMakr-5gF64s.png"
          width="60"
          height="60"
          className="d-inline-block align-top"
        />{" "}
        Music Player
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto " activeKey="/">
          <Nav.Item>
            <Nav.Link href="/">Home &nbsp; &nbsp; &nbsp; &nbsp; </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/playlist">Playlist &nbsp; &nbsp; &nbsp;</Nav.Link>{" "}
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navhead;
