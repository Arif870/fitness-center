import React from "react";
import { Card } from "react-bootstrap";
import "./Service.css";

export default function Service(props) {
  const { id, title, picture, description, pricing } = props.service;
  return (
    <div className="service">
      <Card>
        <Card.Img className="w-100" variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="fw-light">{description.slice(0, 80)}</Card.Text>
        </Card.Body>
        <span className="text-center mb-3 ">Starts from ${pricing}</span>
      </Card>
    </div>
  );
}
