import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { doUpdatePostData } from "../../../redux/post/post.actions";

const EditPost = () => {
  const { postId } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.posts);
  const currentPost = posts.find((pst) => pst.postId === postId);

  useEffect(() => {
    if (currentPost) {
      setName(currentPost.postData.name);
      setPrice(currentPost.postData.price);
    }
  }, [currentPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) {
      return toast.warning("Please fulfill the field!");
    }

    const data = { name, price };

    dispatch(doUpdatePostData(postId, currentPost, data));
  };

  return (
    <Container>
      <Row>
        <h1 className="display-3 text-center mt-4">Edit Post {postId}</h1>
        <Col md={6} className="mx-auto mt-5">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              className="mt-5 mb-3"
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
            <Form.Control
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></Form.Control>
            <Button type="submit" className="mt-4 form-control" variant="dark">
              Update Post
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default EditPost;
