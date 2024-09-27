import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../api/authApi';
import { Link } from 'react-router-dom';
import "./login.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login({ email, password });

      if (response.data.token) {
        // Save the token in localStorage
        localStorage.setItem('token', response.data.token);
        setSuccess('Login successful!');
        setError('');
        navigate('/');
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
      <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="animate-fade-in">Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <div className="form-group animate-slide-up">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group animate-slide-up" style={{animationDelay: '0.1s'}}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button animate-slide-up" style={{animationDelay: '0.2s'}}>
            Login
        </button>
        {/* <div className="form-footer animate-fade-in" style={{animationDelay: '0.3s'}}>
          <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
        </div> */}
        <div className="social-login animate-fade-in" style={{animationDelay: '0.4s'}}>
          <p>Or login with:</p>
          <div className="social-buttons">
            <button className="social-button google">Google</button>
          </div>
        </div>
        <div>
          New User? <Link to="/">Sign Up</Link>
        </div>
      </form>
    </div>

    </>
  );
};

export default Login;
