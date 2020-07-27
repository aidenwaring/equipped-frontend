import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import ImgUpload from "../ImgUpload";

import axios from 'axios'

export default function newProduct() {

  const handleImageUpload = (id) => {
    const { files } = document.querySelector('input[type="file"]')
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'qnsvlare');
    formData.append('public_id', id)
    const options = {
    method: 'POST',
    body: formData,
    };

    return fetch('https://api.Cloudinary.com/v1_1/dgeizgzdw/image/upload', options)
    .then(res => res.json())
    .then(data => {
    console.log(data)
    })
    .catch(err => console.log(err))
    }


    const newProduct = (e) => {
      e.preventDefault()
      axios.post('http://localhost:5000/api/products', {
            product: "Camera",
            image: "Img"
          })
          .then(console.log("Getting info success."))
          .catch(console.log("There was an error here."))
    }


  return (
    <div>
      <Container>
        <h1>New Product</h1>
        {/* <Form onSubmit=AXIOS CALL */
         /*.then(handleImageUpload)*/}
        <Form onSubmit={newProduct}> 
          <Form.Group>
            <Form.Control type="text" placeholder="Product Name" />
          </Form.Group>
          {/* <Form.Group>
            <Form.Control type="text" placeholder="Location" />
          </Form.Group> */}
          <Form.Group>
            <input
              type="file"
            />
            <Button variant="secondary" size="lg" block >
              Add Product
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}