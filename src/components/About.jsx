import React from "react";
import { FiArrowDownCircle } from "react-icons/fi";
import { Container } from "react-bootstrap";
import Footer from "./footer.jsx";

export default function About() {
  return (
<<<<<<< HEAD
    <Container className="about">
      <div className="justify-content-md-center">
        <h1>About Us</h1>
        <br></br>
        <h3>
          We 'equip' those you need tools with those who can provide them.
          <br />
          <br />
          This is our mission.
        </h3>
      </div>
      <div>
        <h5>Who are we? Why are we here</h5>
      </div>
    </Container>
=======
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
>>>>>>> d958cc30fab9b6c84bdf4b8716eb96b64c313bb9
  );
}
