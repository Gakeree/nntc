import React from "react";
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";

import Layout from "./components/layout/Layout";
import ScrollToTopButton from "./components/common/ScrollToTopButton";
import Hero from "./components/sections/Hero";
import WhyNorth from "./components/sections/WhyNorth";
import About from "./components/sections/About";
import Courses from "./components/sections/Courses";
import Contact from "./components/sections/Contact";
import Gallery from "./components/sections/Gallery";
import Admission from "./components/sections/Admission";
import ApplicationForm from "./components/sections/ApplicationForm";

// Home Page Component
const Home = () => (
  <>
    <Hero />
    <WhyNorth />
    <About />
    <Courses />
    <Gallery />
    <Contact />
    
    <ScrollToTopButton />
  </>
);

// About Page
const AboutPage = () => <About />;

// Courses Page
const CoursesPage = () => <Courses />;

// Contact Page
const ContactPage = () => <Contact />;

// Application Page
const ApplyPage = () => <ApplicationForm />;

 

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/courses" element={<Layout><CoursesPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/apply" element={<Layout><ApplyPage /></Layout>} />
        <Route path="/admission" element={<Layout><Admission /></Layout>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
