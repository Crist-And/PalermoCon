
import './App.css'
import React from 'react'
import Hero from './componentes/Hero.jsx'
import About from './componentes/About.jsx'

import Contact from './componentes/Contact.jsx'
import Footer from './componentes/Footer.jsx'
import NavBar from './componentes/NavBar.jsx'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CallToAction from './componentes/CallToAction.jsx'
import Testimonials from './componentes/Testimonials.jsx'


function App() {
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true, // las animaciones se ejecutan solo una vez
    offset: 50, // para que inicie un poco antes de entrar al viewport
  });
  window.scrollTo(0, 0);

}, []);

  return (
    
        <div className="bg-gradient-to-b from-dark-background to-light-background h-20">



      
      <Hero />
      <NavBar />
      <About />
      <CallToAction />
      <Testimonials />
      {/* <Skills /> */}
      {/* <Experience /> */}
      {/*<Portofolio />*/}
      {/*<Formacion />*/}
      <Contact />
      <Footer />
      
      </div>
    
  )
}

export default App
