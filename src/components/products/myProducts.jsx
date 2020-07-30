import React, { useEffect } from "react";
import axios from "axios";
import { Card, CardDeck, Container } from "react-bootstrap";
import {Image} from 'cloudinary-react'

function MyProducts({ myProducts, setMyProducts }) {
  useEffect(() => { // API call to render return all products
    axios
      .get("https://rocky-badlands-48514.herokuapp.com/api/products", { withCredentials: true })
      .then((response) => {
        setMyProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setMyProducts]);

  return (
    <div>
      <Container>
        <h2>My Products</h2>
        <CardDeck>
          {myProducts.map((product) => ( // Map/iterate over each individual product from API call
            //Render each product's image and product name
            <Card style={{ maxWidth: "14rem", minWidth: "14rem"}}>
              <Image // Cloudinary component - render each product's image via id
                cloudName="dgeizgzdw"
                publicId={`equipped/${product._id}`}
                crop="scale"
                className='card-img-top'
              />

              <Card.Body>
                <Card.Title>{product.product}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
      </Container>
    </div>
  );
}

export default MyProducts;
