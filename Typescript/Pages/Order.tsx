import { useState } from "react";

const Order: React.FC = () => {
  const [item, setItem] = useState("Espresso");

  const placeOrder = () => {
    alert(`Your order for ${item} has been placed ☕`);
  };

  return (
    <div className="page">
      <h1>Order Coffee ☕</h1>
      <p>Select your favorite coffee and place order</p>

      <select onChange={(e) => setItem(e.target.value)}>
        <option>Espresso</option>
        <option>Cappuccino</option>
        <option>Latte</option>
        <option>Cold Brew</option>
        <option>Mocha</option>
      </select>

      <br /><br />

      <button onClick={placeOrder}>Place Order</button>

      <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93" />
    </div>
  );
};

export default Order;
