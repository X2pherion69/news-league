import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Container, Row, Image } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import ReplyFormNew from "../../replyForm/replyFormNew";
import ShowReplies from "../../replyForm/ShowReply";
import CommentNew from "../../comments/comments-news";
import ReactPlayer from "react-player";

const SeePostNew = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { isLoading, posts, isLoggedIn } = useSelector(
    (state) => ({
      isLoading: state.posts.isLoading,
      posts: state.posts.posts,
      isLoggedIn: state.user.isLoggedIn,
    }),
    shallowEqual
  );
  const currentPost =
    posts.length > 0 && posts.find((pst) => pst.postId === postId);
  if (isLoading) {
    return (
      <Container>
        <Row>
          <Col>
            <h2 className="text-center my-5 display-2">Loading Post...</h2>
          </Col>
        </Row>
      </Container>
    );
  }
  if (!isLoading && !currentPost) {
    return (
      <Container>
        <Row>
          <Col>
            <h2 className="text-center my-5 display-2">No Post Found!</h2>
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <Container fluid className="px-0" style={{ overflowX: "hidden" }}>
      <Row>
        <Col md={12} className=" mt-4">
          <Image
            style={{ height: "100vh", witdh: "100%" }}
            src={currentPost.postData.imageUrl}
          />
        </Col>
      </Row>

      <Row className="align-items-center justify-content-between">
        <Col md={6} className="py-5 px-5">
          <p className="display-4">{currentPost.postData.titles}</p>
          <p className="display-6">{currentPost.postData.description}</p>
        </Col>

        <Col
          md={5}
          className="d-flex gap-1 align-items-center justify-content-end pr-5"
        >
          {currentPost.postData.category.map((cat, index) => (
            <p
              className="py-1 bg-primary text-white px-2 mr-3"
              key={index + 55}
            >
              {cat}
            </p>
          ))}
        </Col>
        <Col md={12} className="py-5 px-5">
          <ReactPlayer
            className="Video"
            width="62.5rem"
            height="70vh"
            playing={true}
            controls={true}
            url={`${currentPost.postData.videolink}`}
          ></ReactPlayer>
        </Col>
        <Col md={12} className=" mt-4">
          <Image
            style={{ height: "650px", witdh: "100%" }}
            src={currentPost.postData.imagecontent}
          />
        </Col>
        <Col md={6} className="py-5 px-5">
          <p className="display-7">Nội dung: {currentPost.postData.content}</p>
        </Col>
        <Col md={12} className=" mt-4">
          <Image
            style={{ height: "650px", witdh: "100%" }}
            src={currentPost.postData.secondimagecontent}
          />
        </Col>
        <Col md={6} className="py-5 px-5">
          <p className="display-7">
            Nội dung: {currentPost.postData.secondcontent}
          </p>
        </Col>
      </Row>
      <CommentNew currentPost={currentPost} />
      <div className="col-md-12">
        {currentPost.postData.comment.map((comments, index) => (
          <div key={index * 9999} className="w-100 border card px-5 py-2 my-2">
            <div className="d-flex">
              <p className="my-0 text-capitalize text-white bg-dark py-2 me-4 px-3 rounded-circle">
                {comments.name[0]}
              </p>
              <div>
                <p className="my-0 card-title">{comments.name}</p>
                <p className="my-0 card-text">{comments.email}</p>
              </div>
            </div>
            <div className="d-flex gap-1 align-items-center justify-content-end">
              {comments.admin && (
                <p className="bg-dark text-white py-1 px-2">Admin</p>
              )}
            </div>
            <p className="mt-4">{comments.comment}</p>
            <ShowReplies allReplies={comments.replies} />
            <ReplyFormNew
              comments={comments}
              currentPost={currentPost}
              index={index}
            />
          </div>
        ))}
      </div>
      <ToastContainer />
    </Container>
  );
};
export default SeePostNew;
