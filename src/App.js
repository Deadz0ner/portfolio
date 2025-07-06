import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Codebase from "./components/codebase";
import Connect from "./components/connect";
import NoPage from "./components/no-page";
import Navbar from "./components/navbar";
import Resume from "./components/resume";
// import Me from "./components/me"
import Journey from "./components/journey";
import ProjectDetail from "./components/projectDetail";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/codebase" element={<Codebase />} />
        {/* <Route path="/me" element={<Me/>} /> */}
        <Route path="/resume" element={<Resume />} />
        <Route path="/journey" element={<Journey/>} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}