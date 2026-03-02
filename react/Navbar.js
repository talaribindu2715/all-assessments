import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">FunLand Toys🧸</h2>
      <a><Link to="/">Home</Link></a>
      <a><Link to="/about">About</Link></a>
      <a><Link to="/contact">Contact</Link></a>
      <a><Link to="/login">Login</Link></a>
      <a><Link to="/signup">Signup</Link></a>
      <a><Link to="/register">Register</Link></a>
      <a><Link to="/shopbyage">Shop by Age</Link></a>
      <a><Link to="/product">Products</Link></a>
      <a><Link to="/wishlist">Wishlist</Link></a>
      <a><Link to="/cart">Cart</Link></a>
    </nav>
  );
}

export default Navbar;
