import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-new-item.styles.scss";

const MenuNewItem = ({
  subtitle,
  title,
  imageUrl,
  history,
  linkUrl,
  match,
}) => (
  <div
    className="menu-item"
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">{subtitle}</span>
    </div>
  </div>
);

export default withRouter(MenuNewItem);
