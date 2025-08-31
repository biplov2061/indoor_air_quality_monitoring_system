import React from "react";
import style from "./AdminDashboard.module.css";
import { useNavigate } from "react-router-dom";
import admin from "../Assets/admin.png";

export default function AdminDashboard() {
  const [isOpen, setIsOpen] = React.useState(true);
  const [feedback, setFeedback] = React.useState([]);
  const navigate = useNavigate();



  const handleLogout = () => {  

    localStorage.removeItem("token");
      alert("Logged out successfully");
      navigate('/');

  }

  const handleFeedback = async() =>{

    //fetching feedback
    try{
         const response = await fetch("http://localhost:8080/iqa/feedback/latest")
         const data = await response.json();
         console.log("Latest feedback:", data);
         setFeedback([...feedback , data]);
         // Get the latest 6 feedback entries
    }catch(error){
      console.error("Error fetching feedback:", error);
    }
    
  }
  

  return (
    <div className={style.container}>
      {/* Sidebar */}
      <div className={`${style.sidebar} ${isOpen ? style.open : style.closed}`}>
        {/* Close button */}
        <button className={style.close_btn} onClick={() => setIsOpen(false)}>
          ✖
        </button>

        <div className={style.adminProfile}>
          <div className={style.profilePicture}>
            <img src={admin} alt="Admin Profile" className={style.adminImage} />
          </div>
          <p className={style.welcomeAdmin}>Welcome, Biplov</p>
        </div>
        <br />
        <hr />
        <ul className={style.sidebar_menu}>
          {/* <li><a href="#sensors">Sensors</a></li>
          <li><a href="#feedback">Feedback</a></li> */}
          <li>
            <button className={style.feedback_btn} onClick={handleFeedback}>
              View Feedback
            </button>
          </li>
          <li>
            <button className={style.logout_btn} onClick={handleLogout}>
              Logout 
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={style.content}>
        {/* Burger Button */}
        {(!isOpen) && (
          <button className={style.burger_btn} onClick={() => setIsOpen(true)}>
            ☰
          </button>
        )}

        <h1>Welcome, Admin</h1>
        <p>
          Welcome to the admin dashboard. Here you can manage the application
          settings and view user feedback.
        </p>
        
        {/* Feedback Section */}
        <div id="feedback" className={style.feedbackSection}>
          <h2>User Feedbacks</h2>
          <div className={style.feedbacksContainer}>
            {feedback.map((feedback) => (
              <div key={feedback.id} className={style.feedbackRow}>
                <div className={style.feedbackInfo}>
                  <span className={style.feedbackId}>#{feedback.id}</span>
                  <span className={style.feedbackName}>{feedback.name}</span>
                  <span className={style.feedbackEmail}>{feedback.email}</span>
                </div>
                <div className={style.feedbackMessage}>{feedback.message}</div>
                <div className={style.feedbackDate}>{feedback.date}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
