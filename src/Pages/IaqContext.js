import React, { createContext, useState, useEffect } from "react";
import { data } from "react-router-dom";

export const IaqContext = createContext(null);

export const IaqProvider = ({ children }) => {
  const [IaqData, setIaqData] = useState("Loading...");
  const [temperature, setTemperature] = useState("Loading...");
  const [humidity, setHumidity] = useState("Loading...");
  const [status, setStatus] = useState("Loading...");


useEffect(() => {
  const fetchData = () => {
    fetch("http://localhost:8080/iaq/data/latest")
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok " + res.statusText);
        return res.json();
      })
      .then(data => {
        setIaqData(data.ppm);
        if (data.ppm < 500) setStatus("Good");
        else if (data.ppm < 600) setStatus("Moderate");
        else if (data.ppm < 700) setStatus("Unhealthy for Sensitive Groups");
        else if (data.ppm < 800) setStatus("Unhealthy");
        else setStatus("Very Unhealthy");
      })
      .catch(err => {
        console.error("Error fetching sensor data:", err);
        setIaqData(null);
        setStatus("Not available");
      });
  };

  const fetchTemperatureHumidity = () => {
    // Use units=metric to get °C directly
    fetch("https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=4ffec4ca038d448ab38070fdcffab39e",{ method: "POST" })
      .then(res => {
        if (!res.ok) throw new Error("Weather API error: " + res.statusText);
        return res.json();
      })
      .then(data => {
        const tempC = data.main.temp - 273.15; // Convert from Kelvin to Celsius
        const hum = data.main.humidity;
        setTemperature(tempC.toFixed(2));
        setHumidity(hum);
        console.log("Temperature:", tempC.toFixed(2), "°C");
        console.log("Humidity:", hum, "%");
      })
      .catch(err => {
        console.error("Error fetching temperature and humidity data:", err);
        setTemperature(null);
        setHumidity(null);
      });
  };

  // initial calls
  fetchData();
  fetchTemperatureHumidity();

  // intervals (15s for sensor, 10m for weather)
  const sensorInterval = setInterval(fetchData, 15000);
  const weatherInterval = setInterval(fetchTemperatureHumidity, 600000);

  return () => {
    clearInterval(sensorInterval);
    clearInterval(weatherInterval);
  };
}, []);

  return (
    <IaqContext.Provider value={{ IaqData, temperature, humidity, status}}>
      {children}
    </IaqContext.Provider>
  );
};
