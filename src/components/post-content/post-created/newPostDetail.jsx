import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchPostNew } from "../../../redux/post/post.actions";
import { useHistory, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const NewPostDetail = () => {
  const { isLoading, posts } = useSelector(
    (state) => ({
      isLoading: state.posts.isLoading,
      posts: state.posts.posts,
      user: state.user.user_Id,
    }),
    shallowEqual
  );
  const { postId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoading) {
      dispatch(fetchPostNew());
    }
  }, [isLoading, dispatch]);

  const currentPost =
    posts.length > 0 && posts.find((pst) => pst.postId === postId);

  const ItemMap = currentPost.map((pst) => (
    <div className="new-item-detail">
      <div className="details">
        <div className="titles-description">
          <h2>{pst.postData.titles}</h2>
          <span>{pst.postData.description}</span>
        </div>
        <div
          className="img-titles"
          style={{ backgroundImage: `url(${pst.postData.imageUrl})` }}
        ></div>
      </div>
      <div className="container">
        <div className="content">
          <ReactPlayer
            className="Video"
            width="100%"
            height="70vh"
            playing={true}
            controls={true}
            url={`${pst.postData.videolink}`}
          ></ReactPlayer>
          <p>{pst.postData.content}</p>
          <div
            className="img-content"
            style={{ backgroundImage: `url(${pst.postData.imagecontent})` }}
          ></div>
          <p>{pst.postData.secondcontent}</p>
          <div
            className="img-content"
            style={{
              backgroundImage: `url(${pst.postData.secondimagecontent})`,
            }}
          ></div>
          <p></p>
        </div>
      </div>
    </div>
  ));
  return ItemMap;
};
export default NewPostDetail;
