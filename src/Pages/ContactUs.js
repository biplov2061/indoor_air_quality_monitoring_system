import React from "react";
import "./ContactPage.css";


const ContactPage = () => {
  return (
    <div className="contact-container">
     

      
      <div className="contact-heading">
        <h1>Get in Contact</h1>
        <p>
          If you have any question or suggestion then you can contact us. We’d Love to Hear from You
        </p>
      </div>

      
      <div className="contact-content">
       
        <div className="contact-form">
          <h2>Send us message</h2>
          <form>
            <label>Your name</label>
            <input type="text" placeholder="Enter your name" />

            <label>Phone Number</label>
            <input type="text" placeholder="98XXXXXXXX" />

            <label>Email</label>
            <input type="email" placeholder="your@email.com" />

            <label>Message</label>
            <textarea placeholder="Write your message..."></textarea>

            <button className="input" type="submit">Send message</button>
          </form>
        </div>

       
        <div className="contact-info">
          <h2>Contact information</h2>
          <div className="info-block">
            <strong >📍 Address</strong>
            <p className="details">Balkumari, Lalitpur</p>
          </div>
          <div className="info-block">
            <strong>✏️ Phone number</strong>
            <p className="details">9816078919</p>
          </div>
          <div className="info-block">
            <strong>📧 Email address</strong>
            <p className="details">iaq@email.com.np</p>
          </div>
          <div className="info-block">
            <strong>Connect With Us</strong>
            <p>Add social links here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

