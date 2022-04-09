import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import eoltLogo from "../../assets/eolt_logo.svg";
import eoltLogoWhite from "../../assets/eolt_logo_white.svg";

const StyledImg = styled.img`
  width: 180px;
  height: 50px;
  margin-left: 10px;
`

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset >= 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrolled])

  const navClasses = scrolled ? styles.scrolled : "";

  const content = scrolled ? (
    <StyledImg src={eoltLogoWhite} alt={"eoltLogoWhite"} />
  ) : (
    <StyledImg src={eoltLogo} alt={"eoltLogo"} />
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
            Table of Contents
          </NavLink>
          <NavLink
            to="about"
            className={(navData) =>
              navData.isActive ? styles.active : styles.btnLight
            }
          >
            About
          </NavLink>
          <NavLink
            to="contact"
            className={(navData) =>
              navData.isActive ? styles.active : styles.btnLight
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
