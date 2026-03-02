// Sample products
let products = [
  {name:"Apple", price:100, stock:true},
  {name:"Banana", price:50, stock:true},
  {name:"Rice", price:200, stock:false},
  {name:"Milk", price:60, stock:true}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// Page navigation
function showPage(id){
  document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Signup
function signup(){
  if(!sname.value || !semail.value || !spassword.value || !scpassword.value){
    signupMsg.innerText="All fields required";
    return;
  }
  if(spassword.value!==scpassword.value){
    signupMsg.innerText="Passwords do not match";
    return;
  }
  localStorage.setItem("user", JSON.stringify({email:semail.value, password:spassword.value}));
  signupMsg.innerText="Signup successful!";
}

// Login
function login(){
  let user = JSON.parse(localStorage.getItem("user"));
  if(user && lemail.value===user.email && lpassword.value===user.password){
    localStorage.setItem("loggedIn","true");
    loginMsg.innerText="Login success!";
    loginLink.style.display="none";
    signupLink.style.display="none";
    logoutBtn.style.display="block";
    showPage("home");
  }else{
    loginMsg.innerText="Invalid login";
  }
}

function logout(){
  localStorage.removeItem("loggedIn");
  location.reload();
}

// Products
function loadProducts(){
  productList.innerHTML="";
  products.forEach((p,i)=>{
    productList.innerHTML+=`
      <div class="card">
        <h3>${p.name}</h3>
        <p>Price: ₹${p.price}</p>
        <p>${p.stock?"In Stock":"Out of Stock"}</p>
        <button onclick="addToCart(${i})" ${!p.stock?"disabled":""}>Add to Cart</button>
        <button onclick="addToWishlist(${i})">Wishlist</button>
      </div>`;
  });
}
loadProducts();

function searchProducts(){
  let q = searchBox.value.toLowerCase();
  productList.innerHTML="";
  products.filter(p=>p.name.toLowerCase().includes(q)).forEach((p,i)=>{
    productList.innerHTML+=`
      <div class="card">
        <h3>${p.name}</h3>
        <p>Price: ₹${p.price}</p>
        <p>${p.stock?"In Stock":"Out of Stock"}</p>
        <button onclick="addToCart(${i})" ${!p.stock?"disabled":""}>Add to Cart</button>
        <button onclick="addToWishlist(${i})">Wishlist</button>
      </div>`;
  });
}

// Cart
function addToCart(i){
  cart.push(products[i]);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(products[i].name+" added to cart!");
  loadCart();
}

function loadCart(){
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartList.innerHTML="";
  let total=0;
  cart.forEach((c,i)=>{
    total+=c.price;
    cartList.innerHTML+=`
      <div class="card">
        <h3>${c.name}</h3>
        <p>Price: ₹${c.price}</p>
        <button onclick="removeFromCart(${i})">Remove</button>
      </div>`;
  });
  cartTotal.innerText="Total: ₹"+total;
}
loadCart();

function removeFromCart(i){
  cart.splice(i,1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// Wishlist
function addToWishlist(i){
  wishlist.push(products[i]);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  alert(products[i].name+" added to wishlist!");
  loadWishlist();
}

function loadWishlist(){
  wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlistList.innerHTML="";
  wishlist.forEach((w,i)=>{
    wishlistList.innerHTML+=`
      <div class="card">
        <h3>${w.name}</h3>
        <p>Price: ₹${w.price}</p>
        <button onclick="moveToCart(${i})">Move to Cart</button>
        <button onclick="removeFromWishlist(${i})">Remove</button>
      </div>`;
  });
}
loadWishlist();

function moveToCart(i){
  cart.push(wishlist[i]);
  localStorage.setItem("cart", JSON.stringify(cart));
  removeFromWishlist(i);
  loadCart();
}

function removeFromWishlist(i){
  wishlist.splice(i,1);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  loadWishlist();
}

// Billing
function printBill(){
  let total=0;
  cart.forEach(c=>total+=c.price);
  billSummary.innerHTML=`
    <p>Subtotal: ₹${total}</p>
    <p>Tax (10%): ₹${(total*0.1).toFixed(2)}</p>
    <p><b>Total: ₹${(total*1.1).toFixed(2)}</b></p>
  `;
  alert("Bill printed!");
}

// Contact form
function contactSubmit(){
  if(!cname.value || !cemail.value || !cmsg.value){
    contactMsg.innerText="All fields required";
    return;
  }
  if(!/\S+@\S+\.\S+/.test(cemail.value)){
    contactMsg.innerText="Invalid email";
    return;
  }
  contactMsg.innerText="Message sent successfully!";
}
