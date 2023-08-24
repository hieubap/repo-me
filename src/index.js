import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import "./style.css";
// import "../assets/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "./redux";
import Header from "./containers/Header";
import Home from "./containers/home";
import ConvertPrivatePhrase from "./containers/tools";
import Ticket from "./containers/Ticket";
import "./space.css";
import "./index2.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Root() {
  return (
    <Provider store={store}>
      {/* <Home></Home> */}
      {/* <ConvertPrivatePhrase></ConvertPrivatePhrase> */}
      <Ticket />
    </Provider>
  );
}

root.render(<Root />);
