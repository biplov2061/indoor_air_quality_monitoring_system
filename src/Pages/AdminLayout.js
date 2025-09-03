import React from "react";
import style from "./AdminLayout.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import admin from "../Assets/admin.png";


export default function AdminLayout() {
  const [isOpen, setIsOpen] = React.useState(true);
  const navigate = useNavigate();


  //navigate to sensors configuration page
  const handleSensors = () => {
    navigate("/admin/sensorsConfig");
  };

  // logout admin
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("token");
      alert("Logged out successfully");
      navigate("/" , { replace: true });
    }
  };

  //   route to feedback page
  const handleFeedback = async () => {
    navigate("/admin/feedback");
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
          <p className={style.welcomeAdmin}>Welcome, Admin</p>
        </div>
        <br />
        <hr />
        <ul className={style.sidebar_menu}>
          <li>
            <button className={style.sensors_btn} onClick={handleSensors}>
              Sensors
            </button>
          </li>
          <li>
            <button className={style.feedback_btn} onClick={handleFeedback}>
              Feedback
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
        {!isOpen && (
          <button className={style.burger_btn} onClick={() => setIsOpen(true)}>
            ☰
          </button>
        )}
        {/* here the feedback and sensors configuration will be rendered */}
        <Outlet />
      </div>
    </div>
  );
}
