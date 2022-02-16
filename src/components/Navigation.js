import { Link, Outlet } from 'react-router-dom';
const Navigation = () => {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;
