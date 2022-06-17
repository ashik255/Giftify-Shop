import './App.css';
import ProductCard from './components/ProductCard/ProductCard';
import Shop from './components/Shop/Shop';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage></HomePage>
      
      {/* <Shop></Shop> */}
      <ProductCard></ProductCard>
    </div>
  );
}

export default App;
