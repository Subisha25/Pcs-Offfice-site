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
import ServicesWebsite from "./components/servicespage/servicebanner";
import Header from "./components/homepage/header";
import AboutBanner from "./components/aboutpage/aboutbanner";
import Footer from "./components/homepage/footer";
import TrainingHomeBanner from "./pcstraining/homepage/banner";
import Webdesign from "./components/servicespage/webdesign";
import Services from "./components/servicespage/services";
import Appdesign from "./components/servicespage/appdesign";
import DigitalMarketing from "./components/servicespage/digitalmarketing";
import Branding from "./components/servicespage/branding";
import Products from "./components/products/products";
import ProductDetails from "./components/products/productdetails";


function App() {
  return (
    <Router>
      <Header />
  
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/aboutbanner" element={<AboutBanner />} />

       <Route path="/servicespage" element={<Services/>} />
       <Route path="/webdesign" element={<Webdesign/>} />
       <Route path="/appdesign" element={<Appdesign/>} />
       <Route path="/digitalmarketing" element={<DigitalMarketing/>} />
       <Route path="/branding" element={<Branding/>} />

        <Route path="/portfoliobanner" element={<Portfoliobanner />} />
        <Route path="/lhome" element={<LhomeBanner />} />
        <Route path="/lecat" element={<LecatBanner />} />
        <Route path="/collah" element={<CollahBanner />} />
        <Route path="/bjmm" element={<BjmmBanner />} />
        <Route path="/wts" element={<WtsBanner />} />
        <Route path="/officechat" element={<OfficechatBanner />} />
        <Route path="/msloan" element={<MsloneBanner/>} />
        <Route path="/pcstrainingsite" element={<TrainingHomeBanner/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/productdetails" element={<ProductDetails/>} />






       
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
