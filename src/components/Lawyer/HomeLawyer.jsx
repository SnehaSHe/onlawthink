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
  
  const lawyerID = localStorage.getItem("lawyerId");
  return (
    <>
      <p>Hi Lawyer {lawyerID}</p>
      
    </>
  );
}

export default HomeLawyer;
