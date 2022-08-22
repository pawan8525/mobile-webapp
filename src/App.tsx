import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Pricing" element={<Pricing />} />
      </Routes>
    </Router>

  )
}

export default App;
