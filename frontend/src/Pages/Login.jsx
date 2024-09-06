import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[rgb(11,26,51)] p-4">
      <div className="w-full max-w-md bg-slate-800 shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-white text-sm font-semibold mb-2">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/" className="text-white hover:text-blue-700 text-sm font-semibold">Back to Homepage</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
