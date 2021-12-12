import React from "react";
import "./post-content.styles.scss";
import PostNewContent from "../../components/post-content/post-new/post-new";
import PostShopContent from "../../components/post-content/post-shop/post-shop";
import AddPostShopData from "../../components/post-content/createShopFigure";
import AddPostShopMusic from "../../components/post-content/createShopMusic";
import AddDataTournament from "../../components/post-content/createNewTournament";
import AddDataVideo from "../../components/post-content/createNewVideo";
import AddDataUpdate from "../../components/post-content/createNewUpdate";
import AllPosts from "../../components/post-content/post-created/post-created";
const postContentPage = () => {
  return (
    <div className="post-content">
      <AddPostShopData />
      <AddPostShopMusic />
      <AddDataTournament />
      <AddDataVideo />
      <AddDataUpdate />
      <PostNewContent />
      <PostShopContent />
      <AllPosts />
    </div>
  );
};
export default postContentPage;
