import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from 'src/components/Footer';
import Login from 'src/components/Login';
import Home from 'src/components/Home';
import Sidebar from 'src/components/Sidebar';
import Navbar from 'src/components/Navbar';
import Menu from 'src/components/Menu';
import Services from 'src/components/Services';
function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
