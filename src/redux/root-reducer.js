import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";
import newReducer from "./new/new.reducer";
import directoryNewReducer from "./directory-new/directory-new.reducer";
import postReducer from "./post/post.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  news: newReducer,
  directoryNew: directoryNewReducer,
  posts: postReducer,
});

export default persistReducer(persistConfig, rootReducer);
