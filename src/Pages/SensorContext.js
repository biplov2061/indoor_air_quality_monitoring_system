import { useContext } from "react";

import React from 'react'

export const SensorContext = React.createContext();




export default function SensorContextProvider({ children }) {


      const [sensors, setSensors] = React.useState([
            { id: 1, name: "MQ135", type:"Gas Sensor", active: true},
            { id: 2, name: "DHT11", type:"Temperature & Humidity Sensor", active: true},
            { id: 3, name: "ESP 32", type:"Micro Controller", active: true}
        ]);

  return (
    <SensorContext.Provider value={{ sensors, setSensors }}>
      {children}
    </SensorContext.Provider>
  )
}

