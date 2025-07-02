// src/components/HomeContent/HomeContent.js
import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      {/* Left Box – Slogan */}
      <div className={styles.leftBox}>
        <h1 className={styles.heading1}>Breathe by Breathe</h1>
        <h1 className={styles.heading2}>
          <span className={styles.blueText}>Building</span> a,
        </h1>
        <h1 className={styles.heading3}>Healthier</h1>
        <h1 className={styles.heading4}>World.</h1>
        <p className={styles.subtext}>
          Monitor air quality in real-time and take action for a healthier life.
        </p>
      </div>

      {/* Right Box – AQI Data */}
      <div className={styles.rightBox}>
        <h2>Air Quality Index (AQI)</h2>
        <p className={styles.aqiValue}>AQI: 78</p>
        <p className={styles.status}>Status: Moderate</p>
      </div>
    </div>
  );
}

export default Home;
