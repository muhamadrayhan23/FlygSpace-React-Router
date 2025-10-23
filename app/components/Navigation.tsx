import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar navbar-dark bg-dark w-100">
      <div className="container-fluid px-4 d-flex justify-content-between align-items-center">
        <Link to="/product" className="navbar-brand fw-bold text-danger">
          FlyingSpace
        </Link>

        <ul className="navbar-nav d-flex flex-row gap-4">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "active text-bold" : ""}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link ${isActive("/about") ? "active text-bold" : ""}`}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/product"
              className={`nav-link ${isActive("/product") ? "active text-bold" : ""}`}
            >
              Product
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/event"
              className={`nav-link ${isActive("/event") ? "active text-bold" : ""}`}
            >
              Event
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link ${isActive("/contact") ? "active text-bold" : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;