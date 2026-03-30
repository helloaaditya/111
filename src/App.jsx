import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PageLayout from './components/layout/PageLayout';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import FloatingContact from './components/ui/FloatingContact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PageLayout />}>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Route>
      </Routes>
      <FloatingContact />
    </>
  );
}

export default App;
