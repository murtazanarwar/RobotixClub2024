import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../api/authApi';
import "./signup.css"

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    // Reset messages
    setError('');
    setSuccess('');

    // Basic validation
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Here you would typically make an API call to your backend
      // For this example, we'll simulate an API call with a delay
      const response = await signup({ username, email, password });
      setSuccess('Signup successful!');
      setError('');
      navigate('/home'); 
      // console.log(response.data);
    } catch (error) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className='signup'>
      <h2>Signup</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSignup}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}