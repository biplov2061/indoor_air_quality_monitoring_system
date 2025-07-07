// src/components/Navbar.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../Assets/logo.png';
import styles from './Navbar.module.css';
import login from '../Assets/login_logo.jpg';






function Navbar() {



  return (
    <nav className={styles.navbar}>
      {/* Logo on the left */}
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Site Logo" />
        </Link>
      </div>

      {/* Navigation links */}
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Admin login on the right */}
      <div className={styles.adminLogin}>
        <Link to="/admin">
             <img src={login} alt="Site Logo" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;


