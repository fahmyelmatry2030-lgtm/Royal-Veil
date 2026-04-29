import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import Dresses from './pages/Dresses';
import BlouseEmbroidery from './pages/BlouseEmbroidery';
import Heritage from './pages/Heritage';
import BabyProducts from './pages/BabyProducts';
import CustomTailoring from './pages/CustomTailoring';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import CustomOrderForm from './pages/CustomOrderForm';

import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <WhatsAppButton />
        <div className="app-container">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/dresses" element={<Dresses />} />
              <Route path="/embroidery" element={<BlouseEmbroidery />} />
              <Route path="/heritage" element={<Heritage />} />
              <Route path="/baby" element={<BabyProducts />} />
              <Route path="/custom" element={<CustomTailoring />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/custom-order" element={<CustomOrderForm />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}


export default App;
