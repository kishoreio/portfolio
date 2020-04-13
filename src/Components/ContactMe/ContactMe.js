import React from "react";
import "./ContactMe.css";
import { Form, Button } from "react-bootstrap";

const ContactMe = () => {
  return (
    <div className="contact-container">
      <h4 className="sub-title">
        <span className="about-border contact-title">Contact Me</span>
        <span role="img" aria-label="person">
          📮
        </span>
      </h4>
      <div className="form-container">
        <div className="form-inside">
          <Form action="https://mailthis.to/kishore" method="POST">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="contact-title">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="contact-title">Email address</Form.Label>
              <Form.Control
                type="email"
                name="_replyto"
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="contact-title">Message</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="message"
                required
                placeholder="Your Message"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default ContactMe;
