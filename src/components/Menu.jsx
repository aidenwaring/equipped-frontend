import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  Navbar,
  Nav,
  Container,
  NavDropdown
} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"

export default function Menu({ user , setUser} ) {
  const url = "https://rocky-badlands-48514.herokuapp.com/api/users";

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
          <Navbar.Brand href="/">Equipped</Navbar.Brand>
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
                    <LinkContainer to="/dashboard">
                      <NavDropdown.Item>Dashboard</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="receivequote">
                      <NavDropdown.Item> Get A Quote </NavDropdown.Item>
                    </LinkContainer>
                   

                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      style={{ color: "black" }}
                      onClick={handleLogOut}
                    >
                      Sign Out
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Item></Nav.Item>
                </>
              )}

              <Nav.Item></Nav.Item>
            </Nav>

            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
