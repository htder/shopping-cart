import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Shop from './components/Shop.js';
import Cart from './components/Cart.js';
import Home from './components/Home.js';
import data from './data.json';

function RouteSwitch() {
  console.log(data);

  const [basket, setBasket] = useState([{"Apple": 1, "Orange": 2}]);

  function addToBasket(name, quantity) {
    setBasket([{
      ...basket,
      [name]: quantity,
    }]) 
  }

  function getQuantityBasket() {
    let quantity = 0;
    for (const key in basket[0]) {
      quantity += basket[0][key];
    }
    return quantity;
  }

  function getPriceMap() {
    const priceMap = new Map();
    data.map(item => {
      return priceMap.set(item.name, item.price);
    })
    return priceMap;
  }

  function calculateTotalBasket() {
    const prices = getPriceMap();
    let total = 0;

    for (const key in basket[0]) {
      total += +prices.get(key);
    }
    return total;
  }

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart {getQuantityBasket()}</Link>
        <p>Total Price: £{calculateTotalBasket()}</p>
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
