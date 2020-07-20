import React from "react";
import { Container, Button, Card, CardDeck } from "react-bootstrap";
import { FiArrowDownCircle } from "react-icons/fi";
import {
  GiAstronautHelmet,
  GiRaceCar,
  GiRetroController,
} from "react-icons/gi";
export default function products() {
  return (
    <div className="products">
      <Container>
        <h1>Whats For Rent</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa
          necessitatibus quos dolorum eius neque iure inventore dignissimos,
          deserunt aliquid!
        </p>
        <Button>View more</Button> <br />
        <FiArrowDownCircle />
      </Container>
      <Container>
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

      <Container>
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
      </Container>
    </div>
  );
}
