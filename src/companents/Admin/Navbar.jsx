import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div>Admin Navbar</div>
      <Link to="/">Home   </Link>
      <Link to="/admin/">Product  </Link>
      <Link to="/admin/dashboard">  Dashboard</Link>
    </div>
  );
}

export default Navbar;
