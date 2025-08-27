import React, { useState, useEffect, useContext } from "react";
import { IaqContext } from "../Pages/IaqContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function PollutionChart() {
  const { IaqData } = useContext(IaqContext); // ✅ you’re using capital IaqData
  const [chartData, setChartData] = useState([]);
  const [hourlyData, setHourlyData] = useState({ hour: null, values: [] });

 useEffect(() => {
  if (IaqData == null) return;

  const now = new Date();
  const currentHour = now.getHours();

  setHourlyData((prev) => {
    // Same hour → keep adding new value
    if (prev.hour === currentHour) {
      const updatedValues = [...prev.values, IaqData];
      const avgPPM =
        updatedValues.reduce((sum, val) => sum + val, 0) /
        updatedValues.length;

      const timeLabel = currentHour + ":00";

      setChartData((prevChart) => {
        const last = prevChart[prevChart.length - 1];
        if (last && last.time === timeLabel) {
          return [
            ...prevChart.slice(0, -1),
            { time: timeLabel, ppm: avgPPM },
          ];
        } else {
          return [...prevChart, { time: timeLabel, ppm: avgPPM }];
        }
      });

      return { ...prev, values: updatedValues };
    } else {
      // Hour has changed → save previous hour average
      if (prev.values.length > 0) {
        const avgPPM =
          prev.values.reduce((sum, val) => sum + val, 0) / prev.values.length;
        const timeLabel = prev.hour + ":00";

        setChartData((prevChart) => {
          const updated = [...prevChart, { time: timeLabel, ppm: avgPPM }];
          if (updated.length > 24) updated.shift(); // keep last 24 hours
          return updated;
        });
      }

      // Start new hour with current value
      return { hour: currentHour, values: [IaqData] };
    }
  });
}, [IaqData]);

  return (
    <div style={{ width: "100%", height: "400px", marginTop: "20px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis label={{ value: "PPM", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="ppm"
            stroke="#007bff"
            strokeWidth={2}
            name="Air Quality (PPM)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
