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
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
      <div className="logo-container">
        <Link to="/">
          <img className="w-20  m-4 mix-blend-multiply" src={LOGO_URL}></img>
        </Link>
      </div>
      <Link to="/">
        <div className="text-4xl font-extrabold p-4 m-4">
          <span id="letters" className="text-f">
            F
          </span>
          <span id="letters" className="text-o1">
            O
          </span>
          <span id="letters" className="text-o2">
            O
          </span>
          <span id="letters" className="text-d">
            D
          </span>
          <span id="letters" className="text-i">
            I
          </span>
          <span id="letters" className="text-e">
            E
          </span>
        </div>
      </Link>

      <div className="flex items-center ">
        <ul className="flex m-4 p-4">
          <li className="px-4">{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">Cart</li>
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
