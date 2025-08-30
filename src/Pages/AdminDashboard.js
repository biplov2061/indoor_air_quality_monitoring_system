import React from "react";
import style from "./AdminDashboard.module.css";
import { useNavigate } from "react-router-dom";
import admin from "../Assets/admin.png";

export default function AdminDashboard() {
  const [isOpen, setIsOpen] = React.useState(true);
  const navigate = useNavigate();


  const handleLogout = () => {  

    localStorage.removeItem("token");
      alert("Logged out successfully");
      navigate('/');
  };

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
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#sensors">Sensors</a></li>
          <li><a href="#feedback">Feedback</a></li>
          <li><a href="#settings">Settings</a></li>
          <li><button className={style.logout_btn} onClick={handleLogout}>Logout </button></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={style.content}>
        {/* Burger Button */}
       {(!isOpen)&&  <button className={style.burger_btn} onClick={() => setIsOpen(true)}>
          ☰
        </button>}

        <h1>Welcome, Admin</h1>
        <p>
          Welcome to the admin dashboard. Here you can manage the application
          settings and user accounts.
        </p>
      </div>
    </div>
  );
}
