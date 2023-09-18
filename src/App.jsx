import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import HomeUser from "./components/HomeUser";
import UserLogin from "./components/UserLogin";
import UserSignUp from "./components/UserSignUp";
import HomeLawyer from "./components/HomeLawyer";
import LawyerLogin from "./components/LawyerLogin";
import HomeJudge from "./components/HomeJudge";
import LawyerSignUp from "./components/LawyerSignUp";
import Navbar from "./components/Navbar";
import "./index.css";

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
        <Route path="/" element={<LandingPage />} />
        <Route path="/user" element={<UserSignUp />} />
        <Route path="/lawyer" element={<LawyerSignUp />} />
        <Route path="/judge" element={<LawyerSignUp />} />
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
          path="/lawyer/login"
          element={
            <LawyerLogin
              isLawyerAuthenticated={isLawyerAuthenticated}
              setIsLawyerAuthenticated={setIsLawyerAuthenticated}
            />
          }
        />
        <Route
          path="/home-lawyer"
          element={<HomeLawyer isLawyerAuthenticated={isLawyerAuthenticated} />}
        />

        <Route path="/judge" element={<HomeJudge />} />
      </Routes>
    </div>
  );
}
