import * as types from "./post.types";
import { firestore, storage } from "../../firebase/firebase.utils";
import { toast } from "react-toastify";
import { Toast } from "react-bootstrap";
import { useDispatch } from "react-redux";

const dispatch = useDispatch;

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
const updatePost = (data) => ({
  type: types.UPDATE_POST,
  payload: data,
});
const deletePost = (data) => ({
  type: types.DELETE_POST,
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
  dispatch(setLoading(true));
};
export const doPostNew = (data, imageUrl, setProgress) => (dispatch) => {
  firestore
    .collection("/newcollections/tournaments/items")
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
            .collection("/newcollections/tournaments/items")
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
  dispatch(setLoading(true));
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
export const fetchPostNew = () => (dispatch) => {
  dispatch(setLoading(true));
  firestore
    .collection("/newcollections/tournaments/items")
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
      dispatch(addComment({ comments, postId }));
    })
    .catch((err) => console.log(err));
};

export const doCommentNew = (comments, postId, prevComments) => (dispatch) => {
  const oldComments = prevComments;
  oldComments.push(comments);

  firestore
    .collection("/newcollections/tournaments/items")
    .doc(postId)
    .update({
      comment: oldComments,
    })
    .then(() => {
      toast.success("Successfully comment!");
      dispatch(addComment({ comments, postId }));
    })
    .catch((err) => console.log(err));
};

export const doReply = (reply, prevComments, postId, index) => (dispatch) => {
  const oldComments = prevComments;
  const replies = oldComments[index].replies;
  replies.push(reply);
  oldComments[index].replies = replies;
  firestore
    .collection("/collections/Figure/items")
    .doc(postId)
    .update({
      comment: oldComments,
    })
    .then(() => {
      toast.success("Successfully reply!");
      dispatch(addReply({ oldComments, postId }));
    })
    .catch((err) => console.log(err));
};

export const doReplyNew =
  (reply, prevComments, postId, index) => (dispatch) => {
    const oldComments = prevComments;
    const replies = oldComments[index].replies;
    replies.push(reply);
    oldComments[index].replies = replies;
    firestore
      .collection("/newcollections/tournaments/items")
      .doc(postId)
      .update({
        comment: oldComments,
      })
      .then(() => {
        toast.success("Successfully reply!");
        dispatch(addReply({ oldComments, postId }));
      })
      .catch((err) => console.log(err));
  };

export const doUpdatePostData = (postId, prevPost, data) => (dispatch) => {
  const { name, price } = data;
  prevPost.postData.name = name;
  prevPost.postData.price = price;

  firestore
    .collection("/collections/Figure/items")
    .doc(postId)
    .update({
      name,
      price,
    })
    .then(() => {
      dispatch(updatePost({ postId, updatedPost: prevPost }));
      Toast.success("Success Update!");
    })
    .catch((err) => console.log(err));
};

export const doUpdateNewPostData = (postId, prevPost, data) => (dispatch) => {
  const {
    titles,
    description,
    content,
    imagecontent,
    secondcontent,
    secondimagecontent,
    videolink,
  } = data;
  prevPost.postData.titles = titles;
  prevPost.postData.description = description;
  prevPost.postData.content = content;
  prevPost.postData.imagecontent = imagecontent;
  prevPost.postData.secondcontent = secondcontent;
  prevPost.postData.secondimagecontent = secondimagecontent;
  prevPost.postData.videolink = videolink;

  firestore
    .collection("/newcollections/tournaments/items")
    .doc(postId)
    .update({
      titles,
      description,
      content,
      imagecontent,
      secondcontent,
      secondimagecontent,
      videolink,
    })
    .then(() => {
      dispatch(updatePost({ postId, updatedPost: prevPost }));
      Toast.success("Success Update!");
    })
    .catch((err) => console.log(err));
};

export const doDeletePost = (postId, imageUrl) => {
  storage
    .refFromURL(imageUrl)
    .delete()
    .then(() => {
      firestore
        .collection("/collections/Figure/items")
        .doc(postId)
        .delete()
        .then(() => {
          dispatch(deletePost({ postId }));
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};
export const doDeletePostNew = (postId, imageUrl) => {
  storage
    .refFromURL(imageUrl)
    .delete()
    .then(() => {
      firestore
        .collection("/newcollections/tournaments/items")
        .doc(postId)
        .delete()
        .then(() => {
          dispatch(deletePost({ postId }));
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};
