import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../../redux/post/post.actions";
import { useHistory } from "react-router-dom";
import { Card, Container, Row, Col, CardGroup } from "react-bootstrap";
import CustomButton from "../../custom-button/custom-button.component";

const ShopPost = () => {
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
      dispatch(fetchPost());
    }
  }, [isLoading, dispatch]);

  const myPosts = posts;

  const ItemMap = myPosts.map((pst) => (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${pst.postData.imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="name">Tên sản phẩm : {pst.postData.name}</span>
        <span className="price">Giá : {pst.postData.price}$</span>
      </div>
      <CustomButton inverted>Add to Cart</CustomButton>
    </div>
  ));
  return ItemMap;
};
export default ShopPost;
