let employees = [
  {name:"John Doe", id:"E001", dept:"HR", role:"Manager", phone:"1234567890", status:"Active"},
  {name:"Jane Smith", id:"E002", dept:"IT", role:"Developer", phone:"9876543210", status:"Active"}
];

let attendance = [];
let payroll = [
  {name:"John Doe", id:"E001", basic:50000, allowances:10000, deductions:5000},
  {name:"Jane Smith", id:"E002", basic:40000, allowances:8000, deductions:4000}
];

// Page navigation
function showPage(id){
  document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Signup
function signup(){
  if(!sname.value || !semail.value || !spassword.value || !scpassword.value || !srole.value || !sphone.value){
    signupMsg.innerText="All fields required";
    return;
  }
  if(spassword.value!==scpassword.value){
    signupMsg.innerText="Passwords do not match";
    return;
  }
  if(!/^\d{10}$/.test(sphone.value)){
    signupMsg.innerText="Invalid phone number";
    return;
  }
  localStorage.setItem("user", JSON.stringify({
    email:semail.value,
    password:spassword.value,
    name:sname.value,
    role:srole.value,
    phone:sphone.value
  }));
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

// Employees
function loadEmployees(){
  employeeList.innerHTML="";
  employees.forEach((e,i)=>{
    employeeList.innerHTML+=`
      <div class="card">
        <h3>${e.name} (${e.id})</h3>
        <p>Dept: ${e.dept}</p>
        <p>Role: ${e.role}</p>
        <p>Phone: ${e.phone}</p>
        <p>Status: ${e.status}</p>
        <button onclick="deleteEmployee(${i})">Delete</button>
      </div>`;
  });
}
loadEmployees();

function searchEmployees(){
  let q = searchEmp.value.toLowerCase();
  employeeList.innerHTML="";
  employees.filter(e=>e.name.toLowerCase().includes(q) || e.dept.toLowerCase().includes(q)).forEach((e,i)=>{
    employeeList.innerHTML+=`
      <div class="card">
        <h3>${e.name} (${e.id})</h3>
        <p>Dept: ${e.dept}</p>
        <p>Role: ${e.role}</p>
        <p>Phone: ${e.phone}</p>
        <p>Status: ${e.status}</p>
        <button onclick="deleteEmployee(${i})">Delete</button>
      </div>`;
  });
}

function deleteEmployee(i){
  employees.splice(i,1);
  loadEmployees();
}

// Attendance
function markAttendance(){
  let today = new Date().toISOString().split("T")[0];
  employees.forEach(e=>{
    let status = confirm("Mark Present for "+e.name+"?") ? "Present" : "Absent";
    attendance.push({name:e.name, date:today, status:status});
  });
  localStorage.setItem("attendance", JSON.stringify(attendance));
  loadAttendance();
}

function loadAttendance(){
  attendance = JSON.parse(localStorage.getItem("attendance")) || [];
  attendanceTable.innerHTML = "<tr><th>Name</th><th>Date</th><th>Status</th></tr>";
  attendance.forEach(a=>{
    attendanceTable.innerHTML+=`
      <tr>
        <td>${a.name}</td>
        <td>${a.date}</td>
        <td>${a.status}</td>
      </tr>`;
  });
}
loadAttendance();

// Payroll
function loadPayroll(){
  payrollList.innerHTML="";
  payroll.forEach(p=>{
    let net = p.basic + p.allowances - p.deductions;
    payrollList.innerHTML+=`
      <div class="card">
        <h3>${p.name} (${p.id})</h3>
        <p>Basic: ₹${p.basic}</p>
        <p>Allowances: ₹${p.allowances}</p>
        <p>Deductions: ₹${p.deductions}</p>
        <p><b>Net Salary: ₹${net}</b></p>
      </div>`;
  });
}
loadPayroll();

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
