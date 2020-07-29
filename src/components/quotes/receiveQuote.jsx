import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

export default function receiveQuote({
  productReq,
  setProductReq,
  length,
  setLength,
  location,
  setLocation,
  user,
  price,
  setPrice
}) {

  const newProductQuote = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/quotes", {
        product: productReq,
        length: length,
        location: location,
        
        price: price
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Container>
        <h1>Request A Product</h1>
        <Form>
          <Form.Group>
            <Form.Control
              size="lg"
              type="text"
              name="product"
              placeholder="Product"
              input={productReq}
              onChange={(e) => setProductReq(e.target.value)}
            />

            <br />
            <Form.Control
              size="lg"
              type="text"
              name="length"
              placeholder="How many days do you want it"
              input={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <br />
            <Form.Control
              size="lg"
              type="text"
              name="location"
              placeholder="Your Location"
              input={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <br />
             <Form.Control
              size="lg"
              type="text"
              name="location"
              placeholder="How Much Do You Want To Pay"
              input={location}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          <br />
          <Button onClick={newProductQuote} variant="secondary" size="lg" block>
            Send Request
          </Button>
        </Form>
      </Container>
    </div>
  );
}
