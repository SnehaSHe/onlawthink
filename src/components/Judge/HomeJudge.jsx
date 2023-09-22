import React from "react";
import { useNavigate } from "react-router-dom";

function HomeJudge({ isJudgeAuthenticated }) {
  const navigate = useNavigate();

  if (!isJudgeAuthenticated) {
    // If the lawyer is not authenticated, redirect to "/"
    navigate("/");
    return null; // Return null or a loading indicator while the redirect is happening
  }

  return (
    <>
      <div>

        Hello Judge !!!!!!!!
      </div>
      {/* Add the rest of your content here */}
    </>
  );
}

export default HomeJudge;
