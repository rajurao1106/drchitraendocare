import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './homepage/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactPage from './ContactPage/ContactPage'; // if you have other pages
import FAQ from './homepage/FAQ';
import AboutUs from './AboutUs/AboutUs';
import Services from './Services/Services';



export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} />
         <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
         
      </Routes>
      <FAQ/>
      <Footer />
    </BrowserRouter>
  );
}
