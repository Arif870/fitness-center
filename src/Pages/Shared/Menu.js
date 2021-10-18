import React from "react";
import logo from "../../images/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Menu.css";

export default function Menu() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About us</Nav.Link>
              <Nav.Link href="#link">Login</Nav.Link>
              <Nav.Link className="btn">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
