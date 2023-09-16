import ReactDOM from "react-dom/client";
import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import HomeUser from "./components/HomeUser";
import "./index.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigate("/home-user"); // Redirect to the home page after login
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn}></Navbar>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route
          path="/login"
          element={<Login onLoginSuccess={handleLoginSuccess} />}
        />
        {isLoggedIn ? (
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
      </Routes>
    </>
  );
}
