import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../../../images/Slider/slider1.png";
import slide2 from "../../../images/Slider/slider2.png";
import slide3 from "../../../images/Slider/slider3.png";
import "./Banner.css";
import logo from "../../../images/banner.png";

export default function Banner() {
  return (
    <div className="container d-flex align-items-center justify-content-between mt-5 banner gap-5  flex-wrap">
      <div className="fit">
        <img className="w-100" src={logo} alt="" />
      </div>
      <div className="slider">
        <Carousel interval={1500}>
          <Carousel.Item>
            <img className="d-block w-100" src={slide1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slide2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slide3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
