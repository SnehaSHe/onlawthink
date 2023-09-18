import React from "react";
import { useNavigate } from "react-router-dom";

function HomeJudge({ isLawyerAuthenticated }) {
  const navigate = useNavigate();

  if (!isLawyerAuthenticated) {
    // If the lawyer is not authenticated, redirect to "/"
    navigate("/");
    return null; // Return null or a loading indicator while the redirect is happening
  }

  return (
    <>
      <p>Hi</p>
      {/* Add the rest of your content here */}
    </>
  );
}

export default HomeJudge;
