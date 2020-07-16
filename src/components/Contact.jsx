import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function Contact() {
  return (
    <div>
      <h1>Get In Touch</h1>
      <p>123 Mockup St, New York</p>
      <p>Ph: (+1) 123 456 789</p>
      <p>Em: hello@equipped.com.au</p>
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
      </Form>
      </div>
    </div>
  );
}
