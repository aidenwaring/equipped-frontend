import React from "react";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";

export default function yourQuotes() {
  let quote = [
    { price: "200", lender: "tom" },
    { price: "300", lender: "tim" },
    { price: "400", lender: "Alex" },
  ];
  let quoteList = quote.map((quote) => {
    return (
      <ListGroup>
        <ListGroup.Item>
          <Row>
            <Col>{quote.price}</Col>
            <Col>{quote.lender}</Col>
            <Col>
              <Button>Dark</Button>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    );
  });
  return (
    <div>
      <Container className="text-align-center">
        <h1>Your Quotes</h1>
        {quoteList}
      </Container>
    </div>
  );
}
