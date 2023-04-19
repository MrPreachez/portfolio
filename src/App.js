import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Contact from "./pages/Contact/Contact";
import ProjectMelder from "./pages/ProjectMelder/ProjectMelder";
import ProjectInstock from "./pages/ProjectInstock/ProjectInstock";
import ProjectBrainflix from "./pages/ProjectBrainflix/ProjectBrainflix";
import ProjectSocio from "./pages/ProjectSocio/ProjectSocio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRef } from "react";
import React from "react";

function App() {
  const projectsSectionRef = useRef(null);
  return (
    <div className="App">
      <BrowserRouter>
        <Header projectsSectionRef={projectsSectionRef} />
        <Routes>
          <Route
            path="/"
            element={<HomePage ref={projectsSectionRef} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/melder" element={<ProjectMelder />} />
          <Route path="/project/instock" element={<ProjectInstock />} />
          <Route path="/project/brainflix" element={<ProjectBrainflix />} />
          <Route path="/project/socio" element={<ProjectSocio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
