import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import App from "components/App";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "state";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);
