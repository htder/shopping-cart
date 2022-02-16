import React, {useState} from 'react';
const Card = (props) => {
  const [quantity, setQuantity] = useState(0);

  const handleChange = e => {
    setQuantity(e.target.value);
  }

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  }

  const decreaseQuantity = () => {
    setQuantity(prev => prev > 0 ? prev - 1 : 0);
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
        <p><button>Add to Cart</button></p>
      </div>
    </div>
  )
}

export default Card;
