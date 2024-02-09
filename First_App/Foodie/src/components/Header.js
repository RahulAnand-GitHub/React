// import logo from "/img/logo1.jpg";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  // let btnName = "Login";
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="company-name">
        <span id="letters" className="f">
          F
        </span>
        <span id="letters" className="o1">
          O
        </span>
        <span id="letters" className="o2">
          O
        </span>
        <span id="letters" className="d">
          D
        </span>
        <span id="letters" className="i">
          I
        </span>
        <span id="letters" className="e">
          E
        </span>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
