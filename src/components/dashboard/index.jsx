import React, { useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
import Axios from "axios";

export default function Index({ quotes, setQuotes }) {
  useEffect(() => {
    Axios.get("https://rocky-badlands-48514.herokuapp.com/api/quotes/getpending", {
      withCredentials: true,
    })
      .then((res) => {
        setQuotes(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [setQuotes]);

  return (
    <div>
      <Container>
        <h1>Available tenders</h1>
        <p>There are new tenders</p>
        <Row>
          {quotes.map((quote) => {
            return (
              <Col style={{ minWidth: "13rem" }}>
                <ul>
                  <li>Product: {quote.product}</li>
                  <li>Length: {quote.length}</li>
                  <li>Price: {quote.price} Per Day</li>
                  <Link to={`/sendquote/${quote._id}`}>Accept</Link>
                </ul>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container>
        <Link to="/products/myProducts">
          <Button>View My Products</Button>
        </Link>
        <Link to="/products/new">
          {" "}
          <Button>Add New Item</Button>
        </Link>
      </Container>
    </div>
  );
}
