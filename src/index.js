import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage.js';
import AboutMe from './Pages/AboutMe.js';
import ContactMe from './Pages/ContactMe.js';
import BillMe from './Pages/BillMe.js';
import TicketOne from './Pages/TicketOne.js';
import './index.css';
import TabBar from "./components/TabBar";
import ScrollToTop from './components/ScrollToTop';


function START() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <TabBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/ContactMe" element={<ContactMe />} />
          <Route path="/BillMe" element={<BillMe />} />
          <Route path="/TicketOne" element={<TicketOne />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

// swDev();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< START />);