import React from "react";
import About from "./pages/AboutUs/About";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route path="/home">
          <HomePage></HomePage>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/shop">
          <ShopPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
