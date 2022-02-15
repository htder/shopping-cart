import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage.js';
import Shoppage from './components/Shoppage.js';
import Cart from './components/Cart.js';
import Toolbar from './components/Toolbar.js';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Toolbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shoppage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </BrowserRouter>
  );
}

export default RouteSwitch;
