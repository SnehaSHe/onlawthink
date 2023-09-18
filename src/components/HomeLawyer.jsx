import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomeLawyer({ isLawyerAuthenticated }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLawyerAuthenticated) {
      // If the lawyer is not authenticated, redirect to "/"
      navigate("/");
    }
  }, [isLawyerAuthenticated, navigate]);

  if (!isLawyerAuthenticated) {
    // You can return null or a loading indicator here, if needed
    return null;
  }

  return (
    <>
      <p>Hi</p>
      {/* Add the rest of your content here */}
    </>
  );
}

export default HomeLawyer;
