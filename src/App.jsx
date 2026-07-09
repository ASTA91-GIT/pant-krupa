import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Amenities from './components/Amenities';
import Events from './components/Events';
import BookCTA from './components/BookCTA';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

function App() {
  return (
    <>
      {/* Premium Luxury Resort Components */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Amenities />
        <Events />
        <BookCTA />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}


export default App;
