const Menu: React.FC = () => {
  const order = (item: string) => {
    alert(`You ordered ${item} ☕`);
  };

  return (
    <div className="page">
      <h1>Our Coffee Menu</h1>
      <ul>
        <li onClick={() => order("Espresso")}>Espresso</li>
        <li onClick={() => order("Cappuccino")}>Cappuccino</li>
        <li onClick={() => order("Latte")}>Latte</li>
        <li onClick={() => order("Cold Brew")}>Cold Brew</li>
      </ul>
      <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348" />
    </div>
  );
};

export default Menu;
