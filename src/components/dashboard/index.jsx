import React, {useEffect} from "react";
import { Container, Button, Row, Col} from "react-bootstrap";
import Products from "../products/myProducts";
import { Link } from "react-router-dom";
import Axios from "axios";



export default function Index({myProducts, user, quotes, setQuotes}) {

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


 

  let quoteList = quotes.map((quote) => {
    return (
      <Col>
      <ul>
        <li>Length: {quote.length}</li>
        <li>Product: {quote.product}</li>
        <Button>Accept</Button>
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
