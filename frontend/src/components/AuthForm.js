import React, { useState } from 'react';
import API from '../services/api';

function AuthForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false); // NEW: toggle between login/register

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (isRegister) {
        // NEW: registration request
        const res = await API.post('/auth/register', { email, password });
        alert(res.data.message); // "User registered successfully"
      } else {
        // EXISTING login request
        const res = await API.post('/auth/login', { email, password });
        localStorage.setItem('token', res.data.token); // save JWT
        onLogin(email);
      }
    } catch (err) {
      alert(err.response?.data?.message || "Request failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isRegister ? "Register" : "Login"}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit">{isRegister ? "Register" : "Login"}</button>
      {/* NEW: toggle button */}
      <p>
        {isRegister ? "Already have an account?" : "Need an account?"}{" "}
        <button type="button" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "Login here" : "Register here"}
        </button>
      </p>
    </form>
  );
}

export default AuthForm;
