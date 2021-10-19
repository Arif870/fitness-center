import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Service.css";

export default function Service({ title, picture, description, pricing }) {
  const history = useHistory();

  const handleSingleService = () => {
    const url = `/singleservice/${title}`;
    history.push(url);
    console.log("clicked", url);
  };

  return (
    <div className="service">
      <Card>
        <Card.Img className="w-100" variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="fw-light">{description.slice(0, 80)}</Card.Text>
        </Card.Body>
        <span onClick={handleSingleService} className="text-center mb-3 ">
          Starts from ${pricing}
        </span>
      </Card>
    </div>
  );
}
