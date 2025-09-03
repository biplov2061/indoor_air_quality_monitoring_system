import React, { useContext } from "react";
import style from "./SensorsConfig.module.css";
import { SensorContext } from "./SensorContext";

export default function SensorsConfig() {

  

   const {sensors , setSensors} = React.useContext(SensorContext);

    const toggleSensor = (id) => {
        setSensors((prevSensors) =>
            prevSensors.map((sensor) =>
                sensor.id === id ? { ...sensor, active: !sensor.active } : sensor
            )
        );
    };

    return (
        <div>
            <h1>Sensors Configuration</h1>
            <p>Here you can configure the sensors settings.</p>
            <br />


      {/* <div className={style.container}>
        <br />

        <div className={style.sensor}>
          <h3>MQ135</h3>
          <p className={style.type}>Type: Gas Sensor</p>
          <div className={style.activeBox}>
            <p>{sensorStatus}</p>
          </div>
        </div>
        <div className={style.sensor}>
          <h3>DHT11</h3>
          <p className={style.type}>Type: Temperature & Humidity Sensor</p>
          <div className={style.inactiveBox}>
            <p>{sensorStatus}</p>
          </div>
        </div>
        <div className={style.sensor}>
          <h3>ESP 32</h3>
          <p className={style.type}>Type: Micro Controller</p>
          <div className={style.activeBox}>
            <p>{sensorStatus}</p>
          </div>
        </div>
      </div> */}


  {/* sensor status control panel */}
  <h2 className={style.sensorStatus}>Sensor Status Control</h2>
      <div className={style.sensor}>
        
        {sensors.map((sensor) => (
          <div key={sensor.id} className={style.sensorRow}>
            <h3>{sensor.name}</h3>
            <p className={style.type}>{`Type: ${sensor.type}`}</p>
            <button
              className={sensor.active ? style.active : style.inactive}
              onClick={() => toggleSensor(sensor.id)}
            >
              {sensor.active ? "Active" : "Inactive"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
