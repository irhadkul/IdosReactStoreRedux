import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { miniCart } from "./reducers/miniCart";
const store = createStore(miniCart, composeWithDevTools());
export default store;
