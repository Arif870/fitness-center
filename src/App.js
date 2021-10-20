import "./App.css";
import Home from "./Pages/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./Shared/Menu";

import React from "react";
import Notfound from "./Pages/Notfound/Notfound";
import MoreAboutus from "./Pages/MoreAboutus/MoreAboutus";
import Services from "./Pages/Home/Services/Services";
import Footer from "./Shared/Footer/Footer";
import Register from "./Pages/Registation/Register";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import AuthProvider from "./Provider/AuthProvider";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import Contact from "./Pages/Contact/Contact";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/moreaboutus">
            <MoreAboutus />
          </Route>
          <PrivateRoute path="/services">
            <Services />
          </PrivateRoute>
          <PrivateRoute path="/singleservice/:title">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="*">
            <Notfound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}
