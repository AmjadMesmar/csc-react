import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Welcome from "./components/sign/welcome.jsx";
import SignUp from "./components/sign/signup";
import Home from "./pages/home";
// import ForgotPassword from "./components/password/forgotPassword";
// import ChangePassword from "./components/password/changePassword";
import Header from "./components/header/header";
import Error from "./pages/404Error.jsx";
// import AuthController from "./components/authController";

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Welcome />
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/home'>
          <Header/>
          <Home />
        </Route>
        <Route path="*">
          <Error />
        </Route>

      </Switch>
    </Router>
  );
};

export default RouterComponent;
