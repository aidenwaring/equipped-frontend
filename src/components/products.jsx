import React, { useEffect } from "react";
import { Container, Button, Card, CardDeck } from "react-bootstrap";
import { FiArrowDownCircle } from "react-icons/fi";
import Footer from "./footer.jsx";
import axios from "axios";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";

import { CloudinaryContext, Transformation } from "cloudinary-react";

export default function Products({ product, setProduct }) {
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products", { withCredentials: true })
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="products">
      <Container className="products-main">
        <div className="hero-text">
          <h1>Whats For Rent</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            ipsa
          </p>
          <Button>View more</Button> <br />
          <FiArrowDownCircle className="down-arrow" />
        </div>
      </Container>

      <Container>
        <h1> These are some of the products you can rent</h1>
        <CardDeck>
          {product.map((product) => (
            <Card style={{ minWidth: "14rem" }}>
              <Image
                cloudName="dgeizgzdw"
                publicId={`equipped/${product._id}`}
                width="200"
                height="200"
                crop="scale"
              />
              <Card.Body>
                <Card.Title>{product.product}</Card.Title>
                <Link to='/receivequote'><Button variant="primary">Request To Rent</Button></Link>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
      </Container>
      <Footer />
    </div>
  );
}
