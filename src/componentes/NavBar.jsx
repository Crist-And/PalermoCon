import React, { useState, useEffect } from 'react';
import { FaHome, FaUsers, FaQuoteLeft, FaEnvelope } from 'react-icons/fa';

// Definimos el color de acento
const ACCENT_COLOR_HEX = '#27C840';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [navOpacity, setNavOpacity] = useState(1); 

  useEffect(() => {
    const handleScroll = () => {
      // Lógica para la sección activa (se mantiene igual)
      const sectionIds = ['hero', 'about', 'testimonials', 'contact']; 
      let currentActive = 'hero';
      sectionIds.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            const rect = section.getBoundingClientRect();
            // ... (lógica de detección de sección) ...
        }
      });
      setActiveSection(currentActive);

      // Lógica para el desvanecimiento de la opacidad (se mantiene la lógica original)
      // ...
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
      className="fixed bottom-0 left-0 right-0 z-50 p-3 shadow-2xl backdrop-blur-sm
                 md:top-0 md:bottom-auto md:left-0 md:right-0 md:w-full md:flex md:justify-center md:items-center
                 transition-opacity duration-300 ease-out"
      // CLAVE: Usamos el RGB de bg-gray-900 y aplicamos la opacidad dinámica (navOpacity)
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
                // Ajustamos el padding en desktop para que se vea como una barra horizontal
                className={`flex flex-col items-center p-2 md:px-4 md:py-2 transition-all duration-300 group
                  ${isActive ? 'scale-110 md:scale-100' : 'hover:scale-105 md:hover:scale-100'}`}
                aria-label={link.label}
              >
                <IconComponent 
                  className={`text-2xl md:text-xl transform transition-transform duration-300
                    ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}
                  style={{ color: isActive ? ACCENT_COLOR_HEX : '#E5E7EB' }} 
                />
                <span className={`hidden md:block text-xs mt-1 font-medium transition-colors 
                  ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}
                  style={{ color: isActive ? ACCENT_COLOR_HEX : '#E5E7EB' }}
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