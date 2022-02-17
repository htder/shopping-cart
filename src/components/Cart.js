import data from '../data.json';
import apple from '../images/apple.jpg';
import pear from '../images/pear.jpg';
import orange from '../images/orange.jpg';
import peach from '../images/peach.jpg';

const Cart = (props) => {

  function getQuantityItem(item) {
    let quantity = 0;
    for (const key in props.basket[0]) {
      if (key === item) {
        quantity += +props.basket[0][key];
      }
    }
    return +quantity;
  }

  function getPriceMap() {
    const priceMap = new Map();
    data.map(item => {
      return priceMap.set(item.name, item.price);
    })
    return priceMap;
  }

  function calculateTotalItem(item) {
    const prices = getPriceMap();
    let total = 0;

    for (const key in props.basket[0]) {
      if (key === item) {
        total += props.basket[0][key] * (+prices.get(key));
      }
    }
    return total;
  }

  function calculateTotalBasket() {
    const prices = getPriceMap();
    let total = 0;

    for (const key in props.basket[0]) {
      if (props.basket[0][key]) {
        total += props.basket[0][key] * (+prices.get(key));
      }
    }
    return total;
  }

  function setImage(item) {
    let image;
    if (item === "Apple") {
      image = apple;
    } else if (item === "Pear") {
      image = pear;
    } else if (item === "Orange") {
      image = orange;
    } else {
      image = peach;
    }
    return image;
  }

  const formatter = new Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2
  });

  const itemCards = () => {
    const prices = getPriceMap();
    return Object.keys(props.basket[0])
      .map(item => {
        const image = setImage(item);
        return (
          <div key={item} className="cart-row">
            <img src={image} alt="fruit" className="cart-image"/>
            <div>
              <h3 className="cart-title">{item}</h3>
              <div className="cart-details">
                <p>Quantity: {getQuantityItem(item)}</p>
                <p>{formatter.format(prices.get(item))}</p>
              </div>
              <p className="cart-total">Total: {formatter.format(calculateTotalItem(item))}</p>
            </div>
          </div>
        );
    });
  };

  return (
    <div className="cart">
      <h1>Your Shopping Cart - Total {formatter.format(calculateTotalBasket())}</h1>
      <div className="cart-container">
        {itemCards()}
      </div>
    </div>
  );
};

export default Cart;
