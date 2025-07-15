import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.svg"; // replace with your path

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header>
      <div className="navbar md:px-20 px-5 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-sm text-white">
          <li>
            <Link
              to="/"
              className={`hover:text-purple-300 transition-colors duration-300 ${
                isActive("/") ? "font-bold" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/whats-new"
              className={`hover:text-purple-300 transition-colors duration-300 ${
                isActive("/whats-new") ? "font-bold" : ""
              }`}
            >
              What's New
            </Link>
          </li>
          <li>
            <Link
              to="/terms"
              className={`hover:text-purple-300 transition-colors duration-300 ${
                isActive("/terms") ? "font-bold" : ""
              }`}
            >
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link
              to="/privacy"
              className={`hover:text-purple-300 transition-colors duration-300 ${
                isActive("/privacy") ? "font-bold" : ""
              }`}
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`hover:text-purple-300 transition-colors duration-300 ${
                isActive("/contact") ? "font-bold" : ""
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden px-5 py-4 space-y-2 bg-[#063133] text-white text-sm">
          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className={`${isActive("/") ? "font-bold" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/whats-new"
              onClick={() => setMenuOpen(false)}
              className={`${isActive("/whats-new") ? "font-bold" : ""}`}
            >
              What's New
            </Link>
          </li>
          <li>
            <Link
              to="/terms"
              onClick={() => setMenuOpen(false)}
              className={`${isActive("/terms") ? "font-bold" : ""}`}
            >
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link
              to="/privacy"
              onClick={() => setMenuOpen(false)}
              className={`${isActive("/privacy") ? "font-bold" : ""}`}
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={`${isActive("/contact") ? "font-bold" : ""}`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
