import React, { useEffect } from "react";
import axios from "axios";
import { Card, Button, CardDeck, Container } from "react-bootstrap";

import {Image} from 'cloudinary-react';
import {CloudinaryContext, Transformation} from 'cloudinary-react';

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
    <Image cloudName="demo" publicId="sample" />
    <Image cloudName="dgeizgzdw" publicID="" width="300" height="300" crop="scale" />
    <CloudinaryContext cloudName="dgeizgdw">
      <Image publicId="5f1fbe2c5b118b8e46596ee1">
          <Transformation width="200" crop="scale" angle="10"/>
      </Image>
    </CloudinaryContext>

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
