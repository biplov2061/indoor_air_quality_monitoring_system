import React from "react";

import styles from "./Sensor.module.css";
import tempImg from "../Assets/high-temperature.png";
import mqImg from "../Assets/icon-mask.png";
import espImg from "../Assets/admin.png";

export default function Sensor() {
  const sensors = [
    {
      id: "dht11",
      title: "DHT11 (Temperature & Humidity)",
      img: "/download (1).jpeg",
      desc: `The DHT11 sensor is a low-cost digital device widely used for measuring temperature and humidity with reliable accuracy. It operates within a temperature range of 0°C to 50°C and a humidity range of 20% to 90%, providing calibrated digital output over a single-wire protocol. It's simple to interface with microcontrollers such as Arduino, Raspberry Pi and ESP boards, making it ideal for weather stations, greenhouse monitoring and beginner IoT projects.`,
    },
    {
      id: "mq135",
      title: "MQ-135 (Gas / Air Quality)",
      img: "/download (3).jpeg",
      desc: `The MQ-135 gas sensor is a versatile module for monitoring air quality and detecting gases like ammonia, NOx, benzene, smoke and alcohol vapors. Running on a 5V supply, it produces an analog voltage that varies with gas concentration and can be read by ADC-equipped microcontrollers. Its affordability and broad sensitivity make it popular for indoor air quality systems, safety devices and IoT environmental projects.`,
    },
    {
      id: "esp32",
      title: "ESP32 (Microcontroller & Connectivity)",
      img: "/download (2).jpeg",
      desc: `The ESP32 is a powerful, low-cost microcontroller with built-in Wi‑Fi and Bluetooth. Featuring a dual-core CPU (up to 240MHz), rich I/O (ADC, DAC, PWM, SPI, I2C, UART) and low power modes, it is perfect for IoT applications like wireless sensors, automation and remote monitoring. Its combination of connectivity, performance and affordability makes it the platform of choice for many embedded projects.`,
    },
  ];

  return (
    <div className={styles.sensorContainer}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Our Sensors</h1>
        <p className={styles.intro}>
          Below are the core sensors and the microcontroller used in this
          project. Each card explains the role and typical use-cases.
        </p>
      </header>

      <section className={styles.grid}>
        {sensors.map((sensor) => (
          <article key={sensor.id} className={styles.card}>
            <div className={styles.cardMedia}>
              <img
                src={sensor.img}
                alt={sensor.title}
                className={styles.cardImg}
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{sensor.title}</h3>
              <p className={styles.cardDesc}>{sensor.desc}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
