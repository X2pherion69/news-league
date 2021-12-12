import * as types from "./post.types";
import { firestore, storage } from "../../firebase/firebase.utils";
import { toast } from "react-toastify";

const setLoading = (data) => ({
  type: types.SET_LOADING,
  payload: data,
});

const addPost = (data) => ({
  type: types.ADD_POST,
  payload: data,
});

const getPost = (data) => ({
  type: types.SET_POST,
  payload: data,
});

const resetPost = () => ({
  type: types.RESET_POST,
});
const addComment = (data) => ({
  type: types.ADD_COMMENT,
  payload: data,
});
const addReply = (data) => ({
  type: types.ADD_REPLY,
  payload: data,
});
export const doPost = (data, imageUrl, setProgress) => (dispatch) => {
  firestore
    .collection("/collections/Figure/items")
    .add(data)
    .then(async (res) => {
      const document = await res.get();
      const postData = { data: document.data(), id: document.id };
      const uploadRef = storage.ref(`newcollections/${document.id}`);

      uploadRef.put(imageUrl).on(
        "state_change",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (err) => {
          console.log(err);
        },
        async () => {
          const url = await uploadRef.getDownloadURL();
          firestore
            .collection("/collections/Figure/items")
            .doc(document.id)
            .update({
              imageUrl: url,
            })
            .then(() => {
              postData.data.imageUrl = url;
              dispatch(addPost(postData));
              toast.success("Post created successfully !!");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      );
    })
    .catch((err) => {
      console.log(err);
    });
  //   dispatch(setLoading(true));
};

export const fetchPost = () => (dispatch) => {
  dispatch(setLoading(true));
  firestore
    .collection("/collections/Figure/items")
    .get()
    .then((posts) => {
      const allPosts = [];

      posts.forEach((post) => {
        const data = { postData: post.data(), postId: post.id };
        allPosts.push(data);
      });
      dispatch(getPost(allPosts));
      dispatch(setLoading(false));
    })
    .catch((err) => {
      console.log(err);
      toast.error(err);
    });
};

export const doComment = (comments, postId, prevComments) => (dispatch) => {
  const oldComments = prevComments;
  oldComments.push(comments);

  firestore
    .collection("/collections/Figure/items")
    .doc(postId)
    .update({
      comment: oldComments,
    })
    .then(() => {
      toast.success("Successfully comment!");
      dispatch({ comments, postId });
    })
    .catch((err) => console.log(err));
};

export const doReply = (reply, prevComments, postId, index) => (dispatch) => {
  const oldComments = prevComments;
  const replies = oldComments[index].replies;
  replies.push(reply);
  oldComments[index].replies = replies;
  // firestore
  //   .collection("/collections/Figure/items")
  //   .doc(postId)
  //   .update({
  //     comment: oldComments,
  //   })
  //   .then(() => {
  //     toast.success("Successfully comment!");
  //     dispatch({ comments, postId });
  //   })
  //   .catch((err) => console.log(err));
};
