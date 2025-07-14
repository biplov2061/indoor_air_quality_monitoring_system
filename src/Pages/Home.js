// src/components/HomeContent/HomeContent.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import thermometerIcon from "../Assets/high-temperature.png";
import HumidityIcon from "../Assets/humidity.png";
import locationIcon from "../Assets/location.png";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import classNames from "classnames";

function Home() {
  const navigate = useNavigate();
  const [IaqData, setIaqData] = React.useState('Loading...');
  const [temperature , setTemperature] = React.useState("");
  const [humidity , setHumidity] = React.useState("");
  const [status, setStatus] = React.useState("Moderate");


  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:8080/iqa/data/latest")
        .then((res) => {

          if(!res.ok){
             throw new Error("Network response was not ok " + res.statusText);
          }
         return res.json();
        })

        .then((data) => {
          console.log(data);
          setIaqData(data.ppm)
          setTemperature(data.temperature)
          setHumidity(data.humidity)
       })
        
        .catch((err) => {
          console.error("Error fetching sensor data:", err)
          setIaqData('Error fetching data');
          setStatus("Error");
    });


        // Determine status based on sensor data
      if (IaqData < 500) {
        setStatus("Good");
      } else if (IaqData >= 500 && IaqData < 600) {
        setStatus("Moderate");
      } else if (IaqData >= 600 && IaqData < 700) {
        setStatus("Unhealthy for Sensitive Groups");
      } else if (IaqData >= 700 && IaqData < 800) {
        setStatus("Unhealthy");
      } else if (IaqData >= 800) {
        setStatus("Very Unhealthy");
      }
   
      
    };     

    fetchData();

    const interval = setInterval(fetchData, 15000);
    return () => clearInterval(interval);
  });


   const statusClass = classNames({
        [styles.good] : IaqData < 500,
        [styles.moderate] :IaqData >= 500 && IaqData < 600,
        [styles.undealthySensitive] : IaqData >= 600 && IaqData < 700,
        [styles.unhealthy] : IaqData >= 700 && IaqData < 800,
        [styles.veryUnhealthy] : IaqData >= 800 && IaqData < 900,
        [styles.hazardous] : IaqData >= 900,
      });

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
            <p className={styles.aqiValue}>IAQ :    <b>{IaqData}</b></p>
            <p className={styles.status}>Status :   <b className={statusClass}>{status}</b></p>
          </div>
          <div className={styles.Termerature_Humidity_Box}>
            <div className={styles.Temperature_logo_text}>
              <img
                src={thermometerIcon}
                alt="Temperature Icon"
                className={styles.temperatureIcon}
              />
              <p className={styles.feelsLike}>Feels Like :</p>
              <p className={styles.temperatureValue}>{(temperature * 12).toFixed(1)}°C</p>
            </div>

            <div className={styles.Humidity_logo_text}>
              <img
                src={HumidityIcon}
                alt="Humidity Icon"
                className={styles.HumidityIcon}
              />
              <p className={styles.feelsLike}>Humidity :</p>
              <p className={styles.humidityValue}>{humidity} %</p>
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
                <p className={styles.locationText}>Balkumari, Lalitpur</p>
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
    </div>
  );
}

export default Home;
