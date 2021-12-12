import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import NewPreview from "../new-preview/new-preview";
import { selectNewCollectionsForPreview } from "../../redux/new/new.selectors";
import "./new-overview.styles.scss";

const NewOverview = ({ newcollections }) => (
  <div className="collections-new-overview">
    {newcollections.map(({ id, ...otherCollectionProps }) => (
      <NewPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  newcollections: selectNewCollectionsForPreview,
});

export default connect(mapStateToProps)(NewOverview);
