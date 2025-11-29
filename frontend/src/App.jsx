import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Plans />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
