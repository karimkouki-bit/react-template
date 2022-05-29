import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "./Navs.css";
const Navs = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img src={logo} title="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About Us</Nav.Link>
          <Nav.Link href="#link">explore Food</Nav.Link>
          <Nav.Link href="#link">Review</Nav.Link>
          <Nav.Link href="#link">Faq</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link id="lastnav">+974 55665165</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navs;
