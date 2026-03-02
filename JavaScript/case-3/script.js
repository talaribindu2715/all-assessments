// Doctors data
let doctors = [
  {name:"Dr. Smith", specialization:"Cardiologist", experience:"10 years", available:true},
  {name:"Dr. Lee", specialization:"Dermatologist", experience:"8 years", available:false},
  {name:"Dr. Patel", specialization:"Pediatrician", experience:"12 years", available:true}
];

let appointments = [];

// Page navigation
function showPage(id){
  document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Signup
function signup(){
  if(!sname.value || !semail.value || !spassword.value || !scpassword.value || !sphone.value){
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
  localStorage.setItem("patient", JSON.stringify({
    email: semail.value,
    password: spassword.value,
    name: sname.value
  }));
  signupMsg.innerText="Signup successful!";
}

// Login
function login(){
  let patient = JSON.parse(localStorage.getItem("patient"));
  if(patient && lemail.value===patient.email && lpassword.value===patient.password){
    localStorage.setItem("loggedIn","true");
    loginMsg.innerText="Login success!";
    loginLink.style.display="none";
    signupLink.style.display="none";
    logoutBtn.style.display="block";
    showPage("home");
    aname.value = patient.name; // auto-fill appointment name
  }else{
    loginMsg.innerText="Invalid login";
  }
}

function logout(){
  localStorage.removeItem("loggedIn");
  location.reload();
}

// Doctors
function loadDoctors(){
  doctorList.innerHTML="";
  adoctor.innerHTML="";
  doctors.forEach((d,i)=>{
    doctorList.innerHTML+=`
      <div class="card">
        <h3>${d.name}</h3>
        <p>${d.specialization}</p>
        <p>Experience: ${d.experience}</p>
        <p>${d.available?"Available":"Not Available"}</p>
      </div>`;
    // Add to appointment dropdown if available
    if(d.available){
      let opt = document.createElement("option");
      opt.value = d.name;
      opt.textContent = d.name + " ("+d.specialization+")";
      adoctor.appendChild(opt);
    }
  });
}
loadDoctors();

// Search doctors
function searchDoctors(){
  let q = searchDoctor.value.toLowerCase();
  doctorList.innerHTML="";
  doctors.filter(d=>d.name.toLowerCase().includes(q) || d.specialization.toLowerCase().includes(q))
    .forEach(d=>{
      doctorList.innerHTML+=`
        <div class="card">
          <h3>${d.name}</h3>
          <p>${d.specialization}</p>
          <p>Experience: ${d.experience}</p>
          <p>${d.available?"Available":"Not Available"}</p>
        </div>`;
    });
}

// Book appointment
function bookAppointment(){
  if(!aname.value || !adoctor.value || !adate.value || !atime.value || !areason.value){
    alert("All fields required");
    return;
  }
  let appt = {
    patient: aname.value,
    doctor: adoctor.value,
    date: adate.value,
    time: atime.value,
    reason: areason.value
  };
  appointments.push(appt);
  localStorage.setItem("appointments", JSON.stringify(appointments));
  loadAppointments();
  alert("Appointment booked successfully!");
}

// Load appointments
function loadAppointments(){
  appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  apptTable.innerHTML = "<tr><th>Doctor</th><th>Date</th><th>Time</th><th>Reason</th><th>Action</th></tr>";
  appointments.forEach((a,i)=>{
    apptTable.innerHTML+=`
      <tr>
        <td>${a.doctor}</td>
        <td>${a.date}</td>
        <td>${a.time}</td>
        <td>${a.reason}</td>
        <td><button onclick="cancelAppointment(${i})">Cancel</button></td>
      </tr>`;
  });
}
loadAppointments();

// Cancel appointment
function cancelAppointment(i){
  appointments.splice(i,1);
  localStorage.setItem("appointments", JSON.stringify(appointments));
  loadAppointments();
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
