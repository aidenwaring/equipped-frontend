import React from "react";
import { RiMailSendLine } from "react-icons/ri";
import { MdReceipt } from "react-icons/md";
import { FiArrowDownCircle, FiThumbsUp } from "react-icons/fi";
import { Container, Form, Button, Card, CardGroup } from "react-bootstrap";
import Footer from "./footer";

export default function HomeView() {



  return (
    <div className="home-view">
      <Container fluid className="home-text">
        <div className="hero-text">
          <h1> Rent The Things You Need</h1>
         
          <FiArrowDownCircle className="down-arrow" />
        </div>
      </Container>

      <Container fluid className="home-1">
        <Container>
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title style={{ color: "black" }}>
                  Find the equipment your need
                </Card.Title>
                <Card.Text style={{ color: "black" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title style={{ color: "black" }}>Free to use</Card.Title>
                <Card.Text style={{ color: "black" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title style={{ color: "black" }}>
                  Save Time & Money
                </Card.Title>
                <Card.Text style={{ color: "black" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </Container>

      <Container fluid className="home-2">
        <h3>How Equipped Works</h3>
        <Container>
        <CardGroup>
      
          <Card>
            <Card.Body>
              <Card.Title>
                <RiMailSendLine style={{ fontSize: "3em" }} />
              </Card.Title>
              <Card.Title style={{ color: "white" }}>
                Request a quote
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <MdReceipt style={{ fontSize: "3em" }} />
              </Card.Title>
              <Card.Title style={{ color: "white" }}>Receive Quotes</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <FiThumbsUp style={{ fontSize: "3em" }} />
              </Card.Title>
              <Card.Title style={{ color: "white" }}>
                Choose The Best Quote
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </CardGroup>
        </Container>
      </Container>

      <Footer />
    </div>
  );
}
