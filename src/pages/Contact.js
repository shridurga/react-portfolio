import "../styles/Contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef(); // Form reference
    const [done, setDone] = useState(false); // Success state
    const [error, setError] = useState(null); // Error state

    // ✅ Step 2: EmailJS API Call Function
    const sendEmail = (e) => {
        e.preventDefault(); // Prevents default form submission
        setError(null); // Reset previous errors
        setDone(false); // Reset success message

        emailjs
            .sendForm(
                "service_41m5skl", // Your EmailJS Service ID
                "template_yuhyyhx", // Your EmailJS Template ID
                form.current, // The form reference (contains user input)
                "88ftmuWdPuIszXGWB" // Your EmailJS Public Key
            )
            .then(
                (result) => {
                    console.log("Email sent:", result.text);
                    setDone(true);
                    form.current.reset(); // Clears the form after sending

                    // Automatically hide success message after 3 seconds
                    setTimeout(() => {
                        setDone(false);
                    }, 3000);
                },
                (error) => {
                    console.error("Error sending email:", error.text);
                    setError("Failed to send message. Please try again later.");
                }
            );
    };

    return (
        <section id="contact">
            <div className="contact-container">
                {/* Left Section - Contact Info */}
                <div className="contact-info">
                    <div className="title-container">
                        <h1 className="title">
                            <span className="recent-text">Let’s</span>&nbsp;
                            <span className="works-text">Connect</span>
                        </h1>
                        <p className="subtitle">Let’s build something great together.</p>
                    </div>
                    <p>Email: <a href="mailto:sridurgakakinada@gmail.com">sridurgakakinada@gmail.com</a></p>
                    <p>Phone: +1-314-537-4474</p>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/sridurga97/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/shridurga" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>

                {/* Right Section - Contact Form */}
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>  {/* Form Submission */}
                        <input type="text" name="user_name" className="user" placeholder="Your Name" required />
                        <input type="email" name="user_email" className="user" placeholder="Your Email" required />
                        <textarea name="message" className="user" placeholder="Your Message" required></textarea>
                        <button type="submit" className="send-btn">Send</button>

                        {/* Success Message */}
                        {done && <span className="success-message">Your message has been received. I’ll respond as soon as possible.</span>}

                        {/* Error Message */}
                        {error && <span className="error-message">{error}</span>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
