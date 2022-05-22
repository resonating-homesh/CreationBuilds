import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Services from './pages/Services';
import Project from './pages/Project';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React, { useEffect } from 'react';
function App() {

  useEffect(()=>
  {
    window.scrollTo(0,0)
  })

  return (
    <div className="App">
    <Router>
    {/* <ScrollTop> */}
    <Navbar/>
      <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/services" element={<Services/>} />
      <Route exact path="/project" element={<Project/>} />
      <Route exact path="/aboutus" element={<AboutUs/>} />
      <Route exact path="/contactus" element={<ContactUs/>} />
      </Routes>
      <Footer/>
      {/* </ScrollTop>  */}
    </Router>
    </div>
  );
}
export default App;
