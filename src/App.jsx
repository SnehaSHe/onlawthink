import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import HomeUser from "./components/User/HomeUser";
import UserLogin from "./components/User/UserLogin";
import UserSignUp from "./components/User/UserSignUp";
import HomeLawyer from "./components/Lawyer/HomeLawyer";
import LawyerLogin from "./components/Lawyer/LawyerLogin";
import LawyerInfo from "./components/Lawyer/LawyerInfo";
import HomeJudge from "./components/Judge/HomeJudge";
import JudgeSignUp from "./components/Judge/JudgeSignUp";
import JudgeLogin from "./components/Judge/JudgeLogin";
import LawyerSignUp from "./components/Lawyer/LawyerSignUp";
import LawyerByLocation from "./components/User/LawyerByLocation";
import AllLawyers from "./components/User/AllLawyers";
import LawyerRequest from "./components/Lawyer/LawyerRequest";
import AcceptedUser from "./components/Lawyer/AcceptedUser";
import Navbar from "./components/Navbar";
import "./index.css";
import LawyerByCaseDomain from "./components/User/LawyerByCaseDomain";

export default function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [isLawyerAuthenticated, setIsLawyerAuthenticated] = useState(false);
  const [isJudgeAuthenticated, setIsJudgeAuthenticated] = useState(false);

  return (
    <div>
      <Navbar
        isUserAuthenticated={isUserAuthenticated}
        isLawyerAuthenticated={isLawyerAuthenticated}
        isJudgeAuthenticated={isJudgeAuthenticated}
        setIsUserAuthenticated={setIsUserAuthenticated}
        setIsLawyerAuthenticated={setIsLawyerAuthenticated}
        setIsJudgeAuthenticated={setIsJudgeAuthenticated}
      />
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              isUserAuthenticated={isUserAuthenticated}
              isLawyerAuthenticated={isLawyerAuthenticated}
              isJudgeAuthenticated={isJudgeAuthenticated}
              setIsUserAuthenticated={setIsUserAuthenticated}
              setIsLawyerAuthenticated={setIsLawyerAuthenticated}
              setIsJudgeAuthenticated={setIsJudgeAuthenticated}
            />
          }
        />
        <Route path="/user" element={<UserSignUp />} />
        <Route path="/lawyer" element={<LawyerSignUp />} />
        <Route path="/judge" element={<LawyerSignUp />} />
        <Route path="/judge" element={<JudgeSignUp />} />
        <Route
          path="/search-lawyer-by-location"
          element={
            <LawyerByLocation isUserAuthenticated={isUserAuthenticated} />
          }
        />
        <Route
          path="/search-lawyer-by-case"
          element={
            <LawyerByCaseDomain isUserAuthenticated={isUserAuthenticated} />
          }
        />
        <Route
          path="/user/login"
          element={
            <UserLogin
              isUserAuthenticated={isUserAuthenticated}
              setIsUserAuthenticated={setIsUserAuthenticated}
            />
          }
        />
        <Route
          path="/home-user"
          element={<HomeUser isUserAuthenticated={isUserAuthenticated} />}
        />
        <Route
          path="/all-lawyers"
          element={<AllLawyers isUserAuthenticated={isUserAuthenticated} />}
        />
        <Route
          path="/lawyer/login"
          element={
            <LawyerLogin
              isLawyerAuthenticated={isLawyerAuthenticated}
              setIsLawyerAuthenticated={setIsLawyerAuthenticated}
            />
          }
        />
        <Route
          path="/judge/login"
          element={
            <JudgeLogin
              isJudgeAuthenticated={isJudgeAuthenticated}
              setIsJudgeAuthenticated={setIsJudgeAuthenticated}
            />
          }
        />
        <Route
          path="/home-lawyer"
          element={<HomeLawyer isLawyerAuthenticated={isLawyerAuthenticated} />}
        />
        <Route
          path="/lawyer-info"
          element={<LawyerInfo isLawyerAuthenticated={isLawyerAuthenticated} />}
        />
        <Route
          path="/lawyer-requests"
          element={<LawyerRequest isLawyerAuthenticated={isLawyerAuthenticated} />}
        />
        <Route
          path="/lawyer-accepted-users"
          element={<AcceptedUser isLawyerAuthenticated={isLawyerAuthenticated} />}
        />

        
      </Routes>
    </div>
  );
}
