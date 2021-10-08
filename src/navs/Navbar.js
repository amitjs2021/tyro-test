import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">The Movies List</Link>
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
