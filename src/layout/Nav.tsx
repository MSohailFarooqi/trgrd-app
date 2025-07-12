import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <ul className="menu menu-horizontal px-1">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/whats-new">What's New</Link>
        </li>
        <li>
          <Link to="/terms">Terms & Conditions</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
