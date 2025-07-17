// import React from 'react';
// import {motion} from 'framer-motion';
import "../styles/codebase.css";
import skills from "./skillset.js";
import { FaServer, FaReact, FaCloud } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

const projects = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio website to showcase my work, skills, and contact information. Built with React and Framer Motion.",
    tags: ["React", "Framer Motion", "CSS"],
    year: 2025,
  },
  {
    id: "blog",
    title: "Blog Platform",
    description:
      "A secure, scalable blog platform deployed on Azure Virtual Machines with reverse proxy and process management.",
    tags: ["Node.js",
    "Express",
    "React",
    "JWT Authentication",
    "MongoDB Atlas",
    "Azure Virtual Machines",
    "Nginx (Reverse Proxy)",
    "PM2",
    "dotenv",
    "Git"],
    year: 2023,
  },
  {
    id: "tourApp",
    title: "ssr Tour App",
    description:
      "A scalable, production-ready REST API server with full-stack capabilities built using Node.js, Express, and MongoDB. Includes authentication, CRUD operations, advanced API features, and dynamic server-side rendered views using Pug.",
    tags: [
      "Node.js",
      "Express",
      "MongoDB",
      "Pug",
      "Authentication",
      "Stripe",
      "MVC",
      "Robust Error Handling",
    ],
    year: 2024,
  },
  {
    id: "algorithmVisualizer",
    title: "Algorithm Visualizer",

    description:
      "An interactive, performance-optimized visualizer for sorting and pathfinding algorithms built with React.",
    tags: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Framer Motion",
      "requestAnimationFrame",
      "Memoization",
      "Flip Move Animations",
      "JavaScript",
      "CSS",
    ],
    year: 2024,
  },
  {
    id: "newsSummarizer",
    title: "AI-Powered News Summarizer",
    description:
      "A simple, interactive platform for fetching and summarizing global news using OpenAI and NewsAPI.",
    tags: ["Streamlit", "Python", "NewsAPI", "OpenAI GPT", "Requests"],
    year: 2023,
  },
  {
    id: "multiCoreApiServer",
    title: "Multi-Core API Server with Queue Management",
    description:
      "A production-ready Express API server utilizing Node.js clustering and Redis-based job queues for high-performance, scalable backend services.",
    tags: [
      "Node.js",
      "Express",
      "Redis",
      "BullMQ",
      "Docker",
      "Winston",
      "ioredis",
      "dotenv",
      "Docker Compose",
    ],
    year: 2025,
  },
];

function Codebase() {
  useEffect(() => {
    if (window.location.hash === "#projects") {
      const el = document.getElementById("projects");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  return (
    <motion.div
      className="codebase-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="skills-container"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <h1>Dev-Stack</h1>
        <p>Journey from Fundamentals to Frameworks — layered with intent.</p>
        <motion.div
          className="skills"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
        >
          {skills.map(({ name, icon }) => (
            <motion.div
              key={name}
              className="skill-card"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={`https://cdn.simpleicons.org/${icon}/888`}
                alt={`${name} icon`}
                className="skill-icon"
              />
              <span className="skill-name">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      {/* Dev Cards */}
      <motion.div
        className="dev-cards-container"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* card1 */}

        <motion.div
          className="dev-card"
          whileHover={{ scale: 1.03, boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }}
        >
          <div className="icon-heading">
            <FaReact className="icon" />
            <div className="heading">
              <span className="highlight frontend">
                Frontend
                <br />
                Development
              </span>
            </div>
          </div>
          <p className="html-tag">&lt;h3&gt;</p>
          <div className="card-description">
            <p>
              Although my core interest lies in Backend, I'm equally intrigued
              by the Frontend — it's where I see my ideas come to life. I enjoy
              building clean, responsive UIs with React, Tailwind, and Framer
              Motion. I focus on component structure, performance, and
              accessibility, ensuring the frontend complements the system.
            </p>
          </div>
          <p className="html-tag">&lt;/h3&gt;</p>
        </motion.div>
        {/* card2 */}
        <motion.div
          className="dev-card"
          whileHover={{ scale: 1.03, boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }}
        >
          <div className="icon-heading">
            <FaServer className="icon" />
            <div className="heading">
              <span className="highlight backend">
                Backend
                <br />
                Development
              </span>
            </div>
          </div>
          <p className="tech-label">/techstacks</p>
          <div className="card-description">
            <p>
              This is where I thrive — building robust backend systems. I enjoy
              working with APIs, business logic, and data integrity. Experienced
              with REST, GraphQL, and Node.js tools like Express, Mongoose, and
              SQL. I work with microservices, clustering, and child_process to
              scale efficiently. I focus on memory optimization in Node.js, use
              streams for performance, and implement secure auth with JWT,
              OAuth2 and bcrypt.
            </p>
          </div>
          <p className="status">200 OK</p>
        </motion.div>
        {/* card3 */}
        <motion.div
          className="dev-card"
          whileHover={{ scale: 1.03, boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }}
        >
          <div className="icon-heading">
            <FaCloud className="icon" />
            <div className="heading">
              <span className="highlight frontend">
                Cloud &<br />
                Deployment
              </span>
            </div>
          </div>
          <p className="html-tag">$ssh</p>
          <div className="card-description">
            <p>
              I've been exploring Cloud & Deployment to bridge development with
              reliable production environments. Familiar with serverless
              solutions and containerization. Experience with Azure VM, Azure
              Functions, Docker, and Nginx for deploying scalable applications.
            </p>
          </div>
          <p className="html-tag">root@cloud</p>
        </motion.div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        className="projects-container"
        id="projects"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <h1>Projects</h1>
        <p>Remixing, reshaping — always under construction.</p>
        <motion.div
          className="project-list"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id + i}
              className="project-block"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
              }}
              onClick={() => {}}
            >
              <Link
                to={`/projects/${project.id}`}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  display: "block",
                  height: "100%",
                }}
              >
                <div className="project-header">
                  <span className="project-title">{project.title}</span>
                </div>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-description">{project.description}</div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Codebase;
