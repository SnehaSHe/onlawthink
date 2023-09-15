import ReactDOM from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}
