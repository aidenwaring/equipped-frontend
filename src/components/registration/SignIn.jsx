import React from "react";
import { Button, Container } from "react-bootstrap";


export default function SignIn({setUser}) {

  // url for user crud
  const url = "https://rocky-badlands-48514.herokuapp.com/api/users";
  // const development = "http://localhost:3000/api/users"

  // Google Oauth
  const handleGoogleAuth = (e) => { // Event handler for taking user info and directing window to Equipped Google API route
    e.preventDefault()
    console.log(url)
    window.location = `${url}/auth/google`; 
  };

  return (
    <div>
      <Container>
        <Button onClick={handleGoogleAuth}>Log In With Google!</Button>
      </Container>
    </div>
  );
}
