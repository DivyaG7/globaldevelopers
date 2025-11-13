import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Import your pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Consultancy from "./components/Home/Consultancy";
import Estate from "./components/Home/Estate";
import OurWorkGallery from "./components/Home/OurWorkGallery";

const App = () => {
  return (
    <Router>
      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/consultancy" element={<Consultancy />} />
        <Route path="/estate" element={<Estate />} />
        <Route path="/ourworkgallery" element={<OurWorkGallery />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
