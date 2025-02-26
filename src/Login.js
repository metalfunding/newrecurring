import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password123") {
      onLogin();
    } else {
      alert("Invalid credentials! Try again.");
    }
  };

  return (
    <div className="container">
      <h2>Login to Recurring Transaction</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
