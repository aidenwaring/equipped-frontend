import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function NewProduct({
  newProductName,
  setNewProductName,
  productImg,
  setProductImg,
  user,
}) {
  const handleImageUpload = (id) => { //Method to post Cloudinary formData to image repository
    const { files } = document.querySelector('input[type="file"]');
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "qnsvlare");
    formData.append("public_id", id);
    const options = {
      method: "POST",
      body: formData,
    };

    return fetch(
      "https://api.Cloudinary.com/v1_1/dgeizgzdw/image/upload",
      options
    ) // Fetch results of API call to cloudinary image repo
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const history = useHistory();
  const newProduct = (e) => {
    e.preventDefault();
    axios
    // POST request to Equipped API to create new product in database
      .post("https://rocky-badlands-48514.herokuapp.com/api/products", {
        product: newProductName,
        user: user.id,
      })
      .then(function (res) {
        console.log(res);
        handleImageUpload(res.data._id);
        history.push("/dashboard");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Container>
        <h1>New Product</h1>
        {/* New Product Form */}
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Product Name"
              input={newProductName}
              onChange={(e) => setNewProductName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <input
              type="file"
              input={productImg}
              onChange={(e) => setProductImg(e.target.value)}
            />
            <Link to="/">
              <Button variant="secondary" size="lg" block onClick={newProduct}>
                Add Product
              </Button>
            </Link>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}
