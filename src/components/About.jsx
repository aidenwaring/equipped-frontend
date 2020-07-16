import React from "react";

import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <Container style={{backgroundColor: "lightblue"}}>
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
        <h5>Who are we?</h5>
      </div>
    </Container>
  );
}
