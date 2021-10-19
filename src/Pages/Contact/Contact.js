import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <div className="container contact d-flex justify-content-center gap-5 text-center flex-wrap">
        <Card>
          <span>
            <i className="fas fa-phone"></i>
          </span>
          <Card.Body>
            <Card.Title>Phone Number</Card.Title>
            <Card.Text>
              +880 1988772311 <br />
              +880 1988772312
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <span>
            <i className="fas fa-envelope"></i>
          </span>
          <Card.Body>
            <Card.Title>Email Address</Card.Title>
            <Card.Text>
              arifco@gmail.com <br /> fitcom@gmail.com
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <span>
            <i className="fas fa-search-location"></i>
          </span>
          <Card.Body>
            <Card.Title>Location</Card.Title>
            <Card.Text>Uttara, Dhaka, Bangladesh</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <h1 className="text-center my-5">Contact US</h1>

      <div className="container d-flex flex-wrap gap-5 location">
        <div className="map">
          <iframe
            title="location"
            className="w-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29186.920133704156!2d90.36073546582425!3d23.876671847824174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1634655798619!5m2!1sen!2sbd"
          ></iframe>
        </div>
        <div className="form">
          <Form>
            <Form.Group controlId="formGridEmail" className="mb-3">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group controlId="formGridPassword" className="mb-3">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="formGridPassword" className="mb-3">
              <Form.Control type="text" placeholder="Phone" />
            </Form.Group>
            <Form.Group className="mb-3">
              <textarea className="form-control" rows="5"></textarea>
            </Form.Group>

            <Button variant="primary" type="submit">
              Send message
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
