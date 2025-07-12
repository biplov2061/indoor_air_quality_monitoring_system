import React from "react";
import "./aboutus.css"; // Import external CSS
import biplov from "../Assets/biplov.jpg";
import jenish from "../Assets/jenish.jpg";
// import nita from "../Assets/nita.jpg";
import aatish from "../Assets/aatish.jpg";

export default function IndoorAirPage() {
  return (
    <div className="indoor-air-container">
      <section className="indoor-air-hero">
        <h1 className="indoor-air-title">Beyond the Naked Eye</h1>

        <div className="indoor-air-vision-box">
          <span className="indoor-air-vision-title">Our Vision</span>

          <p className="indoor-air-vision-text">
            Breathing shouldn’t be a gamble. We’re building a world where data
            defends every lung, and clean air is a birthright.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="indoor-air-about">
        <h2 className="indoor-air-about-heading">
          About Indoor <span className="indoor-air-highlight">AIR</span>
        </h2>
        <p className="indoor-air-about-text">
          Indoor AIR is an indoor air quality monitoring system which monitors
          the air quality of particular place and provide real-time indoor air
          quality (IAQ) value whose represents which has determine the quality
          of air that we are breathing. Our system uses IoT devices(sensors)
          that has to collect pollutants data like level of co2, ozone, So2,
          smoke that is present in the air. Furthermore, based on the level of
          pollutants and IAQ value it also suggest the necessary safety
          measures.
        </p>
        <p className="indoor-air-about-text">
          Indoor AIR is a college project and have some limitations like it
          can’t measure all the pollutants that a present in the air. But in the
          future we will manage the corresponding to measures as much as
          possible pollutants and try to provide very accurate air quality data.
        </p>
      </section>

      <section className="indoor-air-team">
        <h2 className="indoor-air-team-heading">Our Team</h2>
        <div className="indoor-air-team-list">
          <div className="indoor-air-team-member_box">
            <div className="indoor-air-team-member">
              <img src={biplov} alt="team member" className="team_photo" />
            </div>
            <h4>Biplov gautam</h4>
          </div>
          <div className="indoor-air-team-member_box">
            <div className="indoor-air-team-member">
              <img src={"#"} alt="team member" className="team_photo" />
            </div>
            <h4>Nita Dangol</h4>
          </div>
          <div className="indoor-air-team-member_box">
            <div className="indoor-air-team-member">
              <img src={jenish} alt="team member" className="team_photo" />
            </div>
            <h4>Jenish Bhattrai</h4>
          </div>
          <div className="indoor-air-team-member_box">
            <div className="indoor-air-team-member">
              <img src={aatish} alt="team member" className="team_photo" />
            </div>
            <h4>Aatish Kumar Chaudhary</h4>
          </div>
        </div>
      </section>
    </div>
  );
}
