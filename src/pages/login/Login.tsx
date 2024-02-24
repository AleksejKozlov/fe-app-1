import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('Sorry, something is wrong. Try again.');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 max-w-md w-full space-y-4 rounded-xl bg-white shadow-md">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm" htmlFor="username">Username:</label>
            <input
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              type="text"
              id="username"
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm" htmlFor="password">Password:</label> 
            <input
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              type="password"
              id="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </div>

          <div>
            <button
              className="w-full py-2 px-4 bg-indigo-500 rounded-md text-white hover:bg-indigo-600"
              type="submit"
            >Login</button>
          </div>

          <div>
            {error && <p className="text-red-500">{error}</p>}  
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;