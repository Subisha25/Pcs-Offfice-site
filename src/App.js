import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Banner from "./components/homepage/banner";
import Portfoliobanner from "./components/portfolio/portfoliobanner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/portfoliobanner" element={<Portfoliobanner />} />
       
      </Routes>
    </Router>
  );
}

export default App;
