import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import cartReducer from "./modules/cart/reducers";
import productsReducer from "./modules/products/reducers";
import userReducer from "./modules/user/reducers";

const reducers = combineReducers({
  produtos: productsReducer,
  cart: cartReducer,
  user: userReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
