import React, { useEffect, useRef } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import News from "./pages/News";
import Location from "./pages/Location";
import Services from "./pages/Services";
import "./App.css"
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      <Footer />
    </div>
  );
}



export default App;


