import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, {
        email,
        username,
        password
      });
      alert('Registration successful');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="username" onChange={e => setUsername(e.target.value)} />
      <input placeholder="email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={register}>Register</button>
    </div>
  );
};

export default Register;