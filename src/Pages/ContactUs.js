import React from "react";
import "./ContactPage.css";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import siteIcon from "../Assets/siteIcon.png";


function ContactPage() {
const navigate = useNavigate();
  return ( 
    <div className="" >
    <div className="contact-container">
     

      
      <div className="contact-heading">
        <h1>Get in Contact</h1>
        <p>
          If you have any question or suggestion then you can contact us. We’d Love to Hear from You
        </p>
      </div>

      
      <div className="contact-content">
       
        <div className="contact-form">
          <h2>Send us message</h2>
          <form>
            <label>Your name</label>
            <input type="text" placeholder="Enter your name" />

            <label>Phone Number</label>
            <input type="text" placeholder="98XXXXXXXX" />

            <label>Email</label>
            <input type="email" placeholder="your@email.com" />

            <label>Message</label>
            <textarea placeholder="Write your message..."></textarea>

            <button className="input" type="submit">Send message</button>
          </form>
        </div>

       
        <div className="contact-info">
          <h2>Contact information</h2>
          <div className="info-block">
            <strong >📍 Address</strong>
            <p className="details">Balkumari, Lalitpur</p>
          </div>
          <div className="info-block">
            <strong>✏️ Phone number</strong>
            <p className="details">9816078919</p>
          </div>
          <div className="info-block">
            <strong>📧 Email address</strong>
            <p className="details">iaq@email.com.np</p>
          </div>
          <div className="info-block">
            <strong>Connect With Us</strong>
            <p>Add social links here</p>
          </div>
        </div>
      </div>
      
    </div>
    <footer className={styles.footer}>
            <div className={styles.upperFooter}>
              <h2 className={styles.footer_heading}>
                Together For The Environmental Equity.
              </h2>
              <div className={styles.footer_buttons}>
                
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
    
                  <h2 className={styles.footerIndoorAirHeading} onClick={() => window.scrollTo({top:0 , behavior : "smooth"})}>
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
    </div>
    
  );
};

export default ContactPage;

