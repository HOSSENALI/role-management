import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/global.css";
import Login from "./components/auth/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./views/users/User";
import Header from "./components/partials/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />

          <Switch>
            <Route path="/users">
              <User />
            </Route>
            {/* <Route path="/dashboard">
              <Users />
            </Route> */}
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
