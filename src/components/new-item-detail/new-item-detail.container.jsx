import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsCollectionFetching } from "../../redux/new/new.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import NewItemDetail from "./new-item-detail";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const newItemDetailContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(NewItemDetail);

export default newItemDetailContainer;
