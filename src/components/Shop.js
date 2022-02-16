import '../App.css';
import Card from './Card.js';
import data from '../data.json';

const Shop = () => {
  const itemCards = data.map(item => {
    return (
      <Card 
        key={item.name}
        name={item.name}
        price={item.price}
        desc={item.desc}
      />
    )
  });

  return (
    <div>
      <h1>Shop</h1>
      <div className="card-container">
        {itemCards}
      </div>
    </div>
  );
};

export default Shop;
