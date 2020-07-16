import React from "react";
import { Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav'

export default function Navbar() {
  return (
    <>
     {/* <nav>
       <Link to='/'>Home</Link>
       <Link to='/about'>About</Link>
       <Link to='/contact'>Contact Us</Link>
       <Link to='/signup'>Sign Up</Link>
     </nav> */}

    <Nav className="justify-content-center" activeKey="/home">
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
