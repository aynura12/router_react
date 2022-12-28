import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <div>
      <div>Main Navbar</div>
      <Link to="/">Home </Link>
      <Link to="/admin">Admin </Link>
      <Link to="/contact">Contact </Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navbar;
