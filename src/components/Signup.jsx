import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-pink-100 pt-10">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center"></div>
        <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-8 space-y-6">
          <div className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
            Sign Up
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
                placeholder="First Name"
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="lastName"
                className="block text-gray-700 font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
              placeholder="Email Address"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
              placeholder="Password"
            />
          </div>
          <div>
            <label
              htmlFor="accountType"
              className="block text-gray-700 font-bold mb-2"
            >
              Account Type
            </label>
            <select
              id="accountType"
              name="accountType"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
            >
              <option value="personal">Personal</option>
              <option value="business">Business</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <button
              type="button"
              className="w-full bg-purple-800 text-white font-bold py-2 rounded-md hover:bg-purple-900"
            >
              Create Account
            </button>
          </div>
          <Link to="/login">
            <button className="w-full mt-4 bg-purple-800 text-white font-bold py-2 rounded-md hover:bg-purple-700">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
