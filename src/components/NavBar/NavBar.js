import React, { useState } from "react";
import styles from "./Navbar.module.css";
import useViewport from "../../hooks/useVIewport";
import { Link, NavLink } from "react-router-dom";

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

  const { width } = useViewport();
  const breakpoint = 475;
  const content =
    width < breakpoint ? <h1>EoLT</h1> : <h1>Encyclopedia of Ludic Terms</h1>;

  return (
    <header className={navClasses}>
      <Link to="/"> {content} </Link>
      <nav>
        <div className={styles.buttonContainer}>
          <NavLink
            to="about-us"
            className={(navData) =>
              navData.isActive ? styles.active : styles.btnLight
            }
          >
            {" "}
            About us
          </NavLink>
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive ? styles.active : styles.btnLight
            }
          >
            {" "}
            Support
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
