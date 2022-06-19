<<<<<<< HEAD
import './App.css';
import About from './pages/AboutUs/About';


function App() {
  return (
   <About></About> 
=======
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
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
>>>>>>> 9c4a9b30fd62b715554bbf4d6095fd423f8b4d8e
  );
}

export default App;
