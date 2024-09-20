import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow top-0">
      <div className="container text-decoration-underline">
        <a className="navbar-brand text-success m-auto fw-bold fs-1" href="/">
          Fruits <span className="text-danger ">Shop</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
