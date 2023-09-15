import ReactDOM from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/books" element={<BookList />}></Route>
      </Routes>
    </>
  );
}
