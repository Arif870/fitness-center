import React from "react";
import logo from "../../images/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Menu.css";
import { HashLink as Link } from "react-router-hash-link";

export default function Menu() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/home/#aboutus">
                About us
              </Nav.Link>
              <Nav.Link href="#link"> Services</Nav.Link>
              <Nav.Link href="#link">Login</Nav.Link>
              <Nav.Link className="btn">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
