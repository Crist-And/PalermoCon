
// componentes/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <>
      {/* Línea divisoria */}
      <div className="w-full h-px bg-secondary-color"></div> {/* Línea fina de color secundario */}

      <footer className="bg-gray-900 text-gray-300 py-8 md:py-6 text-center shadow-inner">
        <div className="container mx-auto text-center">
          <p className="text-base sm:text-sm mb-2">
            © {new Date().getFullYear()} Cristian Andrada. All rights reserved.
          </p>
          <p className="text-sm sm:text-xs mt-2">Diseño.Desarrollo.Imagen Visual | Soluciones Digitales</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
