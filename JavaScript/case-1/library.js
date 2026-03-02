// Initialize books
if(!localStorage.getItem("books")){
  localStorage.setItem("books", JSON.stringify([
    {title:"React Essentials", issued:false},
    {title:"Node.js Handbook", issued:false},
    {title:"Python Basics", issued:false},
    {title:"CSS Mastery", issued:false}
  ]));
}

function showPage(id){
  document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function signup(){
  if(!sname.value || !semail.value || !spassword.value){
    signupMsg.innerText="All fields required";
    return;
  }
  localStorage.setItem("user", JSON.stringify({
    email: semail.value,
    password: spassword.value
  }));
  signupMsg.innerText="Signup successful!";
}

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

function loadBooks(){
  let books = JSON.parse(localStorage.getItem("books"));
  bookList.innerHTML="";
  books.forEach((b,i)=>{
    bookList.innerHTML+=`
      <div class="card">
        <h3>${b.title}</h3>
        <p>Status: ${b.issued?"Issued":"Available"}</p>
        <button onclick="issueBook(${i})" ${b.issued?"disabled":""}>Issue</button>
      </div>`;
  });
}
loadBooks();

function issueBook(i){
  let books = JSON.parse(localStorage.getItem("books"));
  books[i].issued=true;
  localStorage.setItem("books",JSON.stringify(books));
  loadBooks();
  loadIssued();
}

function loadIssued(){
  let books = JSON.parse(localStorage.getItem("books"));
  issuedList.innerHTML="";
  books.forEach((b,i)=>{
    if(b.issued){
      issuedList.innerHTML+=`
      <div class="card">
        <h3>${b.title}</h3>
        <button onclick="returnBook(${i})">Return</button>
      </div>`;
    }
  });
}
loadIssued();

function returnBook(i){
  let books = JSON.parse(localStorage.getItem("books"));
  books[i].issued=false;
  localStorage.setItem("books",JSON.stringify(books));
  loadBooks();
  loadIssued();
}
