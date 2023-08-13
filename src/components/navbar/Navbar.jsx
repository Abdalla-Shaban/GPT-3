import { Link } from "react-router-dom";
import logo from "../../assets/GPT-3.svg";
import { FaBars, FaXmark } from "react-icons/fa6";
import "./navbar.css";
import { useState } from "react";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links-container">
          <Link>Home</Link>
          <Link>What is GPT?</Link>
          <Link>Open AI</Link>
          <Link>Cases Studies</Link>
          <Link>Library</Link>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign Up</button>
      </div>
      {toggle ? (
        <FaXmark className="xmark" onClick={() => setToggle(!toggle)} />
      ) : (
        <FaBars className="bars" onClick={() => setToggle(!toggle)} />
      )}
      <div
        className={`gpt3__navbar-links-container-${toggle ? "menu" : "none"}`}
      >
        <div className="gpt3__navbar-links-menu">
          <Link>Home</Link>
          <Link>What is GPT?</Link>
          <Link>Open AI</Link>
          <Link>Cases Studies</Link>
          <Link>Library</Link>
        <div className="gpt3__navbar-sign-menu">
          <p>Sign in</p>
          <button type="button">Sign Up</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
