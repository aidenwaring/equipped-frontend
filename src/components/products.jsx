import React, { useEffect } from "react";
import { Container, Button, Card, CardDeck } from "react-bootstrap";
import { FiArrowDownCircle } from "react-icons/fi";
import Footer from "./footer.jsx";
import axios from 'axios'
//Axios
// import axios from 'axios'

export default function Products({product, setProduct}) {

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
        
        <CardDeck>
          {product.map((product) => (

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
      
      <Footer />
    </div>
  );
}
