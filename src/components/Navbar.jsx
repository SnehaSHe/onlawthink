import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-purple-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-pink-400">ONLAWTHINK!</div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-pink-400 transition duration-300">
            Home
          </a>
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
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-pink-400 transition duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12a3 3 0 100-6 3 3 0 000 6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M22 21a10 10 0 11-20 0 10 10 0 0120 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
