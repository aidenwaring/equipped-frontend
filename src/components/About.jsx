import React from "react";
import { FiArrowDownCircle } from "react-icons/fi";
import { Container } from "react-bootstrap";
import Footer from "./footer.jsx";

export default function About() {
  return (
    <div className="about">
      <Container fluid className="about-container">
       
        <div className="hero-text">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            ipsa
          </p>
          <FiArrowDownCircle className="down-arrow" />
        </div>
      </Container>

      <Container  fluid className="mission">
        <Container fluid="sm">
        <h2>Our Mission</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
          eligendi alias. Magnam consequuntur quae consequatur reprehenderit?
          Hic praesentium animi placeat?
        </p>
        </Container>
      </Container>
    
      <Footer />
    </div>
  );
}
