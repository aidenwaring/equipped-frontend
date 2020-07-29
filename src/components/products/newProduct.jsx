import React from "react";
import { Container, Form, Button } from "react-bootstrap";

import axios from 'axios'

export default function newProduct({
  newProductName,
  setNewProductName,
  productImg,
  setProductImg,
  user
}) {



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
            product: newProductName,
            user: user.id
           
          })
          .then(function (res) {
            console.log(res)
            handleImageUpload(res.data._id)
          })
          .catch(function (error){
            console.log(error)
          })
    }


  return (
    <div>
      <Container>
        <h1>New Product</h1>
        {/* <Form onSubmit=AXIOS CALL */
         /*.then(handleImageUpload)*/}
        <Form > 
          <Form.Group>
            <Form.Control 
            type="text" 
            placeholder="Product Name" 
            input={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
            />
          </Form.Group>
          {/* <Form.Group>
            <Form.Control type="text" placeholder="Location" />
          </Form.Group> */}
          <Form.Group>
            <input
              type="file" input={productImg}
              onChange={(e) => setProductImg(e.target.value)}
             
            />
            <Button variant="secondary" size="lg" block onClick={newProduct} >
              Add Product
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}