import React from "react";
import Aboutus from "../../Aboutus/Aboutus";
import Service from "../../Service/Service";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

export default function Home() {
  return (
    <div>
      <Banner />
      <Aboutus />
      <Services />
    </div>
  );
}
