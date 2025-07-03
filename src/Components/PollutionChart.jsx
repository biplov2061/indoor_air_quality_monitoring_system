"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { time: "12AM", CO: 480, Ammonia: 5, Smoke: 10, Ozone: 20 },
  { time: "1AM", CO: 520, Ammonia: 6, Smoke: 12, Ozone: 21 },
  { time: "2AM", CO: 580, Ammonia: 7, Smoke: 14, Ozone: 22 },
  { time: "3AM", CO: 510, Ammonia: 5, Smoke: 11, Ozone: 23 },
  { time: "4AM", CO: 490, Ammonia: 4, Smoke: 9, Ozone: 25 },
  { time: "5AM", CO: 470, Ammonia: 5, Smoke: 10, Ozone: 26 },
  { time: "6AM", CO: 460, Ammonia: 5, Smoke: 9, Ozone: 24 },
  { time: "7AM", CO: 470, Ammonia: 5, Smoke: 10, Ozone: 23 },
  { time: "8AM", CO: 490, Ammonia: 6, Smoke: 11, Ozone: 25 },
  { time: "9AM", CO: 510, Ammonia: 7, Smoke: 13, Ozone: 26 },
  { time: "10AM", CO: 495, Ammonia: 6, Smoke: 12, Ozone: 27 },
  { time: "11AM", CO: 480, Ammonia: 5, Smoke: 10, Ozone: 28 },
  { time: "12PM", CO: 470, Ammonia: 4, Smoke: 11, Ozone: 29 },
];

export default function PollutionChart() {
  return (
    <div style={{ width: "100%", height: "400px", marginTop: "20px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis
            label={{
              value: "Concentration",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="CO" stroke="#007bff" strokeWidth={2} />
          <Line
            type="monotone"
            dataKey="Ammonia"
            stroke="#8e44ad"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Smoke"
            stroke="#27ae60"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Ozone"
            stroke="#f39c12"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
