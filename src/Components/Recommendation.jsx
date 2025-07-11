import React from "react";
import styles from "./Recommendation.module.css";

const Recommendation = () => {
  const recommendations = [
    {
      range: "0-50",
      category: "Good",
      generalPublic: "Safe",
      sensitiveGroup: "Safe",
      maskUses: "Not required",
      indoorAir: "Not required",
      color: "#31b121ff",
    },
    {
      range: "51-100",
      category: "Moderate",
      generalPublic: "Safe",
      sensitiveGroup: "Consider reducing prolonged outdoor exertion",
      maskUses: "Optional",
      indoorAir: "Optional",
      color: "#ffff5dff",
    },
    {
      range: "101-150",
      category: "Unhealthy for Sensitive Groups",
      generalPublic: "Generally safe",
      sensitiveGroup: "Limit prolonged or heavy outdoor exertion",
      maskUses: "Recommended (N95/KN95 preferred)",
      indoorAir: "Use indoors if sensitive or in polluted area",
      color: "#ffc14dff",
    },
    {
      range: "151-200",
      category: "Unhealthy",
      generalPublic: "Avoid prolonged outdoors",
      sensitiveGroup: "Avoid outdoor activity",
      maskUses: "Strongly recommended (N95/KN95)",
      indoorAir: "Recommended in indoor spaces",
      color: "#f17762ff",
    },
    {
      range: "201-300",
      category: "Very Unhealthy",
      generalPublic: "Avoid outdoor activity",
      sensitiveGroup: "Stay indoors, close windows",
      maskUses: "Mandatory (N95/KN95 only)",
      indoorAir: "Use in all indoor environments",
      color: "#ce3636ff",
    },
    {
      range: "301-500",
      category: "Hazardous",
      generalPublic: "Emergency level - health risks for everyone",
      sensitiveGroup: "Stay indoors with sealed windows",
      maskUses: "Mandatory (N95/KN95 with seal)",
      indoorAir: "Must-have in all indoor spaces",
      color: "#d30f0fff",
    },
  ];

  return (
    <div className={styles.recommendationContainer}>
      <h1 className={styles.title}>Health Recommendation by IQI Level</h1>
      <div className={styles.tableContainer}>
        <table className={styles.recommendationTable}>
          <thead>
            <tr>
              <th>IQI Range</th>
              <th>Category</th>
              <th>General Public</th>
              <th>Sensitive Group</th>
              <th>Mask Uses</th>
              <th>Indoor Air</th>
            </tr>
          </thead>
          <tbody>
            {recommendations.map((item, index) => (
              <tr key={index} style={{ backgroundColor: `${item.color}` }}>
                <td>{item.range}</td>
                <td>{item.category}</td>
                <td>{item.generalPublic}</td>
                <td>{item.sensitiveGroup}</td>
                <td>{item.maskUses}</td>
                <td>{item.indoorAir}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.additionalInfo}>
        <div className={styles.infoSection}>
          <h3>Sensitive Groups:</h3>
          <p>
            Children, elderly, people with asthma, heart or respiratory issues,
            and pregnant women
          </p>
        </div>

        <div className={styles.infoSection}>
          <h3>Mask Efficiency:</h3>
          <ul>
            <li>Cloth Mask: 50%</li>
            <li>Surgical Mask: 95%</li>
            <li>N95/KN95: 99% (recommended above 50 IQI)</li>
          </ul>
        </div>

        <div className={styles.infoSection}>
          <h3>Purifier Tip:</h3>
          <p>
            Use purifiers with HEPA + activated carbon filters for best
            performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
