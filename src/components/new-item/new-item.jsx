import React from "react";
import "./new-item.styles.scss";
import { useHistory } from "react-router-dom";
const NewItem = ({ item }) => {
  const { titles, description, imageUrl } = item;
  const history = useHistory();
  const handleClicked = (data) => {
    if (history.location.pathname == "/news") {
      history.push("news/tournaments" + `/${data.id}`);
    } else if (history.location.pathname == "/news") {
      history.push("news/videos" + `/${data.id}`);
    } else {
      history.push(history.location.pathname + `/${data.id}`);
    }
  };
  return (
    <div>
      <div className="collection-new-item" onClick={() => handleClicked(item)}>
        <div
          className="image-new"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="collection-new-footer">
          <span className="titles-new">{titles} </span>
          <p className="description-new">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewItem;
