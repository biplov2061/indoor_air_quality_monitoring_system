import React from "react";
import "./IAQIndicator.css";
import { useContext } from "react";
import { IaqContext } from "../Pages/IaqContext";

const IAQIndicator = () => {
  const { IaqData } = useContext(IaqContext);
  const percent = (IaqData / 1000) * 100;



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
            <p>0-100</p>
            <span>(Safe)</span>
          </div>
          <div>
            <p>100-300</p>
            <span>(Moderate)</span>
          </div>
          <div>
            <p>300-600</p>
            <span>(Unhealthy)</span>
          </div>
          <div>
            <p>600-1000</p>
            <span>(Very Unhealthy)</span>
          </div>
           <div>
            <p>1000+</p>
            <span>(Hazardous)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IAQIndicator;
