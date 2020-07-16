import React from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <Container>
      <Row className="justify-content-center">
        <div>
          <h1>Get In Touch</h1>
          <p>
            <FiMapPin /> 123 Mockup St, New York
            <br />
            <FiPhone /> (+1) 123 456 789
            <br />
            <FiMail /> hello@equipped.com.au
          </p>
          <div>
            <Form>
              <Row>
                <Col>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Row>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Button variant="primary" size="lg" block type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Row>
    </Container>
  );
}
