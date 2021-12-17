import React from "react";
import "./new-item.styles.scss";
import { useHistory } from "react-router-dom";
const NewItem = ({ item }) => {
  const { titles, description, imageUrl } = item;
  const history = useHistory();
  const handleClicked = (data) => {
    const DataId = data.id.toString();
    if (DataId[0] == "1") {
      history.push("news/tournaments" + `/${data.id}`);
    } else if (DataId[0] == "2") {
      history.push("news/videos" + `/${data.id}`);
    } else {
      history.push("news/updates" + `/${data.id}`);
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
