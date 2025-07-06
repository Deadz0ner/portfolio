import React, { useRef } from "react";
import "../styles/connect.css";
import GeometricShape from "./geometric_shape";
import {
  FaGithub,
  FaLinkedinIn,
  // FaTwitter,
  FaInstagram,
  // FaRss,
  // FaPenFancy,
} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const socials = [
  {
    icon: <FaGithub />,
    url: "https://github.com/Deadz0ner",
    label: "GitHub",
  },
  {
    icon: <FaLinkedinIn />,
    url: "https://linkedin.com/in/svnshh",
    label: "LinkedIn",
  },
  // {
  //   icon: <FaTwitter />,
  //   url: "https://twitter.com/yourusername",
  //   label: "Twitter",
  // },
  // { icon: <FaPenFancy />, url: "https://yourblog.com", label: "Blog" },
  // { icon: <FaRss />, url: "https://yourrss.com", label: "RSS" },
  {
    icon: <FaInstagram />,
    url: "https://instagram.com/alryt.svnxh",
    label: "Instagram",
  },
];

const rightVariants = {
  hidden: { x: -80, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 2, type: "spring" } },
};

const leftVariants = {
  hidden: { x: 80, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 2, type: "spring" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } },
};

const Connect = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )

      .then(() => {
        toast.success("Message sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      });

    e.target.reset();
  };

  return (
    <div className="connect-container">
      {/* Left Section */}
      <motion.div
        className="right-sxn"
        initial="hidden"
        animate="visible"
        variants={rightVariants}
      >
        <div className="design-elements">
          <motion.div className="japanese-elements" variants={fadeIn}>
            「繋がりが
            <br />
            新しい扉を
            <br />
            開きます。
            <br />
            <p>'Connections open new doors.'</p>
            <GeometricShape
              as={motion.div}
              className="geo-shape"
              animate={{ y: [0, 0, 0], rotate: [45, 50, 45] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.div>
        </div>

        <motion.div className="code-box" variants={fadeIn}>
          <h3>
            <b>contact.jsx</b>
          </h3>
          <pre className="code-block">{`const contactDetails = {
  name: "Shivansh Sagar",
  email: "shivanshsagar3@gmail.com",
  mobile: "+91-7208785169",
  location: "Mumbai, India",
  linkedIn: "linkedin.com/in/svnshh",
  github: "github.com/Deadz0ner",
};

function reachOut() {
  console.log(\`Reach out to me at: \${contactDetails.email}\`);
}

reachOut();`}</pre>
        </motion.div>

        <motion.div className="socials-section" variants={fadeIn}>
          <h2 className="socials-title">Socials</h2>
          <p className="socials-desc">
            Follow me on my socials to see different aspects of my life.
          </p>
          <div className="socials-icons">
            {socials.map(({ icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="social-icon-link"
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="left-sxn"
        initial="hidden"
        animate="visible"
        variants={leftVariants}
      >
        <motion.div className="parley" variants={fadeIn}>
          <h1>establishConnection()</h1>
        </motion.div>

        <motion.div className="contact-container" variants={fadeIn}>
          <h1>Say Hello</h1>
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="your@email.com"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              placeholder="Your message here..."
              required
            ></textarea>

            <button type="submit">Send Message →</button>
          </form>
        </motion.div>
      </motion.div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Connect;
