import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import { JobExperience } from "./pages/JobExperience";
import { Skills } from "./pages/Skills";
import { Examples } from "./pages/Examples";
import { Links } from "./pages/Links";
import { Contacts } from "./pages/Contacts";

function App() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <div className="container pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/job_experience" element={<JobExperience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/links" element={<Links />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </>
  );
}

export default App;