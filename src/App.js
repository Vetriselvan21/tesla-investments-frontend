import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Login</Link> | <Link to="/register">Register</Link> | <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;