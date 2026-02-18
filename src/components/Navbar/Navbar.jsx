import React, { useRef, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Navbar = () => {
  const [menu, setmenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closemenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} className="nav-mob-open" alt="" />
      <ul ref={menuRef} className="nav-menu">
        <img
          className="nav-mob-close"
          onClick={closemenu}
          src={menu_close}
          alt=""
        />
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p onClick={() => setmenu("home")}>
              Home {menu === "home" ? <img src={underline} alt="" /> : <></>}
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setmenu("about")}>
              About Me{" "}
              {menu === "about" ? <img src={underline} alt="" /> : <></>}
            </p>
          </AnchorLink>
        </li>
        <li>
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#mywork">
            <p onClick={() => setmenu("portfolio")}>
              Portfolio{" "}
              {menu === "portfolio" ? <img src={underline} alt="" /> : <></>}
            </p>
          </AnchorLink>
        </li>
        <li>
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setmenu("services")}>
              Services{" "}
              {menu === "services" ? <img src={underline} alt="" /> : <></>}
            </p>
          </AnchorLink>
        </li>

        <li>
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setmenu("contact")}>
              Contact{" "}
              {menu === "contact" ? <img src={underline} alt="" /> : <></>}
            </p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me{" "}
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
