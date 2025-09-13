import React from 'react';
  import Header from './Header';
  import HeroSection from './HeroSection';
  import ServicesSection from './ServicesSection';
  import TrustSection from './TrustSection';
  import CTASection from './CTASection';
  import Footer from './Footer';
  import ErrorBoundary from './common/ErrorBoundary';

  const HomePage = () => {
    return (
      <div className="min-h-screen bg-white">
        <ErrorBoundary name="Header">
          <Header />
        </ErrorBoundary>

        <ErrorBoundary name="HeroSection">
          <HeroSection />
        </ErrorBoundary>

        <ErrorBoundary name="ServicesSection">
          <ServicesSection />
        </ErrorBoundary>

        <ErrorBoundary name="TrustSection">
          <TrustSection />
        </ErrorBoundary>

        <ErrorBoundary name="CTASection">
          <CTASection />
        </ErrorBoundary>

        <ErrorBoundary name="Footer">
          <Footer />
        </ErrorBoundary>
      </div>
    );
  };

  export default HomePage;