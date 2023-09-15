import React from "react";

function Login() {
  return (
    <div className="min-h-screen bg-pink-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-darkpurple mb-6">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="userType"
            className="block text-sm font-medium text-gray-700"
          >
            User Type
          </label>
          <select
            id="userType"
            name="userType"
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="customer">User</option>
            <option value="admin">Lawyer</option>
          </select>
        </div>
        <button className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
