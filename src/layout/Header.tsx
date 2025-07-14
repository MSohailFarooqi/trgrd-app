import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg"; // replace with your path

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="navbar md:px-20 px-5 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-purple-300">
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
        <ul className="hidden md:flex gap-8 items-center text-sm">
          <li>
            <Link to="/" className="hover:text-purple-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/whats-new" className="hover:text-purple-300">
              What's New
            </Link>
          </li>
          <li>
            <Link to="/terms" className="hover:text-purple-300">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="hover:text-purple-300">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-purple-300">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden p-5 space-y-2 bg-[#063133] text-sm">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/whats-new" onClick={() => setMenuOpen(false)}>
              What's New
            </Link>
          </li>
          <li>
            <Link to="/terms" onClick={() => setMenuOpen(false)}>
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link to="/privacy" onClick={() => setMenuOpen(false)}>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
