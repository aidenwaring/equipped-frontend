import React, { useEffect } from "react";
import axios from "axios";
import { Card, Button, CardDeck, Container } from "react-bootstrap";

function MyProducts({ myProducts, setMyProducts }) {
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products", { withCredentials: true })
      .then((response) => {
        setMyProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Container>
        <h2>My Products</h2>
        <CardDeck>
          {myProducts.map((product) => (

            <Card style={{ minWidth: "14rem" }}>
              <Card.Img variant="top" src="{product.image}" />
              <Card.Body>
                <Card.Title>{product.product}</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
      </Container>
    </div>
  );
}

export default MyProducts;
