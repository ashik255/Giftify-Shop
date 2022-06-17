import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import Shop from './components/Shop/Shop';
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route path="/home">
          <HomePage></HomePage>
        </Route>
        <Route path="/shop">
          <ProductCard></ProductCard>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
