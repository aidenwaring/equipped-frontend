import React from "react";
import axios from 'axios'

export default function myProducts() {



  axios.get("https://localhost:5000/api/products")
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log('Im broken')
    })
    

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
