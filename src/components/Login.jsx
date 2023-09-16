import React, { useState } from "react";

function Login({ onLoginSuccess }) {
  const [formData, setFormData] = useState({
    emailAddress: "",
    password: "",
    accountType: "user",
  });

  const [alertMessage, setAlertMessage] = useState(""); 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.message === "Login successful") {
          setAlertMessage("Login successful");
          // Call the onLoginSuccess function to update the login status
          onLoginSuccess();
        } else {
          setAlertMessage("Login failed"); // Handle other responses if needed
        }
      } else {
        setAlertMessage("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setAlertMessage("Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-pink-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-darkpurple mb-6">Login</h2>
        {alertMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md mb-4">
            {alertMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="text"
              id="emailAddress"
              name="emailAddress"
              className="mt-1 p-2 w-full border rounded-md"
              value={formData.emailAddress}
              onChange={handleInputChange}
              required
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
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="AccountType"
              className="block text-sm font-medium text-gray-700"
            >
              User Type
            </label>
            <select
              id="userType"
              name="accountType"
              className="mt-1 p-2 w-full border rounded-md"
              value={formData.accountType}
              onChange={handleInputChange}
            >
              <option value="user">User</option>
              <option value="lawyer">Lawyer</option>
              <option value="judge">Judge</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
