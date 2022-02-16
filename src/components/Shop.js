import '../App.css';
import Card from './Card.js';

const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
      <div className="card-container">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Shop;
