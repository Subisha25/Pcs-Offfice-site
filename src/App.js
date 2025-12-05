import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Banner from "./components/homepage/banner";
import Portfoliobanner from "./components/portfolio/portfoliobanner";
import LhomeBanner from "./components/portfolio/lhome";
import LecatBanner from "./components/portfolio/lecat";
import CollahBanner from "./components/portfolio/collah";
import BjmmBanner from "./components/portfolio/bjmm";
import WtsBanner from "./components/portfolio/wts";
import OfficechatBanner from "./components/portfolio/officechat";
import MsloneBanner from "./components/portfolio/msloan";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/portfoliobanner" element={<Portfoliobanner />} />
        <Route path="/lhome" element={<LhomeBanner />} />
        <Route path="/lecat" element={<LecatBanner />} />
        <Route path="/collah" element={<CollahBanner />} />
        <Route path="/bjmm" element={<BjmmBanner />} />
        <Route path="/wts" element={<WtsBanner />} />
        <Route path="/officechat" element={<OfficechatBanner />} />
        <Route path="/msloan" element={<MsloneBanner/>} />




       
      </Routes>
    </Router>
  );
}

export default App;
