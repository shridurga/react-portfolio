// Experience.js
import React from "react";
import "../styles/Experience.css";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    title: "Offshore Team Lead",
    company: "Wipro Technologies",
    duration: "January 2022 - December 2022",
    responsibilities: [
      "Led a team of nine engineers delivering high-quality automation testing for Microsoft.",
      "Owned application compatibility for multiple Windows releases, ensuring a 100% pass rate.",
      "Facilitated recruitment, training sessions, and team meetings to meet project milestones.",
    ],
  },
  {
    title: "UI Automation Test Developer",
    company: "Wipro Technologies",
    duration: "January 2020 - December 2021",
    responsibilities: [
      "Enhanced the MITA framework for UI automation with significant improvements.",
      "Developed over 300 test scripts in C# for application compatibility validation.",
      "Played a key role in pull request reviews and bug triaging processes.",
    ],
  },
  {
    title: "Automation Test Engineer",
    company: "Wipro Technologies",
    duration: "May 2018 - December 2020",
    responsibilities: [
      "Developed Test Strategy, Plans, and Scripts for Manual and Automation Functional Testing.",
      "Implemented automation frameworks using Selenium WebDriver, Java, and Maven.",
      "Spearheaded data migration initiatives for Novartis during a 3-month tenure.",
    ],
  },
];

// Component for individual experience item
const ExperienceItem = ({ title, company, duration, responsibilities }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className={`experience-item ${inView ? "fade-in" : ""}`} ref={ref}>
      <h3>{title} – {company}</h3>
      <p>{duration}</p>
      <ul>
        {responsibilities.map((task, idx) => (
          <li key={idx}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience">
      <h1 className="title">Professional Journey</h1>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            title={exp.title}
            company={exp.company}
            duration={exp.duration}
            responsibilities={exp.responsibilities}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
