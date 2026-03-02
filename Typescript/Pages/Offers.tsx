const Offers: React.FC = () => {
  return (
    <div className="page">
      <h1>Special Offers 🎉</h1>
      <ul>
        <li>Buy 1 Get 1 Free (Monday)</li>
        <li>20% Off Cold Brew</li>
        <li>Free Cookie with Cappuccino</li>
      </ul>
      <button onClick={() => alert("Offer Applied 🎉")}>
        Apply Offer
      </button>
    </div>
  );
};

export default Offers;
