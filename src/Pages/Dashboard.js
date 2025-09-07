import React from "react";
import styles from "./Dashboard.module.css";
import upArrow from "../Assets/up-arrow.png";
import mask from "../Assets/icon-mask.png";
import closeDoors from "../Assets/icon-locked-inside.png";
import feelsLike from "../Assets/high-temperature.png";
import cloud from "../Assets/clould.jpg";
import humidityIcon from "../Assets/humidity.png";
import PollutionChart from "../Components/PollutionChart";
import IAQIndicator from "../Components/IAQIndicator";
import { useContext } from "react";
import { IaqContext } from "./IaqContext";
import { useNavigate } from "react-router-dom";
import { SensorContext } from "./SensorContext";

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
  const navigate = useNavigate();
  const { IaqData, temperature, humidity, status } = useContext(IaqContext); //iaq data context
  const { sensors } = useContext(SensorContext); //sensor context

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.h1}>Balkumari, Lalitpur</h1>
        <span className={styles.date}>{generateCurrentDateTime()}</span>
      </div>

      <div className={styles.content}>
        <section className={styles.leftSection}>
          <h2 className={styles.airQuality}>
            Air Quality <span className={styles.status}>: {status}</span>
          </h2>
          <span className={styles.iaq}>IAQ : {IaqData}</span>

          {/* <h3 className={styles.pollutionChange}>
            <img
              src={upArrow}
              alt="up arrow"
              style={{ width: "24px", height: "24px" }}
            />
            1.12% increase in pollution from yesterday.
          </h3> */}

          <div className={styles.recommendations}>
            <ul className={styles.recommendationList}>
              Our Recommendations:
              <br />
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
                  alt="close doors"
                />
                Close doors, windows
              </li>
            </ul>

            <button
              className={styles.viewMoreLink}
              onClick={() => navigate("/recommendation")}
            >
              View more safety measures →
            </button>
          </div>
        </section>

        <section className={styles.rightSection}>
          <section className={styles.feelsLike}>
            <h3>
              <img
                src={feelsLike}
                className={styles.contentImg}
                alt="temperature icon"
              />
              Feels like
            </h3>
            <h5>current</h5>
            <h2 className={styles.value}>
              <img src={cloud} className={styles.valueImg} alt="cloud icon" />
              {temperature}°C
            </h2>
          </section>
          <section className={styles.humidity}>
            <h3>
              <img
                src={humidityIcon}
                className={styles.humidityImg}
                alt="humidity icon"
              />
              Humidity
            </h3>
            <h5>current</h5>
            <h2 className={styles.value}>{humidity}%</h2>
          </section>
        </section>
      </div>

      <div className={styles.footer}>
        <h1 className={styles.pollutants_concentration_h1}>
          24 Hour pollutants concentration
        </h1>
        <PollutionChart />
      </div>

      <div className={styles.iaqIndicator}>
        <IAQIndicator value={IaqData} />
        <div className={styles.iaqDetails}>
          <span className={styles.iaqValue}>{IaqData}</span>
          <span className={styles.iaqCondition}>{status}</span>
          <p className={styles.iaqRecommend}>
            (We highly recommend to follow saftey measures)
          </p>
          <button
            className={styles.measuresButton}
            onClick={() => navigate("/recommendation")}
          >
            View Saftey measures
          </button>
        </div>
      </div>

      <div className={styles.sensorLocation}>
        <h2>Sensor Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8299999999995!2d85.3365632!3d27.6713817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e8af4a5fe3%3A0x963d00cdf478c6b6!2sNepal%20College%20of%20Information%20Technology!5e0!3m2!1sen!2snp!4v1625555555555!5m2!1sen!2snp"
          width="1000"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sensor Location - Nepal College of Information Technology"
        ></iframe>
      </div>

      <section className={styles.pollutantSection}>
        <h2 className={styles.sectionTitle}>
          Current <span className={styles.highlight}>Pollutant</span> Levels
        </h2>
        <p className={styles.sectionSubtitle}>
          It shows the sensors current status and readings.
        </p>

        <h3 className={styles.indicatorTitle}>Air Quality Indicators</h3>

        <div className={styles.sensor}>
          {sensors.map((sensor) => (
            <div key={sensor.id} className={styles.sensorRow}>
              <h3>{sensor.name}</h3>
              <p className={styles.type}>{`Type: ${sensor.type}`}</p>
              <button
                className={sensor.active ? styles.active : styles.inactive}
              >
                {sensor.active ? "Active" : "Inactive"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
