// Sample data
let teams = [
  {name:"Mumbai Indians", captain:"Rohit Sharma", ground:"Wankhede", wins:5, matches:200},
  {name:"Chennai Super Kings", captain:"MS Dhoni", ground:"Chepauk", wins:4, matches:190}
];

let players = [
  {name:"Virat Kohli", team:"RCB", role:"Batsman", matches:220, runs:7000},
  {name:"Jasprit Bumrah", team:"MI", role:"Bowler", matches:120, wickets:150}
];

let matches = [
  {date:"2026-03-15", teams:"MI vs CSK", venue:"Mumbai", result:"Upcoming"},
  {date:"2026-03-18", teams:"RCB vs KKR", venue:"Bangalore", result:"Upcoming"}
];

let points = [
  {team:"MI", matches:10, wins:7, losses:3, points:14},
  {team:"CSK", matches:10, wins:6, losses:4, points:12}
];

// Page navigation
function showPage(id){
  document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Teams
function loadTeams(){
  teamList.innerHTML="";
  teams.forEach(t=>{
    teamList.innerHTML+=`
      <div class="card">
        <h3>${t.name}</h3>
        <p>Captain: ${t.captain}</p>
        <p>Home Ground: ${t.ground}</p>
        <p>Wins: ${t.wins} / Matches: ${t.matches}</p>
      </div>`;
  });
}
loadTeams();

function searchTeams(){
  let q = searchTeam.value.toLowerCase();
  teamList.innerHTML="";
  teams.filter(t=>t.name.toLowerCase().includes(q)).forEach(t=>{
    teamList.innerHTML+=`
      <div class="card">
        <h3>${t.name}</h3>
        <p>Captain: ${t.captain}</p>
        <p>Home Ground: ${t.ground}</p>
        <p>Wins: ${t.wins} / Matches: ${t.matches}</p>
      </div>`;
  });
}

// Players
function loadPlayers(){
  playerList.innerHTML="";
  players.forEach(p=>{
    playerList.innerHTML+=`
      <div class="card">
        <h3>${p.name}</h3>
        <p>Team: ${p.team}</p>
        <p>Role: ${p.role}</p>
        <p>Matches: ${p.matches}</p>
        <p>${p.role==="Bowler" ? "Wickets: "+p.wickets : "Runs: "+p.runs}</p>
      </div>`;
  });
}
loadPlayers();

function searchPlayers(){
  let q = searchPlayer.value.toLowerCase();
  playerList.innerHTML="";
  players.filter(p=>p.name.toLowerCase().includes(q) || p.team.toLowerCase().includes(q)).forEach(p=>{
    playerList.innerHTML+=`
      <div class="card">
        <h3>${p.name}</h3>
        <p>Team: ${p.team}</p>
        <p>Role: ${p.role}</p>
        <p>Matches: ${p.matches}</p>
        <p>${p.role==="Bowler" ? "Wickets: "+p.wickets : "Runs: "+p.runs}</p>
      </div>`;
  });
}

// Matches
function loadMatches(){
  matchList.innerHTML="";
  matches.forEach(m=>{
    matchList.innerHTML+=`
      <div class="card">
        <p>Date: ${m.date}</p>
        <p>${m.teams}</p>
        <p>Venue: ${m.venue}</p>
        <p>Result: ${m.result}</p>
      </div>`;
  });
}
loadMatches();

// Points Table
function loadPoints(){
  pointsTable.innerHTML = "<tr><th>Team</th><th>Matches</th><th>Wins</th><th>Losses</th><th>Points</th></tr>";
  points.sort((a,b)=>b.points-a.points).forEach(p=>{
    pointsTable.innerHTML+=`
      <tr>
        <td>${p.team}</td>
        <td>${p.matches}</td>
        <td>${p.wins}</td>
        <td>${p.losses}</td>
        <td>${p.points}</td>
      </tr>`;
  });
}
loadPoints();

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
