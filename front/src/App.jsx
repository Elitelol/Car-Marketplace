import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import CarList from "./components/CarList";
import Upload from "./components/Upload";
import Register from "./components/Register";
import Login from "./components/Login";
import CarDetails from "./components/CarDetails";
import authService from "./services/auth.service";

export default function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <main className="container">
        <Switch>
          <Route exact path="/" component={CarList}></Route>
          <Route path="/register" component={Register}>
            {authService.isLoggedIn() && <Redirect to="/" />}
          </Route>
          <Route path="/login" component={Login}>
            {authService.isLoggedIn() && <Redirect to="/" />}
          </Route>
          <Route path="/upload" component={Upload}></Route>
          <Route path="/details/:id" component={CarDetails}></Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}
