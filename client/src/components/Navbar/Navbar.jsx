import { useState } from "react";
import { Menu, CrossIcon } from "lucide-react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

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
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
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