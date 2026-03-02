import "./Cart.css";

function Cart() {
  return (
    <div className="cart">
      <h1>Your Cart</h1>

      <div className="cart-grid">
        <div className="cart-card">
          <img src="/images/car.jpg" alt="Toy Car" />
          <div className="cart-details">
            <h3>Toy Car</h3>
            <p>Price: ₹800</p>
            <p>Quantity: 1</p>
          </div>
          <button>Remove</button>
        </div>

        <div className="cart-card">
          <img src="/images/blocks.jpg" alt="Building Blocks" />
          <div className="cart-details">
            <h3>Building Blocks</h3>
            <p>Price: ₹1500</p>
            <p>Quantity: 2</p>
          </div>
          <button>Remove</button>
        </div>
      </div>

      <div className="cart-total">
        <h2>Total: ₹3800</h2>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
