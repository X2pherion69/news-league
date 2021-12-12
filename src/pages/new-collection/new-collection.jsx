import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/new/new.selectors";
import NewItem from "../../components/new-item/new-item";
import "./new-collection.styles.scss";

const NewCollectionPage = ({ newcollection }) => {
  const { title, items } = newcollection;
  return (
    <div className="collection-new-page">
      <h2 className="title">{title}</h2>

      <div className="items">
        {items.map((item) => (
          <NewItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  newcollection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(NewCollectionPage);
