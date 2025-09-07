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
  const { IaqData } = useContext(IaqContext);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (IaqData == null) return;

    const now = new Date();

    setChartData((prev) => {
      // save full timestamp, not just formatted time
      const newEntry = {
        timestamp: now.getTime(), // 👈 real numeric timestamp
        time: now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        ppm: IaqData,
      };

      const updated = [...prev, newEntry];

      // keep last 24 hours
      const cutoff = now.getTime() - 24 * 60 * 60 * 1000;
      const filtered = updated.filter((d) => d.timestamp >= cutoff);

      return filtered;
    });
  }, [IaqData]);

  return (
    <div style={{ width: "100%", height: "400px", marginTop: "20px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" tick={{ fontSize: 10 }} />
          <YAxis label={{ value: "PPM", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="ppm"
            stroke="#007bff"
            strokeWidth={2}
            name="Air Quality (PPM)"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
