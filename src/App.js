import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import shopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout";
import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createtUserProfileDocument } from "./firebase/firebase.utils";
import React from "react";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import newPage from "./pages/news/news";
import postContentPage from "./pages/post-content/post-content";
import AllPosts from "./components/post-content/post-created/post-created";
import AllNewPosts from "./components/post-content/post-created/post-new-created";
import SeePost from "./components/post-content/seePost/SeePost";
import EditPost from "./components/post-content/editPost/editPost";
import SeePostNew from "./components/post-content/seePost/SeeNewPost";
import EditNewPost from "./components/post-content/editPost/editNewPost";
class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createtUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={shopPage} />
          <Route path="/news" component={newPage} />
          <Route exact path={"/post/:postId"} component={() => <SeePost />} />
          <Route path={"/post/:postId/edit"} component={() => <EditPost />} />
          <Route exact path={"/new/:postId"} component={() => <SeePostNew />} />
          <Route path={"/new/:postId/edit"} component={() => <EditNewPost />} />
          <Route exact path="/posttest" component={EditPost} />
          <Route exact path="/adminpost" component={postContentPage} />
          <Route exact path="/adminshoppost" component={AllPosts} />
          <Route exact path="/adminnewpost" component={AllNewPosts} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
