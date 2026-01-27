import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

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
import TechLogoStrip from "./components/servicespage/teachstrip";
import BlogPage from "./blog/BlogPage";
import BlogDetails from "./blog/blogdetailsh";
import CreateBlog from "./blog/createblog";
import NotFound404 from "./components/NotFound404/NotFound404";

/* 🔥 Layout WITH Header & Footer */
const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        {/* ✅ ALL NORMAL PAGES */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Banner />
            </MainLayout>
          }
        />

        <Route
          path="/aboutbanner"
          element={
            <MainLayout>
              <AboutBanner />
            </MainLayout>
          }
        />

        <Route
          path="/servicespage"
          element={
            <MainLayout>
              <Services />
            </MainLayout>
          }
        />

        <Route
          path="/webdesign"
          element={
            <MainLayout>
              <Webdesign />
            </MainLayout>
          }
        />

        <Route
          path="/appdesign"
          element={
            <MainLayout>
              <Appdesign />
            </MainLayout>
          }
        />

        <Route
          path="/digitalmarketing"
          element={
            <MainLayout>
              <DigitalMarketing />
            </MainLayout>
          }
        />

        <Route
          path="/branding"
          element={
            <MainLayout>
              <Branding />
            </MainLayout>
          }
        />

        <Route
          path="/portfoliobanner"
          element={
            <MainLayout>
              <Portfoliobanner />
            </MainLayout>
          }
        />

        <Route path="/lhome" element={<MainLayout><Lhome /></MainLayout>} />
        <Route path="/lecat" element={<MainLayout><Lecat /></MainLayout>} />
        <Route path="/collah" element={<MainLayout><Collah /></MainLayout>} />
        <Route path="/bjmm" element={<MainLayout><Bjmm /></MainLayout>} />
        <Route path="/wts" element={<MainLayout><Wts /></MainLayout>} />
        <Route path="/officechat" element={<MainLayout><Officechat /></MainLayout>} />
        <Route path="/msloan" element={<MainLayout><Mslone /></MainLayout>} />
        <Route path="/gracecabs" element={<MainLayout><GraceBanner /></MainLayout>} />

        <Route path="/training" element={<MainLayout><TrainingHomeBanner /></MainLayout>} />
        <Route path="/products" element={<MainLayout><Products /></MainLayout>} />
        <Route path="/productdetails/:id" element={<MainLayout><ProductDetails /></MainLayout>} />

        <Route path="/learningJourneyPage" element={<MainLayout><LearningJourneyPage /></MainLayout>} />
        <Route path="/teachstrip" element={<MainLayout><TechLogoStrip /></MainLayout>} />
        <Route path="/works" element={<MainLayout><Works /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><ContactSection /></MainLayout>} />

        <Route path="/allcourses" element={<MainLayout><AllCourses /></MainLayout>} />
        <Route path="/coursedetails/:id" element={<MainLayout><CourseDetails /></MainLayout>} />

        <Route path="/blog" element={<MainLayout><BlogPage /></MainLayout>} />
        <Route path="/blog/:id" element={<MainLayout><BlogDetails /></MainLayout>} />
        <Route path="/createblog" element={<MainLayout><CreateBlog /></MainLayout>} />

        {/* ❌ WRONG URL – ONLY 404 PAGE */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
}

export default App;
