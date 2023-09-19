import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage({
  isUserAuthenticated,
  isLawyerAuthenticated,
  isJudgeAuthenticated,
  setIsUserAuthenticated,
  setIsLawyerAuthenticated,
  setIsJudgeAuthenticated,
}) {
  // Set all authentication states to false when the component loads
  React.useEffect(() => {
    setIsUserAuthenticated(false);
    setIsLawyerAuthenticated(false);
    setIsJudgeAuthenticated(false);
  }, []); // The empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="bg-pink-200 h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-3xl font-bold text-center mb-4">
          Choose Your Role
        </h1>
        <div className="space-y-4">
          <Link
            to="/user"
            className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            User
          </Link>
          <Link
            to="/lawyer"
            className="block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
          >
            Lawyer
          </Link>
          <Link
            to="/judge"
            className="block px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-300"
          >
            Judge
          </Link>
        </div>
      </div>
    </div>
  );
}
