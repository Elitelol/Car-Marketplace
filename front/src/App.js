import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CarList from "./components/CarList";
import Details from "./components/Details";
import Upload from "./components/Upload";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={CarList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/upload" component={Upload}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
