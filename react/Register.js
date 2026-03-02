import React from "react";
import "../Register/Register.css";

function Register() {
  return (
    <div className="register">
      <h1>Register</h1>
      <p>Join the FunLand family by registering your account today!</p>

      <form className="register-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Register</button>
      </form>
      <p className="login-link">Already have an account?
        <a href="/login">Login here</a>
      </p>
    </div>
  );
}

export default Register;

// import { Link } from "react-router-dom";
// import "./Register.css";
// function Register(){
//   return (
//     <div className="register-container">
//       <h2 className="re">Register</h2>
//       <label>Username:</label>
//       <input type="text"/><br/>
//       <label>Email:</label>
//       <input type="email"/><br/>
//       <label>Password:</label>
//       <input type="password"/><br/>
//       <Link to="/Login1"><button>Register</button>
//       </Link>
//     </div>
//   );
// }

// export default Register;
