import "../styles/home.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import GeometricShape from "./geometric_shape";
import startQuestioning from "../assets/start_quest.jpg";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const DigitalRain = () => {
  const canvasRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    function drawPattern() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const parent = canvas.parentElement;
      const rect = parent.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      canvas.width = rect.width;
      canvas.height = rect.height;
      const ctx = canvas.getContext("2d");
      const fontSize = 20;
      const width = canvas.width;
      const height = canvas.height;
      const columns = Math.floor(width / fontSize);
      const rows = Math.floor(height / fontSize);
      const chars = ["0", "1"];

      ctx.clearRect(0, 0, width, height);

      for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
          const text = chars[Math.floor(Math.random() * chars.length)];
          const fade = Math.max(0, x / columns);
          ctx.font = `${fontSize}px monospace`;
          ctx.fillStyle = `rgba(255,255,255,${fade})`;
          ctx.fillText(text, x * fontSize, (y + 1) * fontSize);
        }
      }
    }

    // Draw after layout
    requestAnimationFrame(drawPattern);
    window.addEventListener("resize", drawPattern);

    // Redraw pattern when page becomes visible again (e.g., after routing back)
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        requestAnimationFrame(drawPattern);
      }
    });

    return () => {
      window.removeEventListener("resize", drawPattern);
      // No need to remove visibilitychange listener as component will remount
    };
  }, [location]);

  return (
    <canvas
      ref={canvasRef}
      className="digital-rain-canvas"
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        width: "50%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 2,
        filter: "blur(0.5px)",
        display: "block",
      }}
    />
  );
};

const Home = () => {
  const handleOpenPDF = () => {
    const pdfPath = `${process.env.PUBLIC_URL}/res.pdf`;
    window.open(pdfPath, "_blank");
  };
  return (
    <div className="home-container">
      {/* Left Side */}
      <motion.div
        className="intro-section"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="name">svnsh</h1>
        <p className="description">
          I’m Shivansh — I mostly work on the backend, but I know my way around
          the frontend too. I’ve always been more drawn to how things run under
          the surface — the logic, the systems, the structure that keeps
          everything working. I like building things that are reliable,
          efficient, and make sense behind the scenes. Still learning, always
          improving — every bug, every new layer brings me a little closer to
          understanding the whole.
        </p>
        <div className="contain-fix">
          <div className="japanese-text">
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <span>専門家はいない、</span>
              <br />
              <span>ただ私たちがいる</span>
              <div className="japanese-text-translation">
                <p>There r no Experts, there's only us</p>
              </div>
            </motion.div>
          </div>
          <motion.div className="home-buttons">
            <Link to="/connect" className="home-btn2">
              Say Hello
            </Link>
            <button onClick={handleOpenPDF} className="home-btn">
              Resume
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side (Code Window) */}
      <motion.div
        initial={{ z: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 4, delay: 0.5 }}
        className="terminal-window"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <img src={startQuestioning} alt="start questioning" />
        <DigitalRain />
      </motion.div>
    </div>
  );
};

export default Home;
