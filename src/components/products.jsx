import React from "react";
import { Container, Button, Card, CardDeck } from "react-bootstrap";
import { FiArrowDownCircle } from "react-icons/fi";
import {
  GiAstronautHelmet,
  GiRaceCar,
  GiRetroController,
} from "react-icons/gi";
import Footer from "./footer.jsx";

export default function products() {
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
          
          <FiArrowDownCircle className='down-arrow'/>
        </div>
      </Container>

      <Container className='fe-cat'>
        <h2>Featured Categories</h2>

        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Title className="cat-icon">
                <GiAstronautHelmet />
              </Card.Title>
              <Card.Text>
                <h5>Virtual Reality</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>

        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Title className="cat-icon">
                <GiRaceCar />
              </Card.Title>
              <Card.Text>
                <h5>Racing Simulation</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>

        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Title className="cat-icon">
                <GiRetroController />
              </Card.Title>
              <Card.Text>
                <h5>Consoles</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>

      <Container className="highlights">
        <h2>This Weeks Highlights</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          perferendis commodi recusandae aspernatur iste nulla.
        </p>

        <Card>
          <Card.Img variant="top" src="https:via.placeholder.com/100/180" />
          <Card.Body>
            <Card.Title>Product 1</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="https:via.placeholder.com/100/180" />
          <Card.Body>
            <Card.Title>Product 1</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>

      <Container className='trending-pro'>
        <h2>Trending Products</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum amet
          nesciunt deleniti architecto numquam nostrum.
        </p>
        <Card>
          <Card.Img variant="top" src="https:via.placeholder.com/100/180" />
          <Card.Body>
            <Card.Title>Product 1</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="https:via.placeholder.com/100/180" />
          <Card.Body>
            <Card.Title>Product 1</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="https:via.placeholder.com/100/180" />
          <Card.Body>
            <Card.Title>Product 1</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>

      <Container className="sale">
        <h2>On Sale This Week</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
          architecto voluptates error, quasi quibusdam saepe.
        </p>
        <Card>
          <Card.Img variant="top" src="https:via.placeholder.com/100/180" />
          <Card.Body>
            <Card.Title>Product 1</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="https:via.placeholder.com/100/180" />
          <Card.Body>
            <Card.Title>Product 1</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="https:via.placeholder.com/100/180" />
          <Card.Body>
            <Card.Title>Product 1</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>

      <Footer />
    </div>
  );
}
