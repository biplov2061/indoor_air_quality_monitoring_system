import React from "react";
import styles from "./Dashboard.module.css";
import upArrow from "../Assets/up-arrow.png";
import mask from "../Assets/icon-mask.png";
import closeDoors from "../Assets/icon-locked-inside.png";
import feelsLike from "../Assets/high-temperature.png";
import cloud from "../Assets/clould.jpg";
import humidity from "../Assets/humidity.png";
function generateCurrentDateTime() {
  const now = new Date();

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dateString = now.toLocaleDateString("en-US", options);

  const timeOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  const timeString = now.toLocaleTimeString("en-US", timeOptions);

  return `${dateString} | ${timeString}`;
}

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.h1}>Balkumari, Lalitpur</h1>
        <span className={styles.date}>{generateCurrentDateTime()}</span>
      </div>

      <div className={styles.content}>
        <section className={styles.leftSection}>
          <h2 className={styles.airQuality}>
            Air Quality <span className={styles.status}>: Hazardous</span>
          </h2>
          <span className={styles.iaq}>IAQ value : 150</span>

          <h3 className={styles.pollutionChange}>
            <img
              src={upArrow}
              alt="up arrow"
              style={{ width: "24px", height: "24px" }}
            />
            1.12% increase in pollution from yesterday.
          </h3>

          <div className={styles.recommendations}>
            <ul className={styles.recommendationList}>
              <li className={styles.recommendationItem}>
                <img
                  src={mask}
                  className={styles.recommendationIcon}
                  alt="mask"
                />
                Wear mask
              </li>
              <li className={styles.recommendationItem}>
                <img
                  src={closeDoors}
                  className={styles.recommendationIcon}
                  alt="mask"
                />
                Close doors, windows
              </li>
            </ul>

            <a href="#" className={styles.viewMoreLink}>
              View more safety measures →
            </a>
          </div>
        </section>

        <section className={styles.rightSection}>
          <section className={styles.feelsLike}>
            <h3>
              <img src={feelsLike} className={styles.contentImg} />
              Feels like
            </h3>
            <h5>current</h5>
            <h2 className={styles.value}>
              <img src={cloud} className={styles.valueImg} />
              24.9°C
            </h2>
          </section>
          <section className={styles.humidity}>
            <h3>
              <img src={humidity} className={styles.humidityImg} />
              Humidity
            </h3>
            <h5>current</h5>
            <h2 className={styles.value}>65%</h2>
          </section>
        </section>
      </div>

      <div className={styles.footer}>
        <h1>24 Hour pollutants concentration</h1>
      </div>
    </div>
  );
}
