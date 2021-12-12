import React from "react";

import NewItem from "../new-item/new-item";

import "./new-preview.styles.scss";

const NewPreview = ({ title, items }) => (
  <div className="collection-new-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 3)
        .map((item) => (
          <NewItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default NewPreview;
