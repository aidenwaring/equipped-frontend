import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { Container, Button, Row, Col} from "react-bootstrap";
import Products from "../products/myProducts";
import SendQuote from '../quotes/sendQuote'
import { Link } from "react-router-dom";
import Axios from "axios";



export default function Index({myProducts, user, quotes, setQuotes, acceptQuote, setAcceptQuote}) {

useEffect(() => {
  Axios.get("http://localhost:5000/api/quotes", {withCredentials: true})
    .then((res) => {
      setQuotes(res.data)
      console.log(res)
    
    })
    .catch((err) => {
      console.error(err)
    })
}, [])


const history = useHistory()


const acceptQuoteEvent = (e) => {
 
  setAcceptQuote(true)
  history.push('/sendquote')
  console.log(acceptQuote)
}
 

  let quoteList = quotes.map((quote) => {
    return (
      <Col>
      <ul>
        <li>Length: {quote.length}</li>
        <li>Product: {quote.product}</li>
        <Button onClick={acceptQuoteEvent}>Accept</Button>
      </ul>
      </Col>
    );
  });
  return (
    <div>
      <Container>
        <h1>Your tenders</h1>
        <p>You have a new tender</p>
        <Row>
        {quoteList}
        </Row>
      </Container>
      <Container>
        <Link to='/products/myProducts'><Button>View My Products</Button></Link>
       <Link to="/products/new"> <Button>Add New Item</Button></Link>
      </Container>
    </div>
  );
} 
