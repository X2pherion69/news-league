import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doPost } from "../../redux/post/post.actions";

const AddPostShopData = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [progress, setProgress] = useState("0");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id || !name || !price || !imageUrl || !category) {
      return toast.warning("Please fill in all fields!");
    }

    const data = {
      id: id,
      name: name,
      price: price,
      imageUrl: "",
      comment: [],
      category: category.split(","),
    };

    dispatch(doPost(data, imageUrl, setProgress));
  };
  return (
    <Container>
      <Row>
        <Col md={12} style={{ textAlign: "right" }} className="my-5">
          <Button as={Link} to="/" variant="dark" bg="dark" className="mr-2">
            Back
          </Button>
        </Col>
        <Col md={12} className="mb-3">
          <h1 className="display-3 text-dark text-center">
            Create Contents Shop
          </h1>
        </Col>
        <Col md={6} className="mx-auto shadow">
          <Form onSubmit={handleSubmit} className="p-4">
            <Form.Group controlId="id" className="my-2">
              <Form.Control
                type="text"
                name="id"
                placeholder="ID..."
                value={id}
                onChange={(e) => setId(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="name" className="my-2">
              <Form.Control
                type="text"
                name="name"
                placeholder="Name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="category" className="my-2">
              <Form.Control
                type="text"
                name="category"
                placeholder="Category..."
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="price" className="my-2">
              <Form.Control
                type="text"
                name="price"
                placeholder="Price..."
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="imageUrl" className="my-2">
              <input
                type="file"
                className="form-control"
                onChange={(e) => setImageUrl(e.target.files[0])}
                accept="image/png, image/jpeg, image/jpg"
              />
            </Form.Group>
            <Form.Group controlId="btn" className="my-2">
              <Button
                type="submit"
                variant="dark"
                bg="dark"
                className="form-control"
              >
                Create
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};
export default AddPostShopData;
