import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function newProduct() {
  return (
    <div>
      <Container>
        <h1>New Product</h1>
        <Form>
          <Form.Group>
            <Form.Control type="text" placeholder="Product Name" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Location" />
          </Form.Group>
          <Form.Group>
            <Form.File
              id="exampleFormControlFile1"
              label="Example file input"
            />
          </Form.Group>

          <Button variant="secondary" size="lg" block>
            {" "}
            Add Product
          </Button>
        </Form>
      </Container>
    </div>
  );
}
