import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ authorizedRole }) => {
  // Initialize isLoggedIn state with true or false based on your initial requirement

  // Function to set isLoggedIn to false when Home link is clicked
  const handleHomeClick = () => {
    setAuthorizedRole(false);
  };

  // Function to set isLoggedIn to false when Log Out link is clicked
  const handleLogoutClick = () => {
    setAuthorizedRole(false);
  };

  return (
    <nav className="bg-purple-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="text-4xl font-bold text-pink-400">ONLAWTHINK!</div>
        </Link>
        <div className="flex space-x-4">
          {/* Add an onClick handler to the Home link */}
          <Link
            to="/"
            className="hover:text-pink-400 transition duration-300"
            onClick={handleHomeClick}
          >
            Home
          </Link>
          <a href="#" className="hover:text-pink-400 transition duration-300">
            Contact
          </a>
          <a href="#" className="hover:text-pink-400 transition duration-300">
            Locate
          </a>
          <a href="#" className="hover:text-pink-400 transition duration-300">
            About
          </a>
          <a href="#" className="hover:text-pink-400 transition duration-300">
            Help
          </a>
          {authorizedRole ? (
            <Link
              to="/"
              className="hover:text-pink-400 transition duration-300"
              onClick={handleLogoutClick}
            >
              Log Out
            </Link>
          ) : null}
        </div>
        {authorizedRole ? (
          <div className="text-white text-center">
            {authorizedRole === "lawyer" ? (
              <div className="text-2xl">LAWYER PORTAL</div>
            ) : authorizedRole === "user" ? (
              <div className="text-2xl">USER PORTAL</div>
            ) : authorizedRole === "judge" ? (
              <div className="text-2xl">JUDGE PORTAL</div>
            ) : (
              <div>{authorizedRole} Portal</div>
            )}
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
