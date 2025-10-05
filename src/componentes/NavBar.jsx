import React, { useState, useEffect } from 'react';
import { FaHome, FaUsers, FaQuoteLeft, FaEnvelope } from 'react-icons/fa';

// Definimos los colores
const ACCENT_COLOR_HEX = '#27C840';
const INACTIVE_COLOR = '#E5E7EB'; // Gris claro para inactivo

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [navOpacity, setNavOpacity] = useState(1); 

  useEffect(() => {
    const handleScroll = () => {
      
      // --- Lógica de Detección de Sección ---
      const sectionIds = ['hero', 'about', 'testimonials', 'contact']; 
      let currentActive = 'hero';
      
      sectionIds.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            const rect = section.getBoundingClientRect();
            
            // La sección se considera activa si está cerca de la parte superior (por encima de 100px)
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentActive = id;
            }
        }
      });
      setActiveSection(currentActive);

      // --- Lógica para el desvanecimiento de la opacidad ---
      const scrollPosition = window.scrollY;
      const fadeStart = 50; 
      const fadeEnd = 800; 
      const minOpacity = 0.80; 
      const maxOpacity = 1; 
      let newOpacity = maxOpacity;

      if (scrollPosition > fadeStart) {
        const scrollRange = fadeEnd - fadeStart;
        const scrolledIntoFade = scrollPosition - fadeStart;
        const fadeProgress = Math.min(1, scrolledIntoFade / scrollRange);
        newOpacity = maxOpacity - (fadeProgress * (maxOpacity - minOpacity));
        newOpacity = Math.max(minOpacity, newOpacity); 
      }
      setNavOpacity(newOpacity);

    }; 

    handleScroll(); 
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Ajuste para scroll con barra fija superior
      const headerOffset = 60; 
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  const navLinks = [
    { id: 'hero', icon: FaHome, label: 'Inicio' },
    { id: 'about', icon: FaUsers, label: 'Nosotros' },
    { id: 'testimonials', icon: FaQuoteLeft, label: 'Opiniones' },
    { id: 'contact', icon: FaEnvelope, label: 'Presupuesto' },
  ];

  return (
    <nav
      // CLAVE: Cambiado de bottom-0 a top-0, y eliminado md:top-0 redundante
      className="fixed top-0 left-0 right-0 z-50 p-3 shadow-2xl backdrop-blur-sm
                 md:w-full md:flex md:justify-center md:items-center
                 transition-opacity duration-300 ease-out"
      style={{ 
        opacity: navOpacity, 
        backgroundColor: `rgba(17, 24, 39, ${navOpacity})` 
      }} 
    >
      <ul className="flex justify-around max-w-7xl w-full md:space-x-8 md:justify-center">
        {navLinks.map((link) => {
          const IconComponent = link.icon;
          const isActive = activeSection === link.id;
          
          return (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className={`flex flex-col items-center p-2 md:px-4 md:py-2 transition-all duration-300 group
                  ${isActive ? 'scale-110 md:scale-100' : 'hover:scale-105 md:hover:scale-100'}`}
                aria-label={link.label}
              >
                {/* APLICACIÓN DE COLOR AL ÍCONO */}
                <IconComponent 
                  className={`text-2xl md:text-xl transform transition-transform duration-300
                    ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}
                  style={{ color: isActive ? ACCENT_COLOR_HEX : INACTIVE_COLOR }} 
                />

                {/* APLICACIÓN DE COLOR AL TEXTO (Solo desktop) */}
                <span className={`hidden md:block text-xs mt-1 font-medium transition-colors`}
                  style={{ color: isActive ? ACCENT_COLOR_HEX : INACTIVE_COLOR }}
                >
                  {link.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;