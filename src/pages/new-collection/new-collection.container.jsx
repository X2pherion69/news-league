import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/new/new.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import NewCollectionPage from "./new-collection";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const newCollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(NewCollectionPage);

export default newCollectionPageContainer;
