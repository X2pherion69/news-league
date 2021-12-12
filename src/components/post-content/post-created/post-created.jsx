import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../../redux/post/post.actions";
import { user } from "../../../redux/user/user.actions";
import { Table, Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const AllPosts = () => {
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
      dispatch(fetchPost());
    }
  }, [isLoading, dispatch]);
  const myPosts = posts && posts.filter((pst) => pst.postData.id);
  return myPosts.map((pst, index) => (
    <Card>
      <Card.Header>
        <Table striped bordered hover size="sm" key={index}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>imageUrl</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{pst.postData.id}</td>
              <td>{pst.postData.name}</td>
              <td>{pst.postData.price}</td>
              <td>
                {pst.postData.imageUrl}
                <div
                  className="img"
                  style={{ backgroundImage: `url(${pst.postData.imageUrl})` }}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Header>
      <Card.Footer>
        <div className="d-flex w-60 px-5 py-2 align-items-center justify-content-between">
          <Button
            type="button"
            variant="primary"
            bg="primary"
            className="form-control mx-5"
            onClick={() => history.push(`/post/${pst.postId}`)}
          >
            See Post
          </Button>
          <Button
            className="form-control mx-5"
            type="button"
            variant="outline-primary"
            bg="primary"
          >
            Edit Post
          </Button>
          <Button
            type="button"
            variant="danger"
            className="form-control mx-5"
            bg="danger"
          >
            Delete Post
          </Button>
        </div>
      </Card.Footer>
    </Card>
  ));
};
export default AllPosts;
