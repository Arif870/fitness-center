import React from "react";
import logo from "../images/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Menu.css";
import { HashLink as Link } from "react-router-hash-link";
import useAuth from "../Hooks/useAuth";

export default function Menu() {
  const { user, userLogOut } = useAuth();

  return (
    <div>
      <Navbar bg="light" expand="lg" className="shadow-sm ">
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
              <Nav.Link as={Link} to="/moreaboutus">
                About us
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>

              {user.email ? (
                <Nav.Link as={Link} className="fw-bold text-info " to="">
                  {user.displayName}
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>
              )}

              {user.email ? (
                <Nav.Link
                  as={Link}
                  onClick={userLogOut}
                  to="/login"
                  className="btn"
                >
                  SignOut
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/register" className="btn">
                  Register
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
