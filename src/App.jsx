import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/AboutUs/About";
import ProductCard from "./components/ProductCard/ProductCard";
import Banner from "./components/Shop/Banner/Banner";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route exact path="about">
          <About></About>
        </Route>
        <Route path="/home">
          <HomePage></HomePage>
        </Route>
        <Route path="/shop">
          <Banner></Banner>
        </Route>
        <Route path="/shop">
          <ProductCard></ProductCard>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
