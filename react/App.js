import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Signup from "./Signup/Signup";
import Register from "./Register/Register";
import ShopbyAge from "./ShopbyAge/ShopbyAge";
import Product from "./Product/Product";
import Wishlist from "./Wishlist/Wishlist";
import Cart from "./Cart/Cart";
import Home1 from "./Home1/Home1";
import About1 from "./About1/About1";
import Contact1 from "./Contact1/Contact1";
import Login1 from "./Login1/Login1";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/about" element={<About1 />} />
        <Route path="/contact" element={<Contact1 />} />
        <Route path="/login" element={<Login1 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shopbyage" element={<ShopbyAge />} />
        <Route path="/product" element={<Product />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import Link from './Link/Link';
// import {BrowserRouter} from 'react-router-dom';
// import Navbar from './Navbar/Navbar';
// function App(){
//   return(
//     <>
//     <BrowserRouter>
//     <Navbar/>
//     <Link/>
//     </BrowserRouter>
//     </>
//   );
// }

// export default App;

