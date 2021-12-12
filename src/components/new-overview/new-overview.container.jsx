import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsCollectionFetching } from "../../redux/new/new.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import NewOverview from "./new-overview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const newCollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(NewOverview);

export default newCollectionsOverviewContainer;
