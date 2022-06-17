import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// import Shop from './components/Shop/Shop';
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <HomePage></HomePage>
      
      {/* <Shop></Shop> */}
      <ProductCard></ProductCard>
    </div>
=======
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route path="/home">
          <HomePage></HomePage>
        </Route>
        <Route path="/shop">
          {/* <Shop></Shop> */}
        </Route>
      </Switch>
    </Router>
>>>>>>> 73ea59fc55669e3ebfbbdee22c510ed3b6815945
  );
}

export default App;
