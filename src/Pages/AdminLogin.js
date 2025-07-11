import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminLogin.module.css";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    if(username === "admin" && password === "admin123"){
      navigate("/dashboard");
    }
    console.log("Login attempt:", { username, password, rememberMe });
  };

  return (
    <div className={styles.loginContainer}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        ←
      </button>

      <div className={styles.loginContent}>
        <div className={styles.loginHeader}>
          <h1>
            Indoor <span className={styles.highlight}>AIR</span>
          </h1>
          <p className={styles.subtext}>Feel air around you.</p>
        </div>

        <div className={styles.loginForm}>
          <h2>LOGIN</h2>
          <p className={styles.welcomeText}>Welcome back !</p>

          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className={styles.options}>
              <div className={styles.rememberMe}>
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label>Remember me</label>
              </div>
              <a href="#" className={styles.forgotPassword}>
                Forgot password?
              </a>
            </div>

            <button type="submit" className={styles.loginButton}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
