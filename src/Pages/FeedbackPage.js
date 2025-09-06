import React from "react";
import style from "./FeedbackPage.module.css";

export default function FeedbackPage() {
  const [feedback, setFeedback] = React.useState([]);

  const handleFeedback = async () => {
    //fetching feedback
    try {
      const response = await fetch("http://localhost:8080/iaq/feedback/latest");
      const data = await response.json();
      console.log("Latest feedback:", data);
      setFeedback([...feedback, data]);
      // Get the latest 6 feedback entries
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  return (
    <div>
      {/* Feedback Section */}
      <div id="feedback" className={style.feedbackSection}>
        <h2>User Feedbacks</h2>
        <button className={style.feedbackBtn} onClick={handleFeedback}>
          view Latest Feedback
        </button>

        <div className={style.feedbacksContainer}>
          {feedback.map((feedback) => (
            <div key={feedback.id} className={style.feedbackRow}>
              <div className={style.feedbackInfo}>
                <span className={style.feedbackId}>#{feedback.id}</span>
                <span className={style.feedbackName}>{feedback.name}</span>
                <span className={style.feedbackEmail}>{feedback.email}</span>
              </div>
              <div className={style.feedbackMessage}>{feedback.message}</div>
              <div className={style.feedbackDate}>{feedback.feedbackTime}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
