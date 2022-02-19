/* eslint-disable no-unused-vars */
import "./Navbar.css";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/link-logo.png";

const Menu = () => (
  <>
    <p>
      <a href="./">Personal</a>
    </p>
    <p>
      <a href="#business">Business</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="link__navbar circularstd-book-normal-black-18px">
      <div className="link__navbar-links_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="link__navbar-links">
        <div className="link__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="link__navbar-sign">
        <div className="login circularstd-book-normal-black-18px">
          <a href="#log-in">Log In</a>
        </div>
        <div className="sign-up circularstd-book-normal-white-18px">
          <a href="#sign-up">Sign Up</a>
        </div>
      </div>
      <div className="link__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={30}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={30}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="link__navbar-menu_container scale-up-center">
            <div className="link__navbar-menu-container-links">
              <Menu />
              <div className="link__navbar-menu_container-links-sign">
                <div className="login circularstd-book-normal-black-18px">
                  <a href="#log-in">Log In</a>
                </div>
                <div className="sign-up circularstd-book-normal-white-18px">
                  <a href="#sign-up">Sign Up</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
