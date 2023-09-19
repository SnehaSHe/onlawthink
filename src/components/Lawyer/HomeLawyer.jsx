import React, { useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";

function HomeLawyer({ isLawyerAuthenticated }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLawyerAuthenticated) {
      // If the lawyer is not authenticated, redirect to "/"
      navigate("/");
    }
  }, [isLawyerAuthenticated, navigate]);


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Welcome, Lawyer!</h1>
      <div className="space-y-4">
        <Link to="/lawyer-info">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            My Info
          </button>
        </Link>
        <Link to="/lawyer-requests">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md">
            My Requests
          </button>
        </Link>
        <Link to="/lawyer-accepted-users">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
            Accepted Users
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeLawyer;
