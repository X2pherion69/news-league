import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { doUpdateNewPostData } from "../../../redux/post/post.actions";

const EditNewPost = () => {
  const { postId } = useParams();

  const [titles, setTitles] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [imagecontent, setImagecontent] = useState("");
  const [secondcontent, setSecondcontent] = useState("");
  const [secondimagecontent, setSecondimagecontent] = useState("");
  const [videolink, setVideolink] = useState("");

  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.posts);
  const currentPost = posts.find((pst) => pst.postId === postId);

  useEffect(() => {
    if (currentPost) {
      setTitles(currentPost.postData.titles);
      setDescription(currentPost.postData.description);
      setContent(currentPost.postData.content);
      setImagecontent(currentPost.postData.imagecontent);
      setSecondcontent(currentPost.postData.secondcontent);
      setSecondimagecontent(currentPost.postData.secondimagecontent);
      setVideolink(currentPost.postData.videolink);
    }
  }, [currentPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !titles ||
      !description ||
      !content ||
      !imagecontent ||
      !secondcontent ||
      !secondimagecontent ||
      !videolink
    ) {
      return toast.warning("Please fill in all fields!");
    }

    const data = {
      titles,
      description,
      content,
      imagecontent,
      secondcontent,
      secondimagecontent,
      videolink,
    };

    dispatch(doUpdateNewPostData(postId, currentPost, data));
  };

  return (
    <Container>
      <Row>
        <h1 className="display-3 text-center mt-4">Edit Post {postId}</h1>
        <Col md={6} className="mx-auto mt-5">
          <Form onSubmit={handleSubmit}>
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
            <Button type="submit" className="mt-4 form-control" variant="dark">
              Update Post
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default EditNewPost;
