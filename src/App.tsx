import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSignals from './components/TrustSignals';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900 selection:bg-aqua-500 selection:text-navy-900">
      <Navbar />
      <main>
        <Hero />
        <TrustSignals />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
