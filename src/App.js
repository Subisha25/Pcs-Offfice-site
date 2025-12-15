import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Banner from "./components/homepage/banner";
import Portfoliobanner from "./components/portfolio/portfoliobanner";
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
import LearningJourneyPage from "./components/contact/banner";
import ProductDetails from "./components/products/productdetails";
import Works from "./components/works/work";
import GraceBanner from "./components/portfolio/gracecabs";
import Mslone from "./components/portfolio/msloan";
import Officechat from "./components/portfolio/officechat";
import Wts from "./components/portfolio/wts";
import Bjmm from "./components/portfolio/bjmm";
import Collah from "./components/portfolio/collah";
import Lecat from "./components/portfolio/lecat";
import Lhome from "./components/portfolio/lhome";
import ContactSection from "./components/contact/banner";
import ScrollToTop from "./components/scrolltotop";
import AllCourses from "./pcstraining/homepage/allcourses";
import CourseDetails from "./pcstraining/homepage/coursedetails";


function App() {
  return (
    <Router>
      <ScrollToTop/>
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
        <Route path="/lhome" element={<Lhome />} />
        <Route path="/lecat" element={<Lecat />} />
        <Route path="/collah" element={<Collah />} />
        <Route path="/bjmm" element={<Bjmm />} />
        <Route path="/wts" element={<Wts />} />
        <Route path="/officechat" element={<Officechat/>} />
        <Route path="/msloan" element={<Mslone/>} />
        <Route path="/gracecabs" element={<GraceBanner/>} />
        <Route path="/pcstrainingsite" element={<TrainingHomeBanner/>} />
        <Route path="/products" element={<Products/>} />
                <Route path="/productdetails/:id" element={<ProductDetails/>} />

        <Route path="/learningJourneyPage" element={<LearningJourneyPage/>} />


        <Route path="/works" element={<Works/>} />
        <Route path="/contact" element={<ContactSection/>} />
        <Route path="/allcourses" element={<AllCourses/>} />
        <Route path="/coursedetails/:id" element={<CourseDetails/>} />





       
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
