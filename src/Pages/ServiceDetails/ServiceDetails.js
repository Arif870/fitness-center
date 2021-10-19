import React from "react";
import { useHistory, useParams } from "react-router";
import useFatch from "../../Hooks/useFatch";

export default function ServiceDetails() {
  const { title } = useParams();
  const [services] = useFatch();
  const history = useHistory();

  const handleBack = () => {
    history.push("/services");
  };
  return (
    <div>
      <h1>ServiceDetails here</h1>
      {services
        ?.filter(service => service.title === title)
        ?.map(singleservice => console.log(singleservice))}
      <button onClick={handleBack}>Back</button>
    </div>
  );
}

// <div>
//   <h1>title : {singleservice.title}</h1>
//   <h2>{singleservice.description}</h2>
// </div>;
