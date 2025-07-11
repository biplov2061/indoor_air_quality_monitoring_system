// src/components/Navbar.js

// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import siteIcon from "../Assets/siteIcon.png";
import styles from "./Navbar.module.css";

function SettingsIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  );
}

function Navbar() {
  const [showSettings, setShowSettings] = useState(false);

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
      </ul>
      
      {/* Settings dropdown */}
        <div className={styles.settingsContainer}>
          <button
            className={styles.settingsButton}
            onClick={() => setShowSettings(!showSettings)}
            title="Settings"
          >
            <SettingsIcon />
          </button>
          {showSettings && (
            <div className={styles.settingsDropdown}>
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  isActive ? styles.active_link : styles.inactive_link
                }
              >
                Admin Login
              </NavLink>
            </div>
          )}
        </div>
      
    </nav>
  );
}

export default Navbar;
