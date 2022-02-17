import React, {useState} from 'react';
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
  
  return (
    <div className="card">
      <div>
        <h1>{props.name}</h1>
        <p className="price">{props.price}</p>
        <p>{props.desc}</p>
        <div className="quantity">
          <button onClick={increaseQuantity}>plus</button>
          <input type="number" value={quantity} onChange={handleChange}/>
          <button onClick={decreaseQuantity}>minus</button>
        </div>
        <p><button onClick={() => addToCart()}>Add to Cart</button></p>
      </div>
    </div>
  )
}

export default Card;
