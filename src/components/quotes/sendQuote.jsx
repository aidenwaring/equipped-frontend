import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function SendQuote({quotes, setQuotes, acceptQuote, setAcceptQuote}) {

  console.log(acceptQuote)
  console.log(quotes)

let sendQuote = quotes.map((quote) => {
 return( <>
  <h3>Product: {quote.product}</h3>
  <h3>Length: {quote.length}</h3>
  </>
 )
})

  return (
    <div>
      <Container>
        {acceptQuote? (
          <>
            <h1>Send A Quote</h1>
            {sendQuote}
            
          </>
            ) : (<h1>You have no quotes</h1>)}

      </Container>
    </div>
  );
}
