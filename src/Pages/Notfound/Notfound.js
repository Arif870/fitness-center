import React from "react";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="text-center mt-5">
      <h2 className="fw-light">OPPS !</h2>
      <h1 className="fs-1">404 ERROR</h1>
      <h4 className="text-danger fw-light my-5 fs-5">Page not found....</h4>
      <Link to="/">
        <button className="btn btn-primary">Back to home </button>
      </Link>
    </div>
  );
}
