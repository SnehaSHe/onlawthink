import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({isLoggedIn}) => {
  // Initialize isLoggedIn state with true or false based on your initial requirement


  // Function to set isLoggedIn to false when Home link is clicked
  const handleHomeClick = () => {
    setIsLoggedIn(false);
  };

  // Function to set isLoggedIn to false when Log Out link is clicked
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-purple-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="text-3xl font-bold text-pink-400">ONLAWTHINK!</div>
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
          {isLoggedIn ? (
            <Link
              to="/"
              className="hover:text-pink-400 transition duration-300"
              onClick={handleLogoutClick}
            >
              Log Out
            </Link>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
