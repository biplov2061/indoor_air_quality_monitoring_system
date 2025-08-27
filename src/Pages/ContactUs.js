import React from "react";
import "./ContactPage.css";

function ContactPage() {
  // State to manage form data
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({});
  const [isSubmitted, setisSubmitted] = React.useState(false);

  //function to validate the form data
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (/^[0-9]{10}$/.test(formData.phone) === false) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      //regex code to validate email
      newErrors.email = "Email is not valid";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error for the field being changed
    if (isSubmitted) {
      //validate the this field only
      const fieldError = validate()[name];
      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: fieldError,
      }));
    }
  };

  //function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setisSubmitted(true);
    const validatationErrors = validate();
    setErrors(validatationErrors);

    if (Object.keys(validatationErrors).length === 0) {

     await fetch('http://localhost:8080/iqa/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

      //submit the form
      alert("Thankyou for your feedback!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      setisSubmitted(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-heading">
        <h1>Get in Contact</h1>
        <p>
          If you have any question or suggestion then you can contact us. We’d
          Love to Hear from You
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-form">
          <h2>Send us message</h2>
          <form onSubmit={handleSubmit}>
            <label>Your name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="errors">{errors.name}</p>}

            <label>Phone Number</label>
            <input
              type="text"
              placeholder="98XXXXXXXX"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="errors">{errors.phone}</p>}

            <label>Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="errors">{errors.email}</p>}

            <label>Message</label>
            <textarea
              placeholder="Write your message..."
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="errors">{errors.message}</p>}

            <button className="input" type="submit">
              Send message
            </button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Contact information</h2>
          <div className="info-block">
            <strong>📍 Address</strong>
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
}

export default ContactPage;
