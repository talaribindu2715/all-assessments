import React from "react";
import "../Signup/Signup.css";

function Signup() {
  return (
    <div className="signup">
      <h1>Signup</h1>
      <p>Create your account to start shopping with FunLand Toys!</p>

      <form className="signup-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
