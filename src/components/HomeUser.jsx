import React from "react";
import { Link, Navigate } from "react-router-dom";

function HomeUser({ isUserAuthenticated }) {
  // If user is not authenticated, redirect to "/"
  if (!isUserAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Welcome, User!</h1>
      <div className="space-y-4">
        <Link to="/all-lawyers">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mr-3">
            Show All Lawyers
          </button>
        </Link>
        <Link to="/search-lawyer-by-case">
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 mr-3">
            Search Lawyer by Case Domain
          </button>
        </Link>
        <Link to="/search-lawyer-by-location">
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-purple-600">
            Search Lawyer by Location
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeUser;
