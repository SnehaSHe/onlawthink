import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({
  isUserAuthenticated,
  isLawyerAuthenticated,
  isJudgeAuthenticated,
  setIsUserAuthenticated,
  setIsLawyerAuthenticated,
  setIsJudgeAuthenticated,
}) => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Clear authentication states and navigate to "/"
    setIsUserAuthenticated(false);
    setIsLawyerAuthenticated(false);
    setIsJudgeAuthenticated(false);
    navigate("/");
  };

  let homeLink;

  if (isUserAuthenticated) {
    homeLink = "/home-user";
  } else if (isLawyerAuthenticated) {
    homeLink = "/home-lawyer";
  } else if (isJudgeAuthenticated) {
    homeLink = "/home-judge";
  } else {
    homeLink = "/";
  }

  return (
    <nav className="bg-purple-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="text-4xl font-bold text-pink-400">ONLAWTHINK!</div>
        </Link>
        <Link to={homeLink}>
          <div className="text-4xl font-bold text-pink-400">Home</div>
        </Link>
        <Link to="/">
          <div className="text-4xl font-bold text-pink-400">Contact</div>
        </Link>
        <Link to="/">
          <div className="text-4xl font-bold text-pink-400">Helpline</div>
        </Link>
        <div className="flex space-x-4">
          {/* ... (other links) ... */}
          {isUserAuthenticated ||
          isLawyerAuthenticated ||
          isJudgeAuthenticated ? (
            <button
              className="hover:text-pink-400 transition duration-300"
              onClick={handleLogout}
            >
              Log Out
            </button>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
