import React from "react";
import { Button, Container } from "react-bootstrap";


export default function SignIn({setUser}) {


  // url for user crud
  const url = "https://rocky-badlands-48514.herokuapp.com/api/users";

  // Google Oauth
  const handleGoogleAuth = (e) => {
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
