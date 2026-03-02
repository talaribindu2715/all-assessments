import "./Wishlist.css";

function Wishlist() {
  return (
    <div className="wishlist">
      <h1>Your Wishlist</h1>

      <div className="wishlist-grid">
        <div className="wishlist-card">
          <img src="/images/teddy.jpg" alt="Teddy Bear" />
          <h3>Teddy Bear</h3>
          <p>₹1200</p>
          <button>Remove</button>
        </div>

        <div className="wishlist-card">
          <img src="/images/puzzle.jpg" alt="Puzzle Game" />
          <h3>Puzzle Game</h3>
          <p>₹900</p>
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;

// import "./Wishlist.css";

// function Wishlist(){

// return(

//     <>

//     <h2 class="wi">My Wishlist</h2>

//   <ul>

//     <li>Teddy Bear</li>

//     <li>Remote Control Car</li>

//     <li>Building Blocks</li>

//     <li>Drawing Kit</li>

//   </ul>

//   <p class="wish">Add your favorite toys and buy them later 🧸</p>

//     </>

// );

// }

// export default Wishlist;        
// import "./Wishlist.css";
// function Wishlist(){
//     return(
//         <>
//         <h2 class="wi">My Wishlist</h2>
//       <ul>
//         <li>Teddy Bear</li>
//         <li>Remote Control Car</li>
//         <li>Building Blocks</li>
//         <li>Drawing Kit</li>
//       </ul>
//       <p class="wish">Add your favorite toys and buy them later 🧸</p>
//         </>
//     );
// }

// export default Wishlist;