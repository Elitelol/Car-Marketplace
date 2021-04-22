import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CarList from "./components/CarList";
import Upload from "./components/Upload";
import Register from "./components/Register";
import Login from "./components/Login";
import CarDetails from "./components/CarDetails";

export default function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <main className="container">
        <Switch>
          <Route exact path="/" component={CarList}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/upload" component={Upload}></Route>
          <Route path="/details" component={CarDetails}></Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}
