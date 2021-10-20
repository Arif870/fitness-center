import React from "react";
import { useHistory, useParams } from "react-router";
import useFatch from "../../Hooks/useFatch";
import SingleService from "../../SingleService/SingleService";
import "./ServiceDetails.css";

export default function ServiceDetails() {
  const { title } = useParams();
  const [services] = useFatch();
  const history = useHistory();

  const handleBack = () => {
    history.push("/services");
  };
  return (
    <div className="servicedetails">
      {services
        ?.filter(service => service.title === title)
        ?.map(singleservice => (
          <SingleService key="singleservice.id" singleservice={singleservice} />
        ))}
      <button className="btn mx-auto d-block my-5" onClick={handleBack}>
        Back to Services
      </button>
    </div>
  );
}
