// src/components/HomeContent/HomeContent.js
import React from "react";
import { useNavigate } from "react-router-dom";
import thermometerIcon from "../Assets/high-temperature.png";
import HumidityIcon from "../Assets/humidity.png";
import locationIcon from "../Assets/location.png";
import siteIcon from "../Assets/siteIcon.png";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className={styles.homeContainer}>
      <div className={styles.container}>
        {/* Left Box – Slogan */}
        <div className={styles.leftBox}>
          <h1 className={styles.heading1}>Breathe by Breathe</h1>
          <h1 className={styles.heading2}>
            <span className={styles.blueText}>Building</span>
          </h1>
          <h1 className={styles.heading3}>Healthier</h1>
          <h1 className={styles.heading4}>World.</h1>
          <p className={styles.subtext}>
            Monitor air quality in real-time and take action for a healthier
            life.
          </p>
          <br />

          <button
            className={styles.checkAirQualityBtn}
            onClick={() => navigate("/dashboard")}
          >
            Check Air Quality
          </button>
        </div>

        {/* Right Box – AQI Data */}
        <div className={styles.rightBox}>
          <div className={styles.right_IQA_Box}>
            <p className={styles.aqiValue}>IAQ: 78</p>
            <p className={styles.status}>Status: Moderate</p>
          </div>
          <div className={styles.Termerature_Humidity_Box}>
            <div className={styles.Temperature_logo_text}>
              <img
                src={thermometerIcon}
                alt="Temperature Icon"
                className={styles.temperatureIcon}
              />
              <p className={styles.feelsLike}>Feels Like :</p>
              <p className={styles.temperatureValue}>28.1°C</p>
            </div>

            <div className={styles.Humidity_logo_text}>
              <img
                src={HumidityIcon}
                alt="Humidity Icon"
                className={styles.HumidityIcon}
              />
              <p className={styles.feelsLike}>Feels Humid :</p>
              <p className={styles.humidityValue}>98%</p>
            </div>
          </div>
          <div className={styles.Location_Box}>
            <div className={styles.locationLeft}>
              <div className={styles.locationIcon_text}>
                <img
                  src={locationIcon}
                  alt="Location Icon"
                  className={styles.locationIcon}
                />
                <p className={styles.locationText}>Lalitpur, Nepal</p>
              </div>
            </div>
            <div className={styles.locationRight}>
              <p className={styles.ViewDashboard}>
                <Link to="/dashboard" className={styles.Link}>
                  View Dashboard
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.AboutContainer}>
        <br />
        {/* About Section */}
        <div className={styles.about_container}>
          <h2 className={styles.about_heading}>About Indoor AIR</h2>
          <span className={styles.about_text}>
            Indoor AIR is an indoor air quality monitoring system which monitors
            the air quality of a particular place and provides real-time indoor
            air quality (IAQ) value, which determines the quality of air that we
            are breathing.
          </span>
          <span className={styles.about_text}>
            Our system uses IoT devices (sensors) to collect pollutants data
            such as the levels of CO₂, ozone, SO₂, and smoke present in the air.
            Furthermore, based on the pollutant levels and IAQ values, it also
            suggests necessary safety measures.
          </span>
        </div>
      </div>

      <div className={styles.ourSolutionMainContainer}>
        <div className={styles.solutions_container}>
          <h2 className={styles.solutions_heading}>Our Solutions</h2>
          <div className={styles.cards_wrapper}>
            <div className={styles.solution_card}>
              <h3>Air Monitoring Devices</h3>
              <p>
                IoT-based sensors used to detect pollutants like CO₂, ozone,
                SO₂, and smoke in indoor environments.
              </p>
            </div>
            <div className={styles.solution_card}>
              <h3>Real-Time Dashboard</h3>
              <p>
                A live dashboard that visualizes IAQ values, pollutant levels,
                and alerts users to unsafe conditions.
              </p>
            </div>
            <div className={styles.solution_card}>
              <h3>Awareness</h3>
              <p>
                Provides suggestions and safety measures based on indoor air
                quality to promote health awareness.
              </p>
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
    </div>
  );
}

export default Home;
