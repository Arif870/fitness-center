import React from "react";
import useFatch from "../../../Hooks/useFatch";
import Service from "../../Service/Service";
import "./Services.css";

export default function Services() {
  const [services] = useFatch();
  return (
    <div id="services">
      <div className="mt-5 container">
        <h1 className="text-center mb-4">Our Services</h1>
        <p className="text-center">
          It is suitable for any sport activity – aerobic, boxing, crossfit,
          karate, dancing. It has purpose oriented design and comes with events.
        </p>
        <hr />
      </div>
      <div className="d-flex flex-wrap gap-5 justify-content-center container mt-5">
        {services.map(service => (
          <Service key={service.id} {...service}></Service>
        ))}
      </div>
    </div>
  );
}
