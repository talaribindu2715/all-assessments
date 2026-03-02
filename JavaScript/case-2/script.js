// Sample products
let products = [
  {name:"Apple", price:100, stock:true},
  {name:"Banana", price:50, stock:true},
  {name:"Rice", price:200, stock:false},
  {name:"Milk", price:60, stock:true}
];

let cart = [];

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
      </div>`;
  });
}

// Cart
function addToCart(i){
  cart.push(products[i]);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(products[i].name+" added to cart!");
}

function loadCart(){
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartList.innerHTML="";
  let total=0
}