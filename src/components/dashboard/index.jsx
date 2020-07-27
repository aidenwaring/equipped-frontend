import React from "react";
import { Container, Button } from "react-bootstrap";
import Products from "../products/myProducts";
export default function index() {
  const tender1 = [{ name: "Jimmy", length: "2 days", product: "vr headset" }];

  let tenderList = tender1.map((tender) => {
    return (
      <ul>
        <li>Name: {tender.name}</li>
        <li>Length: {tender.length}</li>
        <li>Product: {tender.product}</li>
      </ul>
    );
  });
  return (
    <div>
      <Container>
        <h1>Your tenders</h1>
        <p>You have a new tender</p>
        {tenderList}
        <Button>Accept</Button>
      </Container>
      <Container>
        {/* This is the my products component being rendered here */}
        <Products />
      </Container>
    </div>
  );
}
