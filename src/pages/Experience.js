import React from "react";
import "../styles/Experience.css";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    title: "Team Lead – Full-Stack Development & Test Automation",
    company: "Wipro Technologies",
    duration: "January 2021 – December 2022",
    responsibilities: [
      "Led a 9-member team, optimizing test automation frameworks and full-stack tools for Microsoft’s Windows releases.",
      "Built Java Spring Boot microservices for test automation, integrating REST APIs with CI/CD pipelines.",
      "Developed React-based dashboards for real-time test execution logs, system health, and error tracking.",
      "Designed self-healing test automation scripts using Selenium, Cypress, and Jest, reducing flaky tests by 40%.",
      "Integrated Kafka and RabbitMQ for real-time test reporting and execution, enhancing system reliability.",
      "Deployed test environments on AWS (EC2, S3, Lambda) with Kubernetes, simulating real-world cloud environments.",
      "Automated API and performance testing with Postman, JMeter, and Rest Assured for scalable system performance.",
      "Managed team hiring, mentoring, and performance reviews, boosting overall team productivity and collaboration."
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Wipro Technologies",
    duration: "Jan 2020 – December 2020",
    responsibilities: [
      "Designed and developed a Medicare Registration System using React, Redux, Java, Spring Boot, and microservices.",
      "Built scalable RESTful APIs using Spring Boot, integrating Kafka for real-time event-driven data processing.",
      "Managed PostgreSQL, optimizing queries and indexing for efficient patient data storage and retrieval.",
      "Deployed applications on AWS (EC2, S3, RDS), automating infrastructure provisioning with Jenkins CI/CD pipelines.",
      "Developed and executed unit and integration tests using JUnit and Mockito, achieving 90% test coverage.",
      "Implemented centralized logging, monitoring, and alerting with ELK Stack (Elasticsearch, Logstash, Kibana) and Splunk.",
      "Followed Agile, Scrum, and TDD methodologies, managing source control, branching, and code reviews in GitHub."
    ],
  },
  {
    title: "Automation Test Engineer – Medicare System",
    company: "Wipro Technologies",
    duration: "May 2018 – December 2019",
    responsibilities: [
      "Developed and executed UI automation scripts for the Medicare Registration System using Selenium WebDriver, Java, and TestNG.",
      "Designed data-driven testing frameworks with Apache POI to validate large-scale patient registration data.",
      "Implemented end-to-end API testing for Medicare services using Postman, RestAssured, and Swagger.",
      "Developed and optimized performance test scripts using JMeter, improving system response time by 35%.",
      "Integrated automated test suites with Jenkins CI/CD pipelines, ensuring continuous quality validation.",
      "Conducted cross-browser testing on Chrome, Firefox, and Edge to ensure UI consistency across multiple platforms.",
      "Led defect triaging sessions, identifying root causes and collaborating with development teams for quick resolutions.",
      "Monitored and analyzed test execution logs using Kibana, Logstash, and Elasticsearch (ELK Stack) to improve debugging efficiency.",
      "Documented test plans, test cases, and automation strategy, ensuring compliance with Medicare regulatory requirements.",
      "Worked in Agile Scrum teams, participating in daily stand-ups, sprint planning, and retrospectives to optimize delivery cycles."
    ],
  },
];

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
<h1 className="title">
    <span className="recent-text">My</span>&nbsp;

    <span className="works-text"> Professional Journey</span>
</h1>

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
