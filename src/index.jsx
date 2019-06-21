import React from "react";
import ReactDOM from "react-dom";
import StoreApp from "./containers/StoreApp";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
    <StoreApp />
  </Provider>,
  document.getElementById("root")
);
