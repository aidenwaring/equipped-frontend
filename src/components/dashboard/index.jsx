import React, { useEffect } from "react";
import { Container, Button, Card, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
import Axios from "axios";

export default function Index({ quotes, setQuotes }) {
  useEffect(() => {
    Axios.get("https://rocky-badlands-48514.herokuapp.com/api/quotes", {
      withCredentials: true,
    })
      .then((res) => {
        setQuotes(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <Container>
        <h1>Available tenders</h1>

        <p>There are new tenders</p>
    

        {quotes.map((quote) => {
          console.log(quote);
          return (
            <Col style={{ minWidth: "13rem" }}>
              <ul>
                <li>Product: {quote.product}</li>
                <li>Length: {quote.length}</li>
                <li>Price: {quote.price}</li>
                <Link to={`/sendquote/${quote._id}`}>Accept</Link>
                {/* <Button onClick={acceptQuoteEvent}>Accept</Button> */}
              </ul>
            </Col>
          );
        })}

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
