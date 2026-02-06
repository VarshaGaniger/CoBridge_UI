import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Landmark, Eye, EyeOff, Lock, User } from 'lucide-react';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('user'); // 'user' or 'admin'
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Dummy Authentication Logic
    if (role === 'user') {
      if (id === 'user' && password === 'password') {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('role', 'user');
        navigate('/user-dashboard');
      } else {
        setError('Invalid User credentials.');
      }
    } else if (role === 'admin') {
      if (id === 'admin' && password === 'admin') {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('role', 'admin');
        navigate('/admin-dashboard');
      } else {
        setError('Invalid Admin credentials.');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Header Icon */}
        <div className="icon-wrapper">
          <Landmark className="bank-icon" size={32} />
        </div>

        {/* Title */}
        <h1 className="welcome-text">Welcome Back</h1>
        <p className="subtitle-text">Securely log in to your banking dashboard</p>

        {/* Role Toggle */}
        <div className="role-toggle">
          <button
            type="button"
            className={`toggle-btn ${role === 'user' ? 'active' : ''}`}
            onClick={() => { setRole('user'); setError(''); }}
          >
            User
          </button>
          <button
            type="button"
            className={`toggle-btn ${role === 'admin' ? 'active' : ''}`}
            onClick={() => { setRole('admin'); setError(''); }}
          >
            Admin
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="login-form">
          {/* Username Field */}
          <div className="form-group">
            <label htmlFor="id">Username or Client ID</label>
            <div className="input-wrapper">
              <input
                type="text"
                id="id"
                placeholder="Enter your ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && <div className="error-message">{error}</div>}

          {/* Forgot Password */}
          <div className="forgot-password">
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/forgot-password'); }}>Forgot password?</a>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            <Lock size={16} className="btn-icon" /> Sign In
          </button>

          {/* Sign Up Link */}
          {role === 'user' && (
            <div className="signup-text">
              Don't have an account? <span className="signup-link" onClick={() => navigate('/signup')}>Sign up</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
