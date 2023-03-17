import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import Education from "./components/Education/Education";
import Header from "./components/Header/Header";
import Hobby from "./components/Hobby/Hobby";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skill/Skills";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
