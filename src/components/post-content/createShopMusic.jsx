import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPostShopMusic = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id || !name || !price || !imageUrl) {
      return toast.warning("Please fill in all fields!");
    }

    const data = {
      id: id,
      name: name,
      price: price,
      imageUrl: imageUrl,
    };

    // dispatch(doPost(data, setProgress));
  };
  return (
    <Container>
      <Row>
        <Col md={12} style={{ textAlign: "right" }} className="my-5"></Col>
        <Col md={12} className="mb-3">
          <h1 className="display-3 text-dark text-center">
            Create Contents Shop-Music
          </h1>
        </Col>
        <Col md={6} className="mx-auto shadow">
          {" "}
          {progress ? (
            progress !== 100 ? (
              <div className="mx-auto p-5">
                <h1 className="text-center my-2">
                  Uploading Post - {progress}%
                </h1>
                <progress
                  className="text-center form-control"
                  max={100}
                  value={progress}
                ></progress>
              </div>
            ) : (
              <div className="mx-auto p-5   text-center ">
                <i className="fa fa-tick text-success mx-auto my-2"></i>
                <h1 className="text-center my-2">Post Uploaded successfully</h1>
                <Link
                  to={"/admin/dashboard/posts"}
                  className="my-2 mx-auto btn btn-primary"
                >
                  See Posts
                </Link>
              </div>
            )
          ) : (
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
                <Form.Control
                  type="text"
                  name="imageUrl"
                  placeholder="Image Link..."
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                ></Form.Control>
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
          )}
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};
export default AddPostShopMusic;
