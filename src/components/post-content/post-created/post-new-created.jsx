import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  doDeletePostNew,
  fetchPostNew,
} from "../../../redux/post/post.actions";
import { Table, Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const AllNewPosts = () => {
  const { isLoading, posts, userId } = useSelector(
    (state) => ({
      isLoading: state.posts.isLoading,
      posts: state.posts.posts,
      user: state.user.user_Id,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (isLoading) {
      dispatch(fetchPostNew());
    }
  }, [isLoading, dispatch]);
  const myPosts = posts;
  return myPosts.map((pst, index) => (
    <div>
      <Table striped bordered hover size="sm" key={index}>
        <thead>
          <tr>
            <th>#</th>
            <th>Titles</th>
            <th>Category</th>
            <th>Description</th>
            <th>imageUrl</th>
            <th>Content</th>
            <th>Image Content</th>
            <th>Second Content</th>
            <th>Second Image Content</th>
            <th>VideoLink</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pst.postData.id}</td>
            <td>{pst.postData.titles}</td>
            <th>{pst.postData.category}</th>
            <td>{pst.postData.description}</td>
            <td>
              {pst.postData.imageUrl}
              <div
                className="img"
                style={{ backgroundImage: `url(${pst.postData.imageUrl})` }}
              />
            </td>
            <td>{pst.postData.content}</td>
            <td>
              {pst.postData.imagecontent}
              <div
                className="img"
                style={{
                  backgroundImage: `url(${pst.postData.imagecontent})`,
                }}
              />
            </td>
            <td>{pst.postData.secondcontent}</td>
            <td>
              {pst.postData.secondimagecontent}
              <div
                className="img"
                style={{
                  backgroundImage: `url(${pst.postData.secondimagecontent})`,
                }}
              />
            </td>
            <td>{pst.postData.videolink}</td>
          </tr>
        </tbody>
      </Table>
      <div className="d-flex w-60 px-5 py-2 align-items-center justify-content-between">
        <Button
          type="button"
          variant="primary"
          bg="primary"
          className="form-control mx-5"
          onClick={() => history.push(`/new/${pst.postId}`)}
        >
          See Post
        </Button>
        <Button
          className="form-control mx-5"
          type="button"
          variant="outline-primary"
          bg="primary"
          onClick={() => history.push(`/new/${pst.postId}/edit`)}
        >
          Edit Post
        </Button>
        <Button
          type="button"
          variant="danger"
          className="form-control mx-5"
          bg="danger"
          onClick={() =>
            dispatch(doDeletePostNew(pst.postId, pst.postData.imageUrl))
          }
        >
          Delete Post
        </Button>
      </div>
    </div>
  ));
};
export default AllNewPosts;
