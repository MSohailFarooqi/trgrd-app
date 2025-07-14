import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import google from "../assets/images/google.svg";
import twitter from "../assets/images/devicon_twitter.svg";
import instgrm from "../assets/images/instagram.svg";
import linkedn from "../assets/images/linkedin.svg";

function Footer() {
  return (
    <>
      <footer className="bg-alt-section mx-5 rounded-ss-xl rounded-se-xl py-10">
        <div className="container mx-auto">
          <div className="flex md:flex-row flex-col gap-5 py-10">
            <div className="basis-1/4 text-center md:text-start">
              <Link to="#">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-15 block mx-auto md:mx-0"
                />
              </Link>
              <p className="text-white mt-2">Your triggers hold your truth.</p>
            </div>
            <div className="basis-3/4 text-center md:text-end">
              {/* <NavFooter /> */}
            </div>
          </div>
        </div>
        <div className="container mx-auto text-center py-10">
          <p className="text-white text-sm">
            Copyright © {new Date().getFullYear()} trgrd.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <Link to="#">
              <img src={google} alt="Google" />
            </Link>
            <Link to="#">
              <img src={twitter} alt="Twitter" />
            </Link>
            <Link to="#">
              <img src={instgrm} alt="Instagram" />
            </Link>
            <Link to="#">
              <img src={linkedn} alt="LinkedIn" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
