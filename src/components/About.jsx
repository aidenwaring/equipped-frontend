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
            Our team is making it easier for people get get access to the tech they want.
            This is our story.
          </p>
          <FiArrowDownCircle className="down-arrow" />
        </div>
      </Container>

      <Container  fluid className="mission">
        <Container fluid="sm">
        <h2>Our Mission</h2>
        <p>
          Technology is becoming more and more of an integral part in many of our lives.
          Tech equipment is expensive. Acquiring tech hardware for either personal use or business is a large investment and is a major barrier to entry.
          Sometimes, equipment is bought only to be used once or twice and left collecting dust.
          Both those who own the equipment and those wanting it are punished.
          What if there was a solution to connect the two groups?
        </p>
        <h2>Our Vision</h2>
          <ul>
            <li>Provide a way to spend less on what people need</li>
            <li>Open the barrier to entry on using technology by reducing cost and increasing accessibility</li>
            <li>Encourage the re-use of products to reduce e- waste</li>
            <li>Reward those who own existing equipment</li>
            <li>Support the tech community</li>
          </ul>
        <h2>Introducing Equipped</h2>
          <ul>
            <h4>What is it?</h4>
            <li>Peer-to-peer equipment tendering platform</li>
            <h4>Who can use it?</h4>
            <li>Anyone with equipment to rent out or who may be looking for equipment</li>
            <li>First time users to professionals who only need to have it for a certain period, whether it be just for the weekend or for an upcoming project</li>
            <h4>Why?</h4>
            <li>Allows equipment owners to generate income by lending out their potentially unused items to those who need it</li>
          </ul>
        </Container>
      </Container>
      <Footer />
    </div>
  );
}
