import React, { useEffect } from "react";
import axios from "axios";
import { Card, Button, CardDeck, Container } from "react-bootstrap";
import {Image} from 'cloudinary-react'

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
            <Card style={{ maxWidth: "14rem", minHeight: "350px"}}>
              <Image
                cloudName="dgeizgzdw"
                publicId={`equipped/${product._id}`}
                // width="200"
                // height="12rem"
                crop="scale"
                className='card-img-top'
              />

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
