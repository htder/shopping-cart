import data from '../data.json';

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

  const itemCards = () => {
    const prices = getPriceMap();
    return Object.keys(props.basket[0])
      .map(item => {
        return (
          <div key={item}>
            <h3>{item}</h3>
            <p>Quantity: {getQuantityItem(item)}</p>
            <p>Price: {prices.get(item)}</p>
            <p>Total Price: {calculateTotalItem(item)}</p>
          </div>
        );
    });
  };

  return (
    <div>
      <h1>Cart</h1>
      {itemCards()}
    </div>
  );
};

export default Cart;
