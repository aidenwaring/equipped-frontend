import React from "react";
import { Form, Button, Container } from "react-bootstrap";

export default function receiveQuote() {
  return (
    <div>
      <Container>
        <h1>Request A Quote</h1>
        <Form>
          <Form.Group>
            <Form.Control size="lg" type="text" placeholder="Large text" />
            <br />
            <Form.Control size="lg" type="text" placeholder="Large text" />
            <br />
            <Form.Control size="lg" type="text" placeholder="Large text" />
          </Form.Group>
          <br />
          <Button variant="secondary" size="lg" block>
            Block level button
          </Button>
        </Form>
      </Container>
    </div>
  );
}
