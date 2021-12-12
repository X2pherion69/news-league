import * as types from "./post.types";
const INITIAL_STATE = {
  posts: [],
  isLoading: true,
};

const postReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.SET_LOADING:
      state = { ...state, isLoading: payload };
      return state;
    case types.ADD_POST:
      state = { ...state, posts: [...state.posts, payload] };
      return state;
    case types.SET_POST:
      state = { ...state, posts: payload };
      return state;
    case types.RESET_POST:
      state = INITIAL_STATE;
      return state;
    case types.ADD_COMMENT:
      const findPost = state.posts.find((pst) => pst.postId === payload.postId);
      const comment = findPost.postData.comment;
      comment.push(payload.comments);
      findPost.postData.comment = comment;
      state = {
        ...state,
        posts: state.posts.map((pt) =>
          pt.postId === payload.postId ? findPost : pt
        ),
      };
      return state;
    case types.ADD_REPLY:
      const oldPost = state.posts.find((pst) => pst.postId === payload.postId);
      oldPost.postData.comment = comment;

      state = {
        ...state,
        posts: state.posts.map((pt) =>
          pt.postId === payload.postId ? findPost : pt
        ),
      };
      return state;
    default:
      return state;
  }
};

export default postReducer;
