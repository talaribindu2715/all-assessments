import { Link } from "react-router-dom";
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h2>Brew Bliss ☕</h2>
      <div>
        <Link to="/">Home</Link>        
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/order">Order</Link>  
        <Link to="/gallery">Gallery</Link>
        <Link to="/offers">Offers</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
