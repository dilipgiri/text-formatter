import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import "./App.css";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("light");

  const modeChangeBlue = () => {
    setMode("dark");
    document.body.style.backgroundColor = "#2a6f97";
    document.body.style.color = " white ";
  };

  const modeChangeGreen = () => {
    setMode("dark");
    document.body.style.backgroundColor = "#2d6a4f";
    document.body.style.color = " white ";
  };
  const modeChangeGrey = () => {
    setMode("dark");
    document.body.style.backgroundColor = "#4a4e69";
    document.body.style.color = " white ";
  };

  const modeChangeLight = () => {
    setMode("light");
    document.body.style.backgroundColor = "white";
    document.body.style.color = " black";
  };

  return (
    <>
      <Router>
        <Navbar
          title="DkgCreations"
          mode={mode}
          modeChangeBlue={modeChangeBlue}
          modeChangeGrey={modeChangeGrey}
          modeChangeGreen={modeChangeGreen}
          modeChangeLight={modeChangeLight}
        />
        <Routes>
          <Route path="/about" element={ <About />}/>
           
          

          <Route path="/" element=
            {<TextForm heading="Text Formatter" />}/>
      
        </Routes>
      </Router>
    </>
  );
}



