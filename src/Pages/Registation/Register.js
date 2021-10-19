import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Register.css";

export default function Register() {
  const {
    user,
    error,
    handleName,
    handleEmail,
    handlePassword,
    handleRegister,
  } = useAuth();

  return (
    <div className="register mx-auto d-block">
      <h1 className="fw-light text-center my-5">Registration form</h1>
      <p className="text-danger">{error}</p>
      <h1>{user.displayName}</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3">
          <Form.Control onBlur={handleName} type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group controlId="formGridEmail" className="mb-3">
          <Form.Control onBlur={handleEmail} type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group controlId="formGridPassword" className="mb-3">
          <Form.Control
            onBlur={handlePassword}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className="text-center mt-3">
        Alredy have an Account ?
        <Link to="/login">
          <span className="log">Login</span>
        </Link>
      </p>
    </div>
  );
}
