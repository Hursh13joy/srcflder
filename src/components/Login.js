import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Form validation
  const validateForm = () => {
    if (!username || !password) {
      setErrorMessage('Please fill in all fields.');
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Redirect to home page if login is successful
      navigate('/home');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="login-container p-4 border rounded shadow-lg">
        <h2 className="text-center mb-4">Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </div>
          {errorMessage && <div id="error-message" className="text-danger text-center mb-3">{errorMessage}</div>}
          <div className="links text-center">
            <a href="/forgot_password">Forgot Password?</a>
            <span> | </span>
            <a href="/signup">Create an Account</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
