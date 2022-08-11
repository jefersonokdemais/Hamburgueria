import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { GlobalStyle } from "./styles/global";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
