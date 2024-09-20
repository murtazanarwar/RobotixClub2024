import React, { useState } from 'react';
import { login } from '../../api/authApi';
import "./login.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login({ email, password });

      if (response.data.token) {
        // Save the token in localStorage
        localStorage.setItem('token', response.data.token);
        setSuccess('Login successful!');
        setError('');
        // console.log('Token saved:', response.data.token);
      } else {
        setError('No token received');
      }
    } catch (error) {
      setError('Login failed: ' + (error.response?.data?.message || error.message));
      setSuccess('');
    }
  };

  return (
    <>
      <div className='login'>
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
