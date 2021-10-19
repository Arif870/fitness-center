import React from "react";
import logo from "../../images/logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="bg-dark p-4 mt-5 footer">
      <div className=" d-flex container justify-content-between">
        <img src={logo} alt="logo" />
        <ul className="text-light list-unstyled">
          <li>Privacy Policy</li>
          <li>About us</li>
          <li>Goal</li>
        </ul>
        <ul className="text-light list-unstyled">
          <li>Facebook</li>
          <li>Linkdin</li>
          <li>Twitter</li>
        </ul>
      </div>
      <p className="text-center my-3">
        All rights Reserved &copy; Fitness center
      </p>
    </div>
  );
}
