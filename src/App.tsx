import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';
import Navbar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import i18next from 'i18next'

function App() {
i18next.changeLanguage('hi')
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Pricing" element={<Pricing />} />
      </Routes>
      <Footer/>
    </Router>
   

  )
}

export default App;
