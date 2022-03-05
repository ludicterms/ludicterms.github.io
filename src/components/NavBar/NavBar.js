import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import eoltLogo from "../../assets/eolt_logo.png";
import eoltLogoWhite from "../../assets/eolt_logo_white.png";

const NavBar = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset >= 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const navClasses = scrolled ? styles.scrolled : "";

  const content = scrolled ? (
    <img src={eoltLogoWhite} alt={"eoltLogoWhite"} />
  ) : (
    <img src={eoltLogo} alt={"eoltLogo"} />
  );

  return (
    <header className={navClasses}>
      <Link to="/"> {content}</Link>
      <nav>
        <div className={styles.buttonContainer}>
          <NavLink
            to="toc"
            className={(navData) =>
              navData.isActive ? styles.active : styles.btnLight
            }
          >
            {" "}
            Table of Contents
          </NavLink>
          <NavLink
            to="about"
            className={(navData) =>
              navData.isActive ? styles.active : styles.btnLight
            }
          >
            {" "}
            About
          </NavLink>
          <NavLink
            to="contact"
            className={(navData) =>
              navData.isActive ? styles.active : styles.btnLight
            }
          >
            {" "}
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
