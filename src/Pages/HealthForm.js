import React, { useState } from "react";
import styles from "./HealthForm.module.css";


export default function HealthForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    condition: "",
    severity: "",
  });

  const [recommendation, setRecommendation] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validation = () =>{

    const conditionRegex = /^[a-zA-Z\s]+$/;
    
    if(formData.name.trim() === ""){
        alert("Name is required");
        return false;
  }else if(formData.age.trim() === "" || isNaN(formData.age) || formData.age <= 0){
    alert("Valid age is required");
    return false;
  }else if(formData.gender.trim() === ""){
    alert("Gender is required");
    return false;
  }else if(formData.severity.trim() === ""){
    alert("Severity is required");
    return false;
  }else if(!conditionRegex.test(formData.condition) || formData.condition.trim() === ""){
    alert("Valid health condition is required");
    return false;
  }
  return true;
  
  };



  const handleSubmit = async(e) => {
    e.preventDefault();
    const { name, condition} = formData;

    if(validation()){

        try{
            const response = await fetch(`http://localhost:8080/iqa/health/recommend?condition=${condition}`, {
                method: "GET",
            });

            const data = await response.json();
            setRecommendation(data.message);
            const recommendationArr = Array.isArray(data) ? data.join(",") : data;
            setRecommendation(`Hello ${name}, Health recommendations for you \n: ${recommendationArr}`);
            console.log(recommendationArr);
        }catch(error){
            console.log(error.message);
        }

            
   
    setFormData({
        name:"",
        age:"",
        gender:"",
        condition:"",
        severity:"",
    })

    };

    // let advice = "";

    // if (
    //   condition.toLowerCase().includes("asthma") ||
    //   condition.toLowerCase().includes("allergy")
    // ) {
    //   if (severity === "Mild") {
    //     advice =
    //       "Avoid outdoor activities during high pollution hours and keep windows closed.";
    //   } else if (severity === "Moderate") {
    //     advice =
    //       "Use an air purifier indoors and wear a mask when going outside.";
    //   } else if (severity === "Severe") {
    //     advice =
    //       "Strongly avoid going outdoors, use prescribed medication, and consult your doctor.";
    //   }
    // } else {
    //   advice =
    //     "Maintain general precautions: stay hydrated, avoid heavy exercise in polluted areas, and monitor air quality daily.";
    // }

  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.upperTitle}>Personal</h2>
        <h2 className={styles.title}>Health Recommendation Form</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className={styles.input}
            
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={styles.select}
            
          >
            <option value="">Select Gender...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="text"
            name="condition"
            placeholder="Health Condition (e.g. Asthma, Allergy)"
            value={formData.condition}
            onChange={handleChange}
            className={styles.input}
          />

          <select
            name="severity"
            value={formData.severity}
            onChange={handleChange}
            className={styles.select}
            
          >
            <option value="">Select Severity...</option>
            <option value="Mild">Mild</option>
            <option value="Moderate">Moderate</option>
            <option value="Severe">Severe</option>
          </select>

          <button type="submit" className={styles.button}>
            Get Recommendation
          </button>
        </form>

        {recommendation && (
          <div className={styles.result}>
            <p>{recommendation}</p>
          </div>
        )}
      </div>
    </div>
  );
}
