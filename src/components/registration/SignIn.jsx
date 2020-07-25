import React, { useState, UseEffect } from "react";
import { Button, Form, Container } from "react-bootstrap";
import axios from "axios";


export default function SignIn({setUser}) {


  // url for user crud
  const url = "http://localhost:5000/api/users";

  // State for user
  const [error, setError] = useState(false);

  const handleLogIn = (e) => {
    e.preventDefault();
  
    axios
      .post(
        `${url}/login`,
        {
          username: 'alex123',
          password: 'alex123',
        },
        {
          withCredentials: true,
        }
      ).then(
        response => console.log(response.data)
      )
     
      .catch((err) => {
        // setError(err.response.data);
      });
  };

  // Google Oauth
  const handleGoogleAuth = (e) => {
    e.preventDefault()
    console.log(url)
    window.location = `${url}/auth/google`;
  };

  return (
    <div>
      <Container>
        <h1>Sign In</h1>
        <Form onSubmit={handleLogIn}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control  placeholder="Enter email" />
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
      {error ? (
        <div>
          <h4>{error.name}</h4>
          <p>{error.message}</p>
        </div>
      ) : null}
      <Container>
        <Button onClick={handleGoogleAuth}>Log In With Google!</Button>
      </Container>
    </div>
  );
}
