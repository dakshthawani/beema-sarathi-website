import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import HomePage from "./components/HomePage";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function AppContent() {
  // Initialize smooth scrolling
  useSmoothScroll();

  // Test backend connection on app load
  useEffect(() => {
    const testBackendConnection = async () => {
      try {
        const response = await axios.get(`${API}/health`);
        console.log('🚀 Backend Status:', response.data);
      } catch (e) {
        console.warn('⚠️ Backend connection issue:', e.message);
        console.log('📝 Using mock data fallbacks for development');
      }
    };
    
    testBackendConnection();
  }, []);

  return (
    <div className="App">
      <Helmet>
        <title>Bima Sarthi - Your Trusted Insurance Partner | Best Insurance Plans</title>
        <meta name="description" content="Bima Sarthi offers comprehensive insurance solutions with 15+ years experience. Get health, life, vehicle & home insurance with quick claim settlement and 24x7 support." />
        <link rel="canonical" href="https://bimasarthi.com" />
      </Helmet>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
