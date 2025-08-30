import React from "react";
import style from "./AdminDashboard.module.css";
import { useNavigate } from "react-router-dom";
import admin from "../Assets/admin.png";

export default function AdminDashboard() {
  const [isOpen, setIsOpen] = React.useState(true);
  const navigate = useNavigate();

<<<<<<< HEAD

  const handleLogout = () => {  

    localStorage.removeItem("token");
      alert("Logged out successfully");
      navigate('/');
=======
  const handleLogout = () => {
    alert("Logged out successfully");
    navigate("/");
>>>>>>> 5ee278cdc0ec0f0421d8d41b9b495cfbd3b7add1
  };

  // Sample feedbacks data
  const feedbacks = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      message:
        "Great app! The air quality monitoring is very accurate and helpful.",
      date: "2025-08-25",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      message:
        "I love the real-time updates. Very helpful for my home environment.",
      date: "2025-08-24",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      message: "Could use more detailed reports, but overall good application.",
      date: "2025-08-23",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah.wilson@example.com",
      message: "Excellent design and user interface! Very intuitive to use.",
      date: "2025-08-22",
    },
    {
      id: 5,
      name: "Tom Brown",
      email: "tom.brown@example.com",
      message: "The notifications are timely and useful for staying informed.",
      date: "2025-08-21",
    },
    {
      id: 6,
      name: "Lisa Davis",
      email: "lisa.davis@example.com",
      message: "Perfect for monitoring indoor air quality in my office space.",
      date: "2025-08-20",
    },
  ];

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
          <li>
            <a href="#feedback">Feedback</a>
          </li>

          <li>
            <button className={style.logout_btn} onClick={handleLogout}>
              Logout{" "}
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={style.content}>
        {/* Burger Button */}
        {!isOpen && (
          <button className={style.burger_btn} onClick={() => setIsOpen(true)}>
            ☰
          </button>
        )}

        <h1>Welcome, Admin</h1>
        <p>
          Welcome to the admin dashboard. Here you can manage the application
          settings and user accounts.
        </p>

        {/* Feedback Section */}
        <div id="feedback" className={style.feedbackSection}>
          <h2>User Feedbacks</h2>
          <div className={style.feedbacksContainer}>
            {feedbacks.map((feedback) => (
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
