import React from "react";
import About from "./pages/AboutUs/About";
import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";


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
        <Route path="/shop">
          <ShopPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
