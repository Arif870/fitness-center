import React from "react";
import faq from "../../../images/faq.png";
import "./Faq.css";

export default function Faq() {
  return (
    <div className="container faq my-5">
      <img className="mx-auto d-block" src={faq} alt="" />
      <p className="text-center">Frequentry asked question</p>

      <div className="accordion mt-5" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is the total duration ?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              It is more then 6 months package. the overall appearance, as well
              as the showing and hiding via CSS transitions. You can modify any
              of this with custom CSS or overriding our default variables. It's
              also worth noting that just though the transition does limit
              overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Can i get all the medicine service from your gym ?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Yes. we provide all the necessary drugs. hidden by default, until
              the collapse plugin adds the appropriate classes that we use to
              style each element. These classes control
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What is the duration for single person daily ?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong> All day </strong> It is hidden by default, until the
              collapse plugin adds the appropriate classes that we use to style
              each element. These classes control the overall appearance, as
              well as the showing and hiding via CSS transitions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
