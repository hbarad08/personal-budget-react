import React from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './Loginpage/LoginPage'; 
import BudgetPage from './BudgetPage/BudgetPage'; 
function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Hero/>
        <div className="mainContainer">
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/budget" element={<BudgetPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
