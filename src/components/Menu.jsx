import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  NavDropdown
} from "react-bootstrap";

export default function Menu({ user, setUser }) {
  const url = "http://localhost:5000/api/users";

  const handleLogOut = (e) => {
    e.preventDefault();
    axios
      .get(`${url}/logout`, {
        withCredentials: true,
      })
      .then(() => {
        setUser(false);
      });
  };

  return (
    <>
      <Navbar className="Navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Equipped</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-item-center mr-auto" activeKey="/home">
              <Nav.Item>
                <Link className="nav-link nav" to="/">
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link nav" to="/products">
                  Products
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

              {!user ? (
                <>
                  <Nav.Item>
                    <Link className="nav-link" to="/signin">
                      Sign in
                    </Link>
                  </Nav.Item>
                </>
              ) : (
                <>
                  <NavDropdown title={user.displayName} id="basic-nav-dropdown">

                    <NavDropdown.Item><Link to="/dashboard">Dashboard</Link></NavDropdown.Item>

                    <NavDropdown.Item><Link to="/receivequote">Get A Quote</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="yourquotes">View Quotes</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">  <Link className="nav-link" style={{color: 'black'}}onClick={handleLogOut}>
                      {" "}
                      Sign Out{" "}
                    </Link></NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Item>
                  
                  </Nav.Item>
                </>
              )}

              <Nav.Item></Nav.Item>
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
