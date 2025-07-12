import logo from "../assets/images/logo.svg";
import Nav from "./Nav";
function Header() {
  return (
    <div className="navbar md:px-20 px-5">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <img src={logo} alt="Logo" className="h-8" />
        </a>
      </div>
      <div className="flex-none">
        <Nav />
      </div>
    </div>
  );
}

export default Header;
