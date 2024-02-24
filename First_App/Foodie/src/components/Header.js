// import logo from "/img/logo1.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // let btnName = "Login";
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL}></img>
        </Link>
      </div>
      <Link to="/">
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
      </Link>

      <div className="nav-items">
        <ul>
          <li>{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
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
