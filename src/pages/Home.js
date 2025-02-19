import React, { useState, useEffect } from "react";
import "../styles/Home.css";

const roles = ["Full-Stack Developer", "Automation Engineer", "AI & ML Engineer"];

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100; // Typing speed (ms per letter)
    const delay = isDeleting ? 200 : 1000; // Pause before deleting

    const type = () => {
      if (!isDeleting && letterIndex < roles[index].length) {
        setText((prev) => prev + roles[index][letterIndex]);
        setLetterIndex(letterIndex + 1);
      } else if (isDeleting && letterIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setLetterIndex(letterIndex - 1);
      } else {
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), delay);
        } else {
          setIsDeleting(false);
          setLetterIndex(0);
          setIndex((prev) => (prev + 1) % roles.length); // Move to next role
        }
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, letterIndex, index]);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hi There! <span className="wave">👋</span>
        </h1>
        <h2>
        <span className="white-text">I'M</span> <span className="highlight">SRIDURGA KAKINADA</span>
        </h2>
        <h3 className="animated-text">{text}<span className="cursor"></span></h3>
      </div>
    </section>
  );
};

export default Home;
