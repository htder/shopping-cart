import '../App.css'
import icon from '../images/fruit.png';

const Home = () => {
  return (
    <div className="home-container">
      <img src={icon} alt="icon" />
      <h2 className="heading">Pine Tree Fruit Shop</h2>
    </div>
  );
};

export default Home;
