import { useState } from "react";
import axios from "axios";
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
  `${process.env.REACT_APP_API_URL}/contact`,
  formData
);
      alert("Message Sent Successfully ✅");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">

      <div className="contact-info">
        <h1>Get In Touch</h1>

        <div className="info-card">
          <h3>📞 Phone</h3>
          <p>+91 9876543210</p>
        </div>

        <div className="info-card">
          <h3>✉ Email</h3>
          <p>info@aryengurukulam.com</p>
        </div>

        <div className="info-card">
          <h3>📍 Address</h3>
          <p>Jodhpur, Rajasthan</p>
        </div>
      </div>

      <div className="contact-form">
        <h2>Send Message</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Contact;