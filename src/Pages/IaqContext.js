import React, { createContext, useState, useEffect } from "react";

export const IaqContext = createContext(null);

export const IaqProvider = ({ children }) => {
  const [IaqData, setIaqData] = useState("Loading...");
  const [temperature, setTemperature] = useState("Loading...");
  const [humidity, setHumidity] = useState("Loading...");
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:8080/iqa/data/latest")
        .then(res => {
          if (!res.ok) throw new Error("Network response was not ok " + res.statusText);
          return res.json();
        })
        .then((data) => {
          setIaqData(data.ppm);
          setTemperature(data.temperature);
          setHumidity(data.humidity);

          // Determine status based on ppm
          if (data.ppm < 500) setStatus("Good");
          else if (data.ppm < 600) setStatus("Moderate");
          else if (data.ppm < 700) setStatus("Unhealthy for Sensitive Groups");
          else if (data.ppm < 800) setStatus("Unhealthy");
          else setStatus("Very Unhealthy");
        })
        .catch(err => {
          console.error("Error fetching sensor data:", err);
          setIaqData(null);
          setTemperature(null);
          setHumidity(null);    
          setStatus("Not available");
        });
    };

    fetchData();
    const interval = setInterval(fetchData, 15000); // update every 15s
    return () => clearInterval(interval);
  }, []);

  return (
    <IaqContext.Provider value={{ IaqData, temperature, humidity, status }}>
      {children}
    </IaqContext.Provider>
  );
};
