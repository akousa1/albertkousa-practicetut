import './App.css';
import About from './components/About';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Features/>
     <Products/>
     <About/>
     <HowItWorks/>
     <Testimonial/>
     <Footer/>
    </>
  );
}

export default App;
