import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/authApi';
import { Link } from 'react-router-dom';
import "../styles/Login.css"
import { useDispatch, useSelector } from 'react-redux';
import { signInSuccess, signInFailure } from '../redux/user/userSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const [userId, setUserid] = useState();
  const [username, setUsername] = useState();

  const dispatch = useDispatch(null);
  const navigate = useNavigate(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });

      if (response.data.token) {
        // Save the token in localStorage
        localStorage.setItem('token', response.data.token);
        setSuccess('Login successful!');
        setError('');
        setUserid(response.data.userId)
        setUsername(response.data.username)
        navigate('/');
        // console.log('Token saved:', response.data.token);

      } else {
        setError('No token received');
        console.log('err');

      }
    } catch (error) {
      setError('Login failed: ' + (error.response?.data?.message || error.message));
      setSuccess('');
      signInFailure('failed')

    }
  };
  dispatch(signInSuccess([userId, username ]))

  return (
    <>
      <div className="login-form max-w-md mx-auto bg-gray-900 p-8 mt-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-yellow-500 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600 transition duration-300 transform-gpu animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            Login
          </button>

          {/* Forgot Password */}
          {/* <div className="form-footer text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a href="/forgot-password" className="text-yellow-500 hover:underline">Forgot Password?</a>
          </div> */}
          <div
            className="social-login text-center animate-fade-in mt-6"
            style={{ animationDelay: '0.4s' }}
          >
            <p className="text-gray-600">Or login with:</p>
            <div className="social-buttons mt-4">
              <button
                className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
              >
                Google
              </button>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-yellow-500">
              New User? <Link to="/sign-up" className="text-yellow-500 hover:underline">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;