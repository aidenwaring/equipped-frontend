import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function ReceiveQuote({
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
  const history = useHistory()
  
  const newProductQuote = (e) => {
    e.preventDefault();
    history.push('/dashboard')
    axios
      .post("https://rocky-badlands-48514.herokuapp.com/api/quotes", {
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
              placeholder="How Much Do You Want To Pay Per Day"
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
