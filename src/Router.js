import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./containers/Navbar-container.css";

function routing() {
  return (
    <Router>
      <div>
        <Route path="/" />
        <Route path="/users" />
        <Route path="/contact" />
      </div>
    </Router>
  );
}
export default routing;
