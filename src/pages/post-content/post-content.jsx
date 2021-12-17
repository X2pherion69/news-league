import React from "react";
import "./post-content.styles.scss";
import PostNewContent from "../../components/post-content/post-new/post-new";
import PostShopContent from "../../components/post-content/post-shop/post-shop";
import AddPostShopData from "../../components/post-content/createShopFigure";
import AddDataNews from "../../components/post-content/createNewTournament";
import AllPosts from "../../components/post-content/post-created/post-created";
import AllNewPosts from "../../components/post-content/post-created/post-new-created";
const postContentPage = () => {
  return (
    <div className="post-content">
      <AddPostShopData />
      <AddDataNews />
      <PostNewContent />
      <PostShopContent />
      <AllPosts />
      <AllNewPosts />
    </div>
  );
};
export default postContentPage;
