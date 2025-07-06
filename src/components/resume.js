import "../styles/resume.css";
import { useEffect } from "react";

const ResumeViewer = () => {
  useEffect(() => {
    document.body.classList.add("resume-fullscreen");
    return () => {
      document.body.classList.remove("resume-fullscreen");
    };
  }, []);

  return (
    <div className="resume-container fullscreen">
      <div className="resume-frame-wrapper">
        <iframe
          src="/res.pdf"
          title="Resume"
          width="100%"
          height="100%"
          className="resume-iframe"
          style={{ minHeight: "100vh" }}
        />
      </div>
    </div>
  );
};

export default ResumeViewer;
