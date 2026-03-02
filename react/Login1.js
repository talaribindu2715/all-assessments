import "../Login1/Login1.css";

function Login1() {
  return (
    <div className="login">
      <h2>Login to FunLand Toys</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="you@example.com" required />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
        />

        <button type="submit">Login</button>
      </form>
      <p className="signup-link">
        Don't have an account? <a href="/signup">Sign up here</a>
      </p>
    </div>
  );
}

export default Login1;

// import './Login1.css';
// import {Link} from "react-router-dom" ;
// function Login1(){
//     return(
//         <>
//         <h2 className="login">Login</h2>
//         <label>Email:</label>
//         <input type="email" placeholder='Email'></input><br/>
//         <label>Password:</label>
//         <input type="password" placeholder='Password'></input><br/>
//         <Link to="/Home1">
//         <button>Login</button>
//         </Link>
//         </>
//     );
// }

// export default Login1;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const UsersTable = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       setUsers(response.data);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Website</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.username}</td>
//               <td>{user.email}</td>
//               <td>{user.phone}</td>
//               <td>{user.website}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UsersTable;
