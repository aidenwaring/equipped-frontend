import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function sendQuote() {
  return (
    <div>
      <Container>
        <h1>Send A Quote</h1>
        <p>Product name .......</p>
        <p>Rental Length .......</p>
        <Form>
          <Form.Control size="lg" type="text" placeholder="Enter Your Price" /><br/>
          <Button variant="secondary" size="lg" block>
            Block level button
          </Button>
        </Form>
      </Container>
    </div>
  );
}
