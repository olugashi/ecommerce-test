import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";
import "semantic-ui-css/semantic.min.css";
import { Menu } from "semantic-ui-react";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import AdminContainer from "./containers/Admin-container";
import AdminDashboard from "./components/admin/Dashboard";

import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Menu pointing secondary>
          <Menu.Item name="home" as={Link} to="/" />
          <Menu.Item name="contact" as={Link} to="/Contact" />
          <Menu.Item name="about" as={Link} to="/about" />
          <Menu.Item name="admin" as={Link} to="/admin" />
        </Menu>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/admin" component={AdminContainer} />
          <Route path="/loginadmin" component={AdminDashboard} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
