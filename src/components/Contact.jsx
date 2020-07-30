import React from "react";
import { Container } from "react-bootstrap";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <Container>
        <div>
          <h1>Get In Touch</h1>
          <p>
            <FiMapPin /> 123 Mockup St, Brisbane, Australia
            <br />
            <FiPhone /> (+1) 123 456 789
            <br />
            <FiMail /> hello@equipped.com.au
          </p>
         
        </div>

    </Container>
  );
}
