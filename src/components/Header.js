import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import About from "../pages/About";
import Faq from "../pages/Faq";
import Contact from "../pages/Contact"
import ResponsiveAppBar from './Navbar';

const Header = () => {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Faq" element={<Faq/>}/>
        <Route path="Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default Header;
