// src/components/Navbar.js

// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import siteIcon from "../Assets/siteIcon.png";
import styles from "./Navbar.module.css";



function Navbar() {

  return (
    <nav className={styles.navbar}>
      {/* Logo on the left */}
      <div className={styles.logo}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.active_link : styles.inactive_link
          }
        >
          <img src={siteIcon} alt="Site Logo" />
        </NavLink>
      </div>

      {/* Navigation links */}
      <ul className={styles.navLinks}>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? styles.active_link : styles.inactive_link
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? styles.active_link : styles.inactive_link
            }
          >
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.active_link : styles.inactive_link
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? styles.active_link : styles.inactive_link
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="sensor"
            className={({ isActive }) =>
              isActive ? styles.active_link : styles.inactive_link
            }
          >
            Sensor
          </NavLink>
        </li>

        <li>
            <NavLink to="/health" className={({ isActive }) =>
              isActive ? styles.active_link : styles.inactive_link
            }>
              Health Recommendation
            </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
