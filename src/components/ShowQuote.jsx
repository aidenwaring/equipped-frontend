import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { Container } from "react-bootstrap";

import { Button } from "react-bootstrap";
export default function ShowQuote(props) {
  const [quote, setQuote] = useState({});
  const history = useHistory()

  useEffect(() => {
    Axios.get(`http://localhost:5000/api/quotes/${props.match.params.id}`, {
      withCredentials: true,
    }).then((res) => {
      setQuote(res.data);
      console.log(res.data);
    });
  }, []);
  


const acceptProduct = (e) => {
  e.preventDefault()
  const newQuote = {...quote, accepted: true}
  setQuote(newQuote)
  history.push('/')
  Axios.patch(`http://localhost:5000/api/quotes/${props.match.params.id}`, 
     newQuote 
    ).then((response) => {
      console.log('👉 Returned data:', response.data);
      console.log(quote)
    }).catch((err) => {
      console.log(`😱 Axios request failed: ${err}`);
  }) 
  
}

  
 

  return (
    <div>
      <Container>
        <h1>Show Quote</h1>
        <h3>Product: {quote.product}</h3>
        <h3>Length: {quote.length}</h3>
        <Link onClick={acceptProduct}>Accept</Link>
      </Container>
    </div>
  );
}
