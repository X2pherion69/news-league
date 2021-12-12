import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { doReply } from "../../redux/post/post.actions";

const ReplyForm = ({ comments, currentPost, index }) => {
  const [openReplyForm, setOpenReplyForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reply, setReply] = useState("");
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
      if (!reply) return toast.dark("Please Add Comment!");

      const data = {
        admin: isLoggedIn,
        reply,
        email: currentUser.email,
        name: currentUser.displayName,
        replies: [],
        userId: currentUser.id,
      };
      dispatch(
        doReply(data, currentPost.postId, currentPost.postData.comment, index)
      );
      setReply("");
    } else {
      if (!reply || !name || !email)
        return toast.dark("Please fulfill _blankspace!");
      const data = {
        admin: isLoggedIn,
        reply,
        email,
        name,
        replies: [],
        userId: null,
      };
      dispatch(
        doReply(data, currentPost.postId, currentPost.postData.comment, index)
      );
      setReply("");
      setEmail("");
      setName("");
    }
  };
  return (
    <>
      {openReplyForm ? (
        <form onSubmit={handleSubmit}>
          {isLoggedIn ? (
            <>
              <div className="form-group mb-2">
                <textarea
                  placeholder="Do reply..."
                  className="form-control"
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group mt-4">
                <button type="submit" className="btn text-primary me-3">
                  Reply
                </button>
                <button
                  type="button"
                  className="btn text-danger"
                  onClick={() => setOpenReplyForm(false)}
                >
                  Cancel
                </button>
              </div>
            </>
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
                  placeholder="Do reply..."
                  className="form-control"
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group mt-4">
                <button type="submit" className="btn text-primary me-3">
                  Reply
                </button>
                <button
                  type="button"
                  className="btn text-danger"
                  onClick={() => setOpenReplyForm(false)}
                >
                  Cancel
                </button>
              </div>
            </>
          )}
        </form>
      ) : (
        <button
          type="button"
          onClick={() => setOpenReplyForm(true)}
          className="btn text-primary"
        >
          Reply
        </button>
      )}
    </>
  );
};
export default ReplyForm;
