import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducer";
const reducer = combineReducers({ cart: cartReducer });

const middleware = [thunk];

let INITIAL_STATE;
let cartLocalStorage;
if (typeof window !== "undefined") {
  cartLocalStorage = window.localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  INITIAL_STATE = {
    cart: {
      cartItems: cartLocalStorage,
    },
  };
}

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
