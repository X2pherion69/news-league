import React from "react";
import { connect } from "react-redux";
import { selectItem } from "../../redux/new/new.selectors";
import ReactPlayer from "react-player";
import "./new-item-detail.styles.scss";

const NewItemDetail = ({ item }) => {
  const {
    titles,
    description,
    imageUrl,
    videolink,
    content,
    imagecontent,
    secondcontent,
    secondimagecontent,
  } = item;

  return (
    <div className="new-item-detail">
      <div className="details">
        <div className="titles-description">
          <h2>{titles}</h2>
          <span>{description}</span>
        </div>
        <div
          className="img-titles"
          style={{ backgroundImage: `url(${imageUrl})` }}
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
            url={`${videolink}`}
          ></ReactPlayer>
          <p>{content}</p>
          <div
            className="img-content"
            style={{ backgroundImage: `url(${imagecontent})` }}
          ></div>
          <p>{secondcontent}</p>
          <div
            className="img-content"
            style={{ backgroundImage: `url(${secondimagecontent})` }}
          ></div>
          <p></p>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  item: selectItem(ownProps.match.params.itemId)(state),
});
export default connect(mapStateToProps)(NewItemDetail);
