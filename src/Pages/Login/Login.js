import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";
import { useHistory } from "react-router";

export default function Register() {
  const {
    error,
    handleEmail,
    handlePassword,
    handleGoogleSignIn,
    handleLogin,
    setIsLoading,
    setError,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const googleLogIn = () => {
    handleGoogleSignIn()
      .then(result => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false))
      .catch(error => {
        setError(error.message);
        // ...
      });
  };

  return (
    <div className="login mx-auto d-block">
      <h1 className="fw-light text-center my-5">Please Login</h1>
      <Link to="/home">
        <p className="text-success">{error}</p>
      </Link>

      <Form onSubmit={handleLogin}>
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
      <p className="text-center mt-4">or</p>
      <button onClick={googleLogIn} className="btn mt-3 text-light">
        Signin by Google
      </button>
      <p className="text-center mt-3">
        Alredy have an Account ?
        <Link to="/register">
          <span className="log">Register</span>
        </Link>
      </p>
    </div>
  );
}
