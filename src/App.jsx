import ReactDOM from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import BookList from "./components/BookList";

export default function App() {
  return (
    <>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<BookList />}></Route>
      </Routes>
    </>
  );
}
