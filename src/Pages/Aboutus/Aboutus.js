import React from "react";
import "./Aboutus.css";
import banner from "../../images/aboutus.png";
import { Link } from "react-router-dom";

export default function Aboutus() {
  return (
    <div className="aboutus container" id="aboutus">
      <h1 className="text-center">WHO WE ARE ?</h1>
      <p className="text-center my-4">
        Fit your body and be happy. We are focused on your body fitness.
      </p>
      <hr />
      <div className="d-flex align-items-center gap-5 mt-5  flex-wrap justify-content-center">
        <img src={banner} alt="banner" />
        <div className="content ">
          <p>
            Gym – Fitness theme is built for Sport Clubs, Health Clubs, Yoga
            Teacher, Gyms, Fitness Centers, Gym Trainers, Personal Fitness
            Trainer and Sports Instructor and other sport and gym related sites.
            It is suitable for any sport activity – aerobic, boxing, crossfit,
            karate, dancing. It has purpose oriented design and comes with
            events / classes, schedule / timetable, opening hours. It is also
            suitable for users with zero programming skills as well as advanced
            developers
          </p>
          <Link to="/moreaboutus">
            <button className="btn mt-4">Read more about us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
