import "../styles/journey.css";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Cloud Backend Intern",
    company: "TerraNexus AI",
    duration: "Feb. 2025 – Mar. 2025",
    description:
      "Interned as a Backend Developer at TerraNexus Ai, where I was responsible for building and maintaining Rest APIs - learning the ropes of modern web development and Virtualizations.",
  },
  {
    role: "Software Dev Intern",
    company: "Mechximize Digitech Pvt. Ltd.",
    duration: "Apr 2024 – July 2024",
    description:
      "Worked as a part-time Software Developer at Mechximize Digitech- a Startup, where I build and maintained frontEnd Components to Backend API's while honing my attention to detail and time management skills.",
  },
];
const educationData = [
  {
    title: "Bachelors of Technology",
    institution: "IIT Bombay",
    date: "Nov 2021 - Present 2025 (Expected)",
    description: `Major in Civil Engineering with a Minor in Computer Science and Engineering.`,
    // email: "@bitinfonepal.com",
  },
  {
    title: "Senior Secondary (Class 12)",
    institution: "JNV Lucknow",
    date: "July 2019 - Oct. 2021",
    description:
      "Subjects: PCM (Physics, Chemistry, Mathematics) with a focus on advanced mathematics and physics.",
  },
  {
    title: "Secondary Education",
    institution: "JNV Moradabad",
    date: "jul. 2014 - Apr. 2019",
    description:
      "Completed my secondary education with a strong foundation in science and mathematics, Secured 97% in Board Examinations.",
  },
];

const Journey = () => {
  return (
    <motion.div
      className="journey-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.section
        className="experience-container"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <h1>Experience</h1>
        <h3>You need it to get the job, but the job's what gives it!</h3>
        <p>
          Throughout my journey, I've mostly found myself buried under backend
          logic or chasing down elusive bugs at odd hours — and honestly, that’s
          where I thrive. From building fast, functional systems to untangling
          late-night error logs, my experience has been equal parts structured
          learning and figuring things out the hard way. Every project, every
          line of code, and every real-world internship has taught me to write
          better code, break things safely, and stay curious about what runs
          underneath.
        </p>

        <motion.div
          className="timeline"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {experiences.map((exp, idx) => (
            <motion.div
              className="timeline-item"
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
            >
              <div className="timeline-icon">
                <svg
                  className="calendar-icon"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
                </svg>
              </div>

              <div className="timeline-content">
                <h3>
                  <span className="role">{exp.role}</span> ·{" "}
                  <span className="company">{exp.company}</span>
                </h3>
                <span className="duration">{exp.duration}</span>
                <p>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/*Education Section */}
      <motion.section
        className="education-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <h1 className="education-heading">Education</h1>
        <h3 className="education-subheading">
          I learned a lot, but the real learning happens in the code editor!
        </h3>
        <p className="education-intro">
          Most of what I know comes from building things, breaking them, and
          figuring it out along the way. Projects, late-night experiments, and
          endless curiosity have shaped my skills far more than any classroom
          could.
        </p>

        <motion.div
          className="edu-timeline"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {educationData.map((item, index) => (
            <motion.div
              className="edu-timeline-item"
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="timeline-icon">
                <svg
                  className="calendar-icon"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
                </svg>
              </div>
              <div className="edu-timeline-content">
                <h3>
                  <span className="ed-title">{item.title}</span> ·{" "}
                  <span className="institution">{item.institution}</span>
                </h3>
                <p className="edu-date">{item.date}</p>
                <p className="edu-description">{item.description}</p>
                <p className="edu-email">{item.email}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Journey;
