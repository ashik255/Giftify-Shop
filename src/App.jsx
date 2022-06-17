import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// import Shop from './components/Shop/Shop';
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
          {/* <Shop></Shop> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
