import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Shop from './components/Shop.js';
import Cart from './components/Cart.js';
import Home from './components/Home.js';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
