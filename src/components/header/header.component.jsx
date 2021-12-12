import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import CartIcon from "../cart-icon/art-icon";
import CartDropDown from "../cart/cart-dropdown/cart-dropdown";
import { ReactComponent as Logo } from "../../assets/icons8-league-of-legends.svg";
import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/news">
        Fast News
      </Link>
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link
        className="option"
        to={{
          pathname:
            "https://dl.lol.cdn.garenanow.com/games/lolvn/installer/LienMinhHuyenThoai_Install_20211116_j4flrhgp.zip",
        }}
        target="_blank"
      >
        Download
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
