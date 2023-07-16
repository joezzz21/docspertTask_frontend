import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "./NavBar.css";

function Navbar() {
  const navigate = useNavigate();
  let { user, logoutUser } = useContext(AuthContext);

  function handler() {
    navigate("/login");
  }

  return (
    <nav className="navbar">
      <ul>
        {user ? <p>Hello, {user.username}</p> : null}

        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/books/1">My Books</a>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={handler}>Login</button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
