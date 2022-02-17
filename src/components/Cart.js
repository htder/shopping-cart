import data from '../data.json';


const Cart = (props) => {

  const itemCards = {};

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

  return (
    <div>
      {console.log(getQuantityItem("Apple"))}
      {console.log(calculateTotalItem("Apple"))}
      <h1>Cart</h1>
      {console.log(props.basket)}
    </div>
  );
};

export default Cart;
