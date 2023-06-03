import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CRUD from "./containers/crud";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Root() {
  
  return (
    <CRUD></CRUD>
  );
}

root.render(<Root />);
