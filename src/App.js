import "./App.css";
import Home from "./Pages/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./Pages/Shared/Menu";

import React from "react";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Notfound from "./Pages/Notfound/Notfound";
import MoreAboutus from "./Pages/MoreAboutus/MoreAboutus";
import Services from "./Pages/Home/Services/Services";

export default function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/aboutus">
          <Aboutus />
        </Route>
        <Route path="/moreaboutus">
          <MoreAboutus />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route exact path="*">
          <Notfound />
        </Route>
      </Switch>
    </Router>
  );
}
