import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/homepage/banner";
import About from "./components/homepage/aboutus";
import ServicesWebsite from "./components/servicespage/servicebanner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/about" element={<About />} />
         <Route path="/services" element={<ServicesWebsite/>} />

      </Routes>
    </Router>
  );
}

export default App;
