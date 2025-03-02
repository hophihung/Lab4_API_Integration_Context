import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!email) tempErrors.email = "Email is required";
    if (!password) tempErrors.password = "Password is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleLogin = () => {
    if (validate()) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome Back, Dude</h2>
        
        {/* Google Login Button */}
        <Button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 mb-4">
          <i className="fab fa-google mr-2"></i> Login with Google
        </Button>

        <div className="flex items-center my-6 w-full max-w-sm">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-4 text-sm text-gray-500">Or login with email</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Login Form */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email Address</label>
            <input
              className={`shadow appearance-none border ${errors.email ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="email"
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              className={`shadow appearance-none border ${errors.password ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input className="form-checkbox h-4 w-4 text-blue-600" type="checkbox" />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
          </div>

          {/* Login Button */}
          <Button
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700"
            type="button"
            onClick={handleLogin}
          >
            Login
          </Button>
        </form>

        {/* Sign-up Link */}
        <p className="text-center text-gray-500 text-sm mt-6">
      Don't have an account?{' '}
      <span
        onClick={() => navigate('/signup')}
        className="text-blue-600 hover:text-blue-800 cursor-pointer"
      >
        Sign Up
      </span>
    </p>
      </div>
    </div>
  );
};

export default LoginPage;