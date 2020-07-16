import React from "react";
import { Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav'

export default function Navbar() {
  return (
    <>
    <Nav variant="tabs" className="justify-content-center" activeKey="/home">
        <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>Equipped</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Link className="nav-link" to='/'>Home</Link>
        </Nav.Item>
        <Nav.Item>
            <Link className="nav-link" to='/about'>About</Link>
        </Nav.Item>
        <Nav.Item>
            <Link className="nav-link" to='/contact'>Contact</Link>
        </Nav.Item>
        <Nav.Item>
            <Link className="nav-link" to='/signup'>Sign Up</Link>
        </Nav.Item>
    </Nav>
  </>
  );
}
