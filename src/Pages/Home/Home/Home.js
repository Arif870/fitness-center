import React from "react";
import Aboutus from "../../Aboutus/Aboutus";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Getoff from "../Getoff/Getoff";
import Services from "../Services/Services";

export default function Home() {
  return (
    <div>
      <Banner />
      <Aboutus />
      <Services />
      <Faq />
      <Getoff />
    </div>
  );
}
