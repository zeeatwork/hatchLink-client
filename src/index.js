import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { ResourceListProvider } from "./contexts/ResourceListContext";

import App from "./components/App/App";
import "./index.css";


ReactDOM.render(
  <Router>
    <ResourceListProvider>
      <App />
    </ResourceListProvider>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
