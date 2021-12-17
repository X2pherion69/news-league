import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchPostNew } from "../../../redux/post/post.actions";
import { useHistory } from "react-router-dom";
import ReactPlayer from "react-player";

const NewPost = () => {
  const { isLoading, posts } = useSelector(
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
  const ItemMap = myPosts.map((pst) => (
    <div>
      <div
        className="collection-new-item"
        onClick={() => history.push(`/new/${pst.postId}`)}
      >
        <div
          className="image-new"
          style={{ backgroundImage: `url(${pst.postData.imageUrl})` }}
        />
        <div className="collection-new-footer">
          <span className="titles-new">{pst.postData.titles} </span>
          <p className="description-new">{pst.postData.description}</p>
        </div>
      </div>
    </div>
  ));
  return ItemMap;
};
export default NewPost;
