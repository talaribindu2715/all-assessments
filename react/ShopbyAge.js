import { Link } from "react-router-dom";
import "../ShopbyAge/ShopbyAge.css";

function ShopbyAge() {
  return (
    <div className="shopbyage">
      <h1>Shop By Age</h1>
      <p>Select the perfect toys for your child’s age group.</p>

      <div className="age-categories">
        <div className="age-card">
          <h2>0 - 2 Years</h2>
          <p>Soft toys, rattles, and safe play items.</p>
          <Link to="/product" className="explore-btn">Explore</Link>
        </div>

        <div className="age-card">
          <h2>3 - 5 Years</h2>
          <p>Building blocks, puzzles, and creative toys.</p>
          <Link to="/product" className="explore-btn">Explore</Link>
        </div>

        <div className="age-card">
          <h2>6 - 8 Years</h2>
          <p>Educational games, action figures, and crafts.</p>
          <Link to="/product" className="explore-btn">Explore</Link>
        </div>

        <div className="age-card">
          <h2>9+ Years</h2>
          <p>STEM kits, board games, and advanced puzzles.</p>
          <Link to="/product" className="explore-btn">Explore</Link>
        </div>
      </div>
    </div>
  );
}

export default ShopbyAge;


// import "./ShopbyAge.css";

// function ShopbyAge(){

// return(

//     <>

//     <h1>Welcome To Shop by Age</h1>

//     {/* <h2>ShopbyAge</h2> */}

//     <div class="ShopbyAge">

//     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYxBie4_VM9WqEVZu4l8oWjn0nMxpI73wGtg&s"/>

//     <h3>0-3 Years</h3>

//     <p>Puzzles, toy cars, dolls, drawing kits</p>

//     </div>

//     <div>

//     <h3>4-7 Years</h3>

//     <p>Puzzles, toy cars, dolls, drawing kits</p>

//   </div>

//   <div>

//     <h3>8-12 Years</h3>

//     <p>Board games, science kits, remote cars</p>

//   </div>

//     </>

// );

// }

// export default ShopbyAge;  