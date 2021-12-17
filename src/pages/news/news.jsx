import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/new/new.actions";
import newCollectionPageContainer from "../new-collection/new-collection.container";
import newCollectionsOverviewContainer from "../../components/new-overview/new-overview.container";
import newItemDetailContainer from "../../components/new-item-detail/new-item-detail.container";
import NewPostDetail from "../../components/post-content/post-created/newPostDetail";

class newPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match } = this.props;
    return (
      <div className="news-page">
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            component={newCollectionsOverviewContainer}
          />
          <Route
            exact
            path={`${match.path}/:collectionId`}
            component={newCollectionPageContainer}
          />
          <Route
            path={`${match.path}/:collectionId/:itemId`}
            component={newItemDetailContainer}
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(newPage);
