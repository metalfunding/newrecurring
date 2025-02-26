import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ManageSubscriptions from "./ManageSubscriptions";
import "./styles.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {isLoggedIn ? (
        <div>
          <nav className="navbar">
            <Link to="/">Dashboard</Link>
            <Link to="/manage">Manage Subscriptions</Link>
            <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>
              Logout
            </button>
          </nav>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/manage" element={<ManageSubscriptions />} />
          </Routes>
        </div>
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </Router>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
