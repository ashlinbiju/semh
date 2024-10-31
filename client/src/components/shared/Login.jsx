// src/components/shared/Login.jsx
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { role } = useParams(); // Get the role from the URL (admin/user)

  const handleLogin = (e) => {
    e.preventDefault();
    
    // For simplicity, let's say 'admin' is the username to go to admin routes
    // and anything else goes to user routes.
    if (username === 'admin' && role === 'admin') {
      navigate('/admin/admin-home');
    } else if (role === 'user') {
      navigate('/user/home');
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login as {role.charAt(0).toUpperCase() + role.slice(1)}</h2>
        <div className="input-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
