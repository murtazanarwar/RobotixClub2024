import { useState, useContext } from "react";
import { Menu, CrossIcon } from "lucide-react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import GlobalContext from "../../context/GlobalContext";

export default function Navbar() {
  const {isOpen} = useContext(GlobalContext);
  const {setOpen} = useContext(GlobalContext);
  console.log(isOpen);
  

  return (
    <nav className={`${isOpen ? "navbar_expand" : "navbar_normal"} navbar`}>
      <div className="flexbox">

        {!isOpen ? (<h2 className="nav-title">Robotix Club</h2>) : ""}
        <div className={`${isOpen ? "display-nav" : "displayno"} navbar`}>
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          {/* <Link to="/events">EVENT</Link>
              <Link to="/project">PROJECT</Link>
              <Link to="/teams">TEAM</Link> */}
          <Link to="/login">LOGIN</Link>
          <Link to="/signup">SIGN UP</Link>
          <Link to="/blog">BLOG</Link>
        </div></div>

      {isOpen ? (
        <CrossIcon
          onClick={() => setOpen(false)}
          className="menu_icons cross_icon"
        />
      ) : (
        <Menu onClick={() => setOpen(true)} className="menu_icons" />
      )}
    </nav>
  );
}