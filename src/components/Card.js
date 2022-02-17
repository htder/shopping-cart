import React, {useState} from 'react';
import apple from '../images/apple.jpg';
import pear from '../images/pear.jpg';
import orange from '../images/orange.jpg';
import peach from '../images/peach.jpg';

const Card = (props) => {

  function getQuantityItem(item) {
    let quantity = 0;
    for (const key in props.basket[0]) {
      if (key === item) {
        quantity += +props.basket[0][key];
      }
    }
    return +quantity;
  }

  const [quantity, setQuantity] = useState(getQuantityItem(props.name));

  const handleChange = e => {
    setQuantity(+e.target.value);
  }

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  }

  const decreaseQuantity = () => {
    setQuantity(prev => prev > 0 ? prev - 1 : 0);
  }

  function addToCart() {
    props.quantityChange(props.name, quantity);
  }
  
  let icon;
  if (props.name === "Apple") {
    icon = apple;
  } else if (props.name === "Pear") {
    icon = pear;
  } else if (props.name === "Orange") {
    icon = orange;
  } else {
    icon = peach;
  }

  const formatter = new Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2
  });

  return (
    <div className="card">
      <div>
        <img src={icon} style={{width: "100%"}} alt="apple"/>
        <h1 className="item-name">{props.name}</h1>
        <p className="price">{formatter.format(props.price)}</p>
        <p><i>{props.desc}</i></p>
        <div className="quantity">
          <input type="number" value={quantity} onChange={handleChange} className="input-increment"/>
          <div className="button-increment">
            <button onClick={decreaseQuantity} className="increment">-</button>
            <button onClick={increaseQuantity} className="increment">+</button>
          </div> 
        </div>
        <div className="add-button">
          <button className="add-to-cart-button" onClick={() => addToCart()}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Card;
