import React, {useState, UseEffect} from 'react'
import { Button, Form, Container } from "react-bootstrap";
import axios from 'axios'


export default function SignIn() {

// url for user crud 
const url = "https://secure-savannah-73387.herokuapp.com/api/users/"

// State for user
const [user, setUser] = useState(false)
const [error, setError] = useState(false)


// Google Oauth
const handleGoogleAuth = (e) => {
  window.location = `${url}auth/google`
}

  return (
    <div>
      <Container>
        <h1>Sign In</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>

      <Container>
      <Button onClick={handleGoogleAuth}>Log In With Google!</Button>
      </Container>
    </div>
  );
}
