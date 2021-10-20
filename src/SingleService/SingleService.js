import React from "react";
import "./SingleService.css";

export default function SingleService(props) {
  const { picture, description, title, pricing } = props.singleservice;
  return (
    <div className="singleservicedetails">
      <h1 className="fw-light text-center my-5">{title}</h1>
      <img src={picture} alt="singleservicephoto" />
      <h4 className="text-center my-3 fw-bold my-4">
        {" "}
        Grap this only offer running ${pricing}
      </h4>
      <p className="w-75 text-center text-dark d-block mx-auto">
        {description}
      </p>
    </div>
  );
}
