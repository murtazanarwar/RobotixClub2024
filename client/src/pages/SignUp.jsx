import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, signup } from '../api/authApi';
import { Link } from 'react-router-dom';
import "../styles/SignUp.css"
import { signInFailure, signInSuccess } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const [userId, setUserid] = useState()
  
  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await signup({ username, email, password });
      setSuccess('Signup successful!');
      setError('');
      navigate('/log-in')
      // console.log(response.data);
    } catch (error) {
      setError('Signup failed. Please try again.');
    }
  };


  return (
    <div className='signup'>
      <div className="signupWrap">
        <h2>Signup</h2>
        {/* {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>} */}
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
        <div className='haveAcc'>
          <span > Already have an account? </span><Link to="/log-in">Log in</Link>
        </div>
      </div>
    </div>
  );
}