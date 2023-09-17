import ReactDOM from "react-dom/client";
import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import HomeUser from "./components/HomeUser";
import HomeLawyer from "./components/HomeLawyer";
import HomeJudge from "./components/HomeJudge";
import "./index.css";

export default function App() {
  const [authorizedRole, setAuthorizedRole] = useState(null);
  const navigate = useNavigate();

  const handleUserLoginSuccess = () => {
    setAuthorizedRole("user");
    navigate("/home-user");
  };
  const handleLawyerLoginSuccess = () => {
    setAuthorizedRole("lawyer");
    navigate("/home-lawyer");
  };
  const handleJudgeLoginSuccess = () => {
    setAuthorizedRole("judge");
    navigate("/home-judge");
  };

  return (
    <>
      <Navbar authorizedRole={authorizedRole}></Navbar>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route
          path="/login"
          element={
            <Login
              onUserLoginSuccess={handleUserLoginSuccess}
              onLawyerLoginSuccess={handleLawyerLoginSuccess}
              onJudgeLoginSuccess={handleJudgeLoginSuccess}
            />
          }
        />
        {authorizedRole === "user" ? (
          <Route path="/home-user" element={<HomeUser />} />
        ) : (
          <Route
            path="/home-user"
            element={
              <div className="bg-red-500 text-white p-4 text-center font-bold">
                Not Authorized
              </div>
            }
          />
        )}
        {authorizedRole === "lawyer" ? (
          <Route path="/home-lawyer" element={<HomeLawyer />} />
        ) : (
          <Route
            path="/home-lawyer"
            element={
              <div className="bg-red-500 text-white p-4 text-center font-bold">
                Not Authorized
              </div>
            }
          />
        )}
        {authorizedRole === "judge" ? (
          <Route path="/home-judge" element={<HomeJudge />} />
        ) : (
          <Route
            path="/home-judge"
            element={
              <div className="bg-red-500 text-white p-4 text-center font-bold">
                Not Authorized
              </div>
            }
          />
        )}
      </Routes>
    </>
  );
}
