import React from "react";
import "./IAQIndicator.css";

const IAQIndicator = ({ value = 120 }) => {
  const clampedValue = Math.min(Math.max(value, 0), 300);
  const percent = (clampedValue / 300) * 100;

  return (
    <div className="iaq-container">
      <h2>IAQ</h2>
      <p className="iaq-subtitle">Indoor air quality</p>

      <div className="iaq-bar-wrapper">
        <div className="iaq-bar">
          <div className="iaq-arrow" style={{ left: `${percent}%` }}>
            ↓
          </div>
        </div>

        <div className="iaq-labels">
          <div>
            <p>0-50</p>
            <span>(Safe)</span>
          </div>
          <div>
            <p>50-100</p>
            <span>(Moderate)</span>
          </div>
          <div>
            <p>100-150</p>
            <span>(Moderate)</span>
          </div>
          <div>
            <p>200+</p>
            <span>(Hazardous)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IAQIndicator;
