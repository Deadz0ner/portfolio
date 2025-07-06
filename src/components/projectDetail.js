import React from "react";
import { useParams, Link } from "react-router-dom";

// Enhanced project data with the new structure
const projects = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    subtitle:
      "A modern, responsive portfolio website to showcase my work, skills, and contact information.",
    description:
      "This portfolio is a simple, user-friendly platform where visitors can explore my projects, skills, and background without needing to log in. The platform supports interactive elements and smooth animations, making it easy to navigate and engaging to explore. Built with modern web technologies for optimal performance.",
    techStack: [
      "React",
      "Framer Motion",
      "CSS",
      "React Router",
      "Tailwind CSS",
    ],
    github: "https://github.com/Deadz0ner/portfolio", // <-- Add your actual repo URL
    features: [
      "Responsive design that works seamlessly across all devices and screen sizes.",
      "Smooth animations and transitions using Framer Motion for enhanced user experience.",
      "Project showcase with detailed information and interactive elements.",
      "Contact form integration with EmailJS for easy communication without backend setup.",
      "Real-time toast notifications for user feedback instead of browser alerts.",
      "Clean, minimalist design focused on accessibility and fast loading performance.",
    ],
    challenges: [
      "Implementing smooth animations while maintaining good performance across devices.",
      "Creating a responsive design that looks great on mobile, tablet, and desktop.",
      "Ensuring accessibility standards are met for all users and devices.",
      "Optimizing images, assets, and code for fast loading times.",
      "Building a clean, intuitive navigation system for easy exploration.",
      "Integrating EmailJS and toast notifications without introducing security or performance issues.",
    ],
    learnings: [
      "Gained expertise in creating smooth, performant animations with Framer Motion.",
      "Learned advanced CSS techniques for responsive design and cross-browser compatibility.",
      "Improved understanding of accessibility principles and their practical implementation.",
      "Developed skills in performance optimization for images, assets, and layouts.",
      "Explored integrating EmailJS for seamless contact form functionality without backend dependencies.",
      "Learned to implement toast-based real-time feedback for improved user experience.",
    ],
    feedback: "shivanshsagar3@gmail.com",
  },
  {
    id: "tourApp",
    title: "Tour App API & Dynamic Views",
    subtitle:
      "A full-stack, scalable REST API and dynamic web application for managing and booking tours.",
    description:
      "Tour App is a production-ready web application built with Node.js, Express, and MongoDB, designed to manage and book tours. The project combines a robust, secure REST API with dynamic server-side rendered views using Pug. Features include authentication, advanced API capabilities, geospatial queries, and payment integration, providing a complete backend and frontend experience.",
    techStack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Pug",
      "JWT",
      "Stripe",
      "SendGrid",
    ],
    github: "https://github.com/Deadz0ner/tourApp", // <-- Add your actual repo URL
    features: [
      "Scalable REST API with filtering, pagination, sorting, and advanced query features.",
      "Secure authentication and authorization using JWT and cookies.",
      "Role-based access control for admin and user management.",
      "Server-side rendered dynamic views using Pug templating engine.",
      "Geospatial queries to find tours within a specific location or radius.",
      "File and image uploads with processing for user profiles and tour images.",
      "Integrated payment system using Stripe for tour bookings.",
      "Email notifications with SendGrid and Mailtrap for transactional emails.",
      "Security best practices including rate limiting, input sanitization, and secure HTTP headers.",
    ],
    challenges: [
      "Designing and implementing a secure authentication system with JWT, cookies, and password reset functionality.",
      "Building clean, modular, and dynamic views using the Pug templating engine.",
      "Integrating third-party services like Stripe and SendGrid while ensuring reliability and security.",
      "Implementing advanced API features such as filtering, sorting, and pagination efficiently.",
      "Maintaining performance while handling image uploads, file processing, and complex queries.",
      "Ensuring security through proper input validation, sanitization, rate limiting, and secure HTTP headers.",
      "Optimizing the project structure and following the MVC architecture for better maintainability.",
      "Debugging complex backend issues during the integration of multiple services.",
    ],
    learnings: [
      "Deepened understanding of REST API design principles, routing, and middleware handling in Express.",
      "Learned to implement secure authentication, authorization, and user role management using JWT and cookies.",
      "Improved skills in building dynamic, server-rendered views with Pug for enhanced frontend flexibility.",
      "Acquired knowledge of integrating payment systems like Stripe for seamless transaction processing.",
      "Developed expertise in sending automated emails and notifications using SendGrid and Mailtrap.",
      "Strengthened understanding of web application security, including sanitization, rate limiting, and HTTPS best practices.",
      "Learned performance optimization techniques for handling images, large datasets, and API queries.",
      "Improved debugging and problem-solving skills while integrating complex features and third-party services.",
    ],
    feedback: "shivanshsagar3@gmail.com",
  },

  {
    id: "newsSummarizer",
    title: "AI-Powered News Summarizer",
    subtitle:
      "A simple, interactive platform for fetching and summarizing global news using OpenAI and NewsAPI.",
    description:
      "News Summarizer is a lightweight web application that fetches the latest news from reliable sources and provides AI-generated summaries for quick consumption. Built with Streamlit for rapid prototyping and a clean UI, it combines NewsAPI for fetching news and OpenAI's language models to generate concise, easy-to-read summaries. The project focuses on enhancing accessibility to news by reducing reading time while maintaining key information.",
    techStack: [
      "Streamlit",
      "Python",
      "NewsAPI",
      "OpenAI GPT",
      "Requests",
      "dotenv",
      "HTML/CSS (Streamlit components)",
    ],
    github: "https://github.com/Deadz0ner/NewsSummarizer",
    features: [
      "Fetches real-time news from global sources using NewsAPI integration.",
      "Uses OpenAI's language models to generate concise, human-like news summaries.",
      "Simple, responsive UI built with Streamlit for quick deployment and clean presentation.",
      "Category-wise news filtering for user convenience (e.g., Technology, Sports, Business).",
      "Real-time search functionality to find news by keyword or topic.",
      "Environment variable management using dotenv for secure API key handling.",
    ],
    challenges: [
      "Handling API rate limits and ensuring graceful fallback when request quotas are exceeded.",
      "Designing AI prompts that generate coherent, non-repetitive news summaries.",
      "Ensuring the generated summaries preserve factual accuracy and key information.",
      "Integrating category-based filtering and search while keeping the UI simple.",
      "Securing API keys and environment variables in a public-facing project.",
      "Balancing summary length to maintain readability without losing important context.",
    ],
    learnings: [
      "Gained experience integrating multiple APIs (NewsAPI and OpenAI) within a Python project.",
      "Learned prompt engineering techniques to improve summary quality with OpenAI.",
      "Developed skills in rapid prototyping and deployment using Streamlit.",
      "Improved understanding of handling API rate limits, errors, and response parsing.",
      "Explored secure practices for managing sensitive API keys with dotenv.",
      "Strengthened ability to design clean, minimal interfaces that prioritize information clarity.",
    ],
    feedback: "shivanshsagar3@gmail.com",
  },

  {
    id: "blog-platform",
    title: "The Blog | Minimalist Blogging Platform",
    subtitle:
      "A basic yet powerful blogging platform where admins can post and readers can enjoy content.",
    description:
      "The Blog is a simple, user-friendly blogging platform where admins can easily post new blogs, and readers can access and read them without needing to log in. The platform supports image and file uploads for blog content, making it easy to create engaging posts. Authentication is managed via Auth.js (NextAuth), ensuring secure admin access.",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Mongoose",
      "NextAuth (Auth.js)",
      "UploadThing",
      "Axios",
      "Radix UI",
    ],
    github: "https://github.com/Deadz0ner/ssrBlogApp", // <-- Add your actual repo URL
    features: [
      "Admin authentication via NextAuth using Auth.js for secure access.",
      "Blog posts can be added, edited, or deleted by admins.",
      "Non-logged-in users can freely read blog posts.",
      "Image and file uploads integrated with UploadThing for blog media.",
      "Responsive and modern UI with Tailwind CSS for seamless reading experience.",
      "Simple and effective blog management for admins.",
    ],
    challenges: [
      "Implementing secure admin authentication and session management with NextAuth.",
      "Handling file uploads efficiently using UploadThing.",
      "Ensuring smooth user experience for both admins and readers.",
      "Building a simple and effective blog management system for admins.",
    ],
    learnings: [
      "Gained hands-on experience with admin authentication using NextAuth (Auth.js).",
      "Learned file upload management and integration with third-party services.",
      "Improved skills in creating user-friendly interfaces for different user roles.",
      "Developed understanding of blog management system architecture.",
    ],
    feedback: "shivanshsagar3@gmail.com",
  },
  {
    id: "algorithmVisualizer",
    title: "Algorithm Visualizer",
    subtitle:
      "An interactive, performance-optimized visualizer for sorting and pathfinding algorithms built with React.",
    description:
      "Algorithm Visualizer is an educational web application designed to help users intuitively understand sorting and pathfinding algorithms through real-time, animated visualizations. Built during the Summer of Code under the Web and Coding Club at IIT Bombay, this project combines efficient state management, optimized animations, and interactive user controls to deliver an engaging learning experience.",
    techStack: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Framer Motion",
      "requestAnimationFrame",
      "Memoization",
      "Flip Move Animations",
      "JavaScript",
    ],
    github: "https://github.com/Deadz0ner/algo-vizz",
    features: [
      "Real-time, interactive visualizations for popular algorithms with smooth animations.",
      "Separate routes for each algorithm, providing a clean, organized structure using React Router.",
      "Sorting algorithms include Insertion Sort, Selection Sort, Bubble Sort, Merge Sort, and Quick Sort.",
      "Pathfinding algorithms include DFS, BFS, and Dijkstra's Algorithm with animated traversal visualization.",
      "Performance-optimized animations using requestAnimationFrame and memoization to reduce render cycles.",
      "Dynamic tree structures and Flip Move animations for smooth, interactive visual updates.",
      "Responsive design ensuring consistent performance across devices and screen sizes.",
    ],
    challenges: [
      "Creating accurate, step-by-step visualizations for both sorting and pathfinding algorithms.",
      "Maintaining smooth animations and high performance for large datasets using requestAnimationFrame.",
      "Implementing memoization techniques to minimize unnecessary re-renders and improve efficiency.",
      "Building an intuitive, navigable structure with React Router for seamless algorithm switching.",
      "Ensuring consistent visual output and interactivity across different screen sizes and browsers.",
      "Designing interactive user controls that allow real-time adjustments without breaking visualization logic.",
      "Optimizing the rendering of node-based pathfinding visualizations with dynamic data structures.",
    ],
    learnings: [
      "Gained expertise in creating performant, interactive visualizations using React and requestAnimationFrame.",
      "Learned advanced React concepts like memoization, state optimization, and efficient re-render management.",
      "Developed a deeper understanding of sorting and pathfinding algorithms and their visual behavior.",
      "Improved skills in managing complex routing structures with React Router for large-scale applications.",
      "Acquired knowledge of implementing dynamic tree structures and animations with Flip Move.",
      "Enhanced ability to build responsive, user-friendly interfaces with Tailwind CSS and Framer Motion.",
      "Learned to debug performance bottlenecks and optimize animation loops for large datasets.",
    ],
    feedback: "shivanshsagar3@gmail.com",
  },
  {
  "id": "cloudNotebook",
  "title": "CloudNotebook – Cloud-Based Note-Taking App",
  "subtitle": "A lightweight, secure, cloud-hosted note-taking application built to explore full-stack development and cloud deployment.",
  "description": "CloudNotebook is a simple, scalable, cloud-hosted note-taking application that allows users to create, view, and manage notes securely from anywhere. Built primarily to strengthen backend, Docker, and cloud deployment skills, the project uses Node.js and Express for the REST API, containerization with Docker, and deployment to Azure Serverless Functions. It demonstrates secure API design, DevOps practices, and scalable architecture. A minimal React frontend can also be integrated for full-stack learning.",
  "techStack": [
    "Node.js",
    "Express",
    "Docker",
    "Azure Serverless Functions",
    "MongoDB Atlas",
    "React",
    "Postman",
    "dotenv",
    "Git"
  ],
  github: "https://github.com/Deadz0ner/CloudNotebook",
  "features": [
    "User-friendly RESTful API built with Node.js and Express for adding and managing notes.",
    "Secure, structured API endpoints with scalable architecture.",
    "Dockerized backend for consistent environment setup and easy portability.",
    "Deployed using Azure Serverless Functions for cost-efficient, auto-scaling resource management.",
    "Persistent database integration possible using MongoDB Atlas or Azure Cosmos DB.",
    "Optional React or Next.js frontend for interactive, full-stack functionality."
  ],
  "challenges": [
    "Learning and implementing secure API design with Express and Node.js.",
    "Understanding Docker containerization for both development and production environments.",
    "Deploying to Azure Serverless Functions and configuring cloud resources efficiently.",
    "Managing environment variables and API keys securely using dotenv.",
    "Planning database integration for persistent storage with MongoDB Atlas.",
    "Exploring authentication methods like JWT for secure user access control."
  ],
  "learnings": [
    "Built a scalable, RESTful API from scratch using Node.js and Express.",
    "Gained hands-on experience with Docker for containerization and deployment consistency.",
    "Learned to deploy backend services to Azure using Serverless Functions for scalable, pay-per-use architecture.",
    "Understood the process of securely managing environment variables and secrets.",
    "Explored integration of persistent cloud databases like MongoDB Atlas for real-world functionality.",
  ],
  "feedback": "shivanshsagar3@gmail.com"
},
{
  "id": "blog",
  "title": "Full-Stack Blog Application",
  "subtitle": "A secure, scalable blog platform deployed on Azure Virtual Machines with reverse proxy and process management.",
  "description": "The Blog App is a full-stack web application designed to allow users to create, read, and manage blog posts with secure authentication. The backend is built using Node.js and Express, while the frontend leverages React for a dynamic user experience. The application is deployed on an Azure Virtual Machine with Nginx acting as a reverse proxy for efficient traffic management and PM2 for process monitoring and stability. JWT-based authentication ensures secure user access to protected routes and actions.",
  "techStack": [
    "Node.js",
    "Express",
    "React",
    "JWT Authentication",
    "MongoDB Atlas",
    "Azure Virtual Machines",
    "Nginx (Reverse Proxy)",
    "PM2",
    "dotenv",
  ],
  "features": [
    "Full-featured blog platform with post creation, editing, and deletion.",
    "RESTful API built with Node.js and Express for secure, structured data handling.",
    "Dynamic, responsive frontend using React for seamless user experience.",
    "JWT-based authentication and authorization to protect user accounts and routes.",
    "Deployed on Azure VM with Nginx reverse proxy for optimized traffic routing and security.",
    "PM2 for process management, automatic restarts, and ensuring backend stability."
  ],
  "challenges": [
    "Building a secure, scalable REST API with user authentication and authorization.",
    "Designing a clean, responsive React frontend integrated with the backend API.",
    "Setting up an Azure Virtual Machine and configuring secure access.",
    "Configuring Nginx as a reverse proxy to efficiently route traffic to the application.",
    "Implementing PM2 for Node.js process management and automatic server restarts.",
    "Handling environment variables, API keys, and secure deployment on the cloud."
  ],
  "learnings": [
    "Developed a full-stack application with proper separation of backend and frontend responsibilities.",
    "Gained hands-on experience in JWT authentication for secure user management.",
    "Learned to deploy and manage a production environment using Azure Virtual Machines.",
    "Configured and optimized Nginx as a reverse proxy for handling requests securely and efficiently.",
    "Implemented PM2 for reliable process management and application uptime.",
    "Strengthened skills in managing real-world cloud deployments, server setup, and application security."
  ],
  "feedback": "shivanshsagar3@gmail.com"
}


];

const styles = {
  page: {
    backgroundColor: "#070707",
    color: "white",
    padding: "2rem",
    minHeight: "100vh",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
  },
  backLink: {
    color: "#888",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
    marginBottom: "0rem",
    display: "inline-block",
    cursor: "pointer",
  },
  header: {
    marginBottom: "3rem",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "white",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#ccc",
    marginBottom: "2rem",
    lineHeight: 1.6,
  },
  description: {
    fontSize: "1.1rem",
    color: "#aaa",
    lineHeight: 1.7,
    marginBottom: "2rem",
  },
  techStackSection: {
    marginBottom: "3rem",
    gap: "2px",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    color: "white",
    textAlign: "center",
  },
  techStack: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
    marginBottom: "2rem",
  },
  techItem: {
    backgroundColor: "#222",
    color: "#ccc",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    fontSize: "0.95rem",
    border: "1px solid #333",
  },
  contentGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    marginTop: "2rem",
  },
  section: {
    backgroundColor: "inherit",
    padding: "2rem",
    borderRadius: "12px",
    border: "1px solid #333",
  },
  sectionTitleLeft: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    color: "white",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    padding: "0.8rem 0",
    borderBottom: "1px solid #333",
    color: "#ccc",
    lineHeight: 1.6,
  },
  lastItem: {
    borderBottom: "none",
  },
  feedbackSection: {
    marginTop: "3rem",
    textAlign: "center",
    backgroundColor: "inherit",
    padding: "2rem",
    borderRadius: "12px",
    border: "none",
  },
  feedbackText: {
    fontSize: "1.1rem",
    color: "#ccc",
    marginBottom: "1rem",
  },
  feedbackEmail: {
    color: "#4a9eff",
    textDecoration: "none",
    fontSize: "1.1rem",
    fontWeight: "bold",
  },
};

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [projectId]);

  if (!project) return <div style={styles.page}>Project not found.</div>;

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <Link to="/codebase#projects" style={styles.backLink}>
          &larr; Back to Projects
        </Link>
        <div style={styles.header}>
          <h1 style={styles.title}>{project.title}</h1>
          <p style={styles.subtitle}>{project.subtitle}</p>
          <p style={styles.description}>{project.description}</p>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "1rem",
                color: "#888",
                fontWeight: "bold",
                textDecoration: "underline",
                fontSize: "1.1rem",
                marginBottom: "0",
              }}
            >
              View on GitHub
            </a>
          )}
        </div>
        <div style={styles.techStackSection}>
          <h2 style={styles.sectionTitle}>Tech Stack</h2>
          <div style={styles.techStack}>
            {project.techStack.map((tech) => (
              <span key={tech} style={styles.techItem}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div style={styles.contentGrid}>
          <div style={styles.section}>
            <h3 style={styles.sectionTitleLeft}>Features</h3>
            <ul style={styles.list}>
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  style={{
                    ...styles.listItem,
                    ...(index === project.features.length - 1
                      ? styles.lastItem
                      : {}),
                  }}
                >
                  • {feature}
                </li>
              ))}
            </ul>
          </div>
          <div style={styles.section}>
            <h3 style={styles.sectionTitleLeft}>Challenges</h3>
            <ul style={styles.list}>
              {project.challenges.map((challenge, index) => (
                <li
                  key={index}
                  style={{
                    ...styles.listItem,
                    ...(index === project.challenges.length - 1
                      ? styles.lastItem
                      : {}),
                  }}
                >
                  • {challenge}
                </li>
              ))}
            </ul>
          </div>
          <div style={styles.section}>
            <h3 style={styles.sectionTitleLeft}>Learnings</h3>
            <ul style={styles.list}>
              {project.learnings.map((learning, index) => (
                <li
                  key={index}
                  style={{
                    ...styles.listItem,
                    ...(index === project.learnings.length - 1
                      ? styles.lastItem
                      : {}),
                  }}
                >
                  • {learning}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={styles.feedbackSection}>
          <h3 style={styles.sectionTitleLeft}>Feedback</h3>
          <p style={styles.feedbackText}>
            For feedback or suggestions, contact me at:
          </p>
          <a href={`mailto:${project.feedback}`} style={styles.feedbackEmail}>
            {project.feedback}
          </a>
        </div>
      </div>
    </div>
  );
}
