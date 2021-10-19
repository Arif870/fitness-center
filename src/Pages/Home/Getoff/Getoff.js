import React from "react";
import offimg from "../../../images/getoff.png";
import "./Getoff.css";

export default function Getoff() {
  return (
    <div className="getoff container d-flex justify-content-center gap-3 my-5 align-items-center flex-wrap">
      <div className=" mx-auto content">
        <p>
          Ready to strat you GYM from now.One click and book your seat and get
          50% off for first 100 students.Are you ready to glow?
        </p>
        <button className="btn btn-primary">Book Now</button>
      </div>
      <img className="w-50" src={offimg} alt="" />
    </div>
  );
}
