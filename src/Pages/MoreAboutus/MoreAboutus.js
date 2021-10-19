import React from "react";
import { Link } from "react-router-dom";
import moreaboutus from "../../images/moreaboutus.jpg";
import "./MoreAboutus.css";

export default function MoreAboutus() {
  return (
    <div className="moreaboutus container mt-5">
      <img className="w-100" src={moreaboutus} alt="" />
      <p className=" mt-5 fw-light">
        Gym – Fitness theme is built for Sport Clubs, Health Clubs, Yoga
        Teacher, Gyms, Fitness Centers, Gym Trainers, Personal Fitness Trainer
        and Sports Instructor and other sport and gym related sites. It is
        suitable for any sport activity – aerobic, boxing, crossfit, karate,
        dancing. It has purpose oriented design and comes with events / classes,
        schedule / timetable, opening hours. It is also suitable for users with
        zero programming skills as well as advanced developers Gym – Fitness
        theme is built for Sport Clubs, Health Clubs, Yoga Teacher, Gyms,
        Fitness Centers, Gym Trainers, Personal Fitness Trainer and Sports
        Instructor and other sport and gym related sites. It is suitable for any
        sport activity – aerobic, boxing, crossfit, karate, dancing. It has
        purpose oriented design and comes with events / classes, schedule /
        timetable, opening hours. It is also suitable for users with zero
        programming skills as well as advanced developers
      </p>
      <p className=" mt-5 fw-light ">
        Gym – Fitness theme is built for Sport Clubs, Health Clubs, Yoga
        Teacher, Gyms, Fitness Centers, Gym Trainers, Personal Fitness Trainer
        and Sports Instructor and other sport and gym related sites. It is
        suitable for any sport activity – aerobic, boxing, crossfit, karate,
        dancing. It has purpose oriented design and comes with events / classes,
        schedule / timetable, opening hours. It is also suitable for
      </p>
      <Link as={Link} to="/#home">
        <button className="btn btn-primary mx-auto d-block my-5">
          Go back to home
        </button>
      </Link>
    </div>
  );
}
