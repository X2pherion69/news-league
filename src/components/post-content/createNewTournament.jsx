import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doPostNew } from "../../redux/post/post.actions";

const AddDataNews = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [titles, setTitles] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [imagecontent, setImagecontent] = useState("");
  const [secondcontent, setSecondcontent] = useState("");
  const [secondimagecontent, setSecondimagecontent] = useState("");
  const [videolink, setVideolink] = useState("");
  const [category, setCategory] = useState("");
  const [progress, setProgress] = useState("0");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !id ||
      !titles ||
      !description ||
      !imageUrl ||
      !content ||
      !imagecontent ||
      !secondcontent ||
      !secondimagecontent ||
      !videolink ||
      !category
    ) {
      return toast.warning("Please fill in all fields!");
    }

    const data = {
      id: id,
      titles: titles,
      description: description,
      imageUrl: "",
      content: content,
      imagecontent: imagecontent,
      secondcontent: secondcontent,
      secondimagecontent: secondimagecontent,
      videolink: videolink,
      comment: [],
      category: category.split(","),
    };

    dispatch(doPostNew(data, imageUrl, setProgress));
  };
  return (
    <Container>
      <Row>
        <Col md={12} style={{ textAlign: "right" }} className="my-5"></Col>
        <Col md={12} className="mb-3">
          <h1 className="display-3 text-dark text-center">
            Create Contents Tournament
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
            <Form.Group controlId="titles" className="my-2">
              <Form.Control
                type="text"
                name="titles"
                placeholder="titles..."
                value={titles}
                onChange={(e) => setTitles(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="description" className="my-2">
              <Form.Control
                type="text"
                name="description"
                placeholder="description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
            <Form.Group controlId="content" className="my-2">
              <Form.Control
                type="text"
                name="content"
                placeholder="content..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="imagecontent" className="my-2">
              <Form.Control
                type="text"
                name="imagecontent"
                placeholder="imagecontent..."
                value={imagecontent}
                onChange={(e) => setImagecontent(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="secondcontent" className="my-2">
              <Form.Control
                type="text"
                name="secondcontent"
                placeholder="secondcontent..."
                value={secondcontent}
                onChange={(e) => setSecondcontent(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="secondimagecontent" className="my-2">
              <Form.Control
                type="text"
                name="secondimagecontent"
                placeholder="secondimagecontent..."
                value={secondimagecontent}
                onChange={(e) => setSecondimagecontent(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="videolink" className="my-2">
              <Form.Control
                type="text"
                name="videolink"
                placeholder="videolink..."
                value={videolink}
                onChange={(e) => setVideolink(e.target.value)}
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
export default AddDataNews;
