import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "../../firebase/firebase.utils";
import { doComment } from "../../redux/post/post.actions";

const CommentForm = ({ currentPost }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const { isLoggedIn, currentUser } = useSelector(
    (state) => ({
      isLoggedIn: state.user.isLoggedIn,
      currentUser: state.user.currentUser,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      if (!comment) return toast.dark("Please Add Comment!");

      const data = {
        admin: isLoggedIn,
        comment,
        email: currentUser.email,
        name: currentUser.displayName,
        replies: [],
        userId: currentUser.id,
      };
      dispatch(
        doComment(data, currentPost.postId, currentPost.postData.comment)
      );
      setComment("");
    } else {
      if (!comment || !name || !email)
        return toast.dark("Please fulfill _blankspace!");
      const data = {
        admin: isLoggedIn,
        comment,
        email,
        name,
        replies: [],
        userId: null,
      };
      dispatch(
        doComment(data, currentPost.postId, currentPost.postData.comment)
      );
      setComment("");
      setEmail("");
      setName("");
    }
  };

  return (
    <form className="w-100 pe-5" onSubmit={handleSubmit}>
      {isLoggedIn ? (
        <div className="form-group mb-2">
          <textarea
            className="form-control"
            placeholder="Comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
      ) : (
        <>
          <div className="form-group d-flex mb-2 gap-2">
            <input
              type="text"
              className="form-control"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-4">
            <textarea
              className="form-control"
              placeholder="Comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
        </>
      )}
      <div className="form-group d-flex mb-2 gap-2">
        <input
          type="submit"
          className="form-control btn btn-primary"
          value="Comment"
        />
      </div>
      <ToastContainer />
    </form>
  );
};
export default CommentForm;
