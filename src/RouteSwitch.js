import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import Shoppage from './components/Shoppage.js';
import Cart from './components/Cart.js';
import Home from './components/Home.js';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} /> 
          <Route path="/shop" element={<Shoppage />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default RouteSwitch;
