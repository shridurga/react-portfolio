import "../styles/Contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_2mu5xtl", // Your EmailJS service ID
          "template_m5udu2c", // Your template ID
          form.current,
          "VLwg1ltOWvnCYAiK_" // Your public API key
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    return (
      <section id="contact">
        <div className="contact-container">
          {/* Left Section - Contact Info */}
          <div className="contact-info">
            <h1 className="title">Let's Connect</h1>
            <p className="subtitle">Let’s build something great together.</p>
            <p>Email: <a href="mailto:sridurga.kakinada@slu.edu">sridurga.kakinada@slu.edu</a></p>
            <p>Phone: +1-314-537-4474</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/sridurga97/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/shridurga" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </div>
  
          {/* Right Section - Contact Form */}
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" className="user" placeholder="Your Name" required />
              <input type="email" name="user_email" className="user" placeholder="Your Email" required />
              <textarea name="message" className="user" placeholder="Your Message" required></textarea>
              <button type="submit" className="send-btn">Send</button>
              {done && <span className="success-message">Your message has been received. I’ll respond as soon as possible.</span>}

            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  