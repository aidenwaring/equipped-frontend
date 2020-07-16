import React from "react";
import { Link } from "react-router-dom";

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container
} from "react-bootstrap";

export default function Menu() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Equipped</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            


            
            <Nav className="justify-item-center mr-auto" activeKey="/home">
              <Nav.Item>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link" to="/signin">
                  Sign in
                </Link>
              </Nav.Item>
            </Nav>





            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
