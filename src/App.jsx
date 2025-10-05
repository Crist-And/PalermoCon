
import './App.css'
import React, { useEffect } from 'react'
import Hero from './componentes/Hero.jsx'
import About from './componentes/About.jsx'
import Contact from './componentes/Contact.jsx'
import Footer from './componentes/Footer.jsx'
import NavBar from './componentes/NavBar.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CallToAction from './componentes/CallToAction.jsx'
import Testimonials from './componentes/Testimonials.jsx'


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
    window.scrollTo(0, 0);

  }, []);

  return (
    // CAMBIO CLAVE: Aseguramos min-h-screen (altura mínima)
    // y aplicamos padding condicional para la Navbar fija.
   <div className="bg-gradient-to-b from-dark-background to-light-background min-h-screen
                    pb-1 md:pb-0 "> 
      
      <NavBar /> 
      <Hero />
      <About />
      <CallToAction />
      <Testimonials />
      <Contact />
      <Footer />
      
    </div>
    
  )
}

export default App