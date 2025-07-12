import React from "react";
import { useNavigate, Link } from "react-router-dom";
import siteIcon from "../Assets/siteIcon.png";
import styles from "../Pages/Home.module.css"; // Using the existing CSS from Home.module.css

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className={styles.footer}>
      <div className={styles.upperFooter}>
        <h2 className={styles.footer_heading}>
          Together For The Environmental Equity.
        </h2>
        <div className={styles.footer_buttons}>
          <button
            className={styles.footer_btn}
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
          <button
            className={styles.footer_btn}
            onClick={() => navigate("/about")}
          >
            About Us
          </button>
        </div>
      </div>
      <div className={styles.lowerFooter}>
        <div className={styles.footerIndoorAir}>
          <div className={styles.IndoorAirBox_logo}>
            <img
              src={siteIcon}
              alt="website icon"
              className={styles.siteIcon}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />

            <h2
              className={styles.footerIndoorAirHeading}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Indoor<span className={styles.span}>AIR</span>
            </h2>
          </div>
          <p className={styles.footerSlogan}>
            Breathe by Breathe, Building healthier world.
          </p>
        </div>
        <hr />

        <div className={styles.footerLinks}>
          <p className={styles.AllRights}>
            © 2024 Indoor AIR. All rights reserved.
          </p>
          <ul className={styles.footerLinkLists}>
            <li className={styles.privacyPolicy}>
              <Link to="/privacy-policy" className={styles.footerLink}>
                Privacy Policy
              </Link>
            </li>
            <li className={styles.termsOfService}>
              <Link to="/terms-of-service" className={styles.footerLink}>
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
