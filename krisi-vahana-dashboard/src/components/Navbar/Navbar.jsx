import React, { useContext, useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { ThemeContext } from "../../theme/ThemeProviderWrapper";
import logo from "../../assets/logo.jpg";

export default function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <img src={logo} className={styles.logo} alt="Krisi Vahana Logo" />
        <h2 className={styles.title}>Krisi Vahana Pvt Ltd</h2>
      </div>

      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`${styles.links} ${menuOpen ? styles.showMenu : ""}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }>
          Home
        </NavLink>

        <NavLink
          to="/product"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }>
          Products
        </NavLink>

        <NavLink
          to="/aiTechnology"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }>
          AI Technology
        </NavLink>

        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }>
          About Us
        </NavLink>

        <NavLink
          to="/contactUs"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }>
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
}
