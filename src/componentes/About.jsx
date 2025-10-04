import React from 'react'
import { FaBolt, FaUsers, FaHome, FaTools, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

// Definimos el color de acento directamente con el código HEX
const ACCENT_COLOR_HEX = '#27C840'; 

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 scroll-mt-16 bg-gray-900 text-gray-200"
    >
      <div className="max-w-4xl mx-auto" data-aos="fade-up">
        
        {/* Título: Misión y Conexión */}
        <h2
          className="text-4xl font-extrabold mb-10 flex items-center gap-3 border-b-2 pb-3"
          // Aplicamos el color al texto y al borde del título
          style={{ color: ACCENT_COLOR_HEX, borderColor: ACCENT_COLOR_HEX }} 
        >
          <FaBolt className="text-3xl" /> Conexión y Seguridad
        </h2>
        
        {/* Sección de Misión y Mensaje Principal */}
        <div className="mb-12">
          <p className="text-xl leading-relaxed tracking-wide mb-6">
            Creemos que la energía está en las conexiones que hacemos cada día.
          </p>
          <p 
            className="text-xl leading-relaxed tracking-wide italic mb-8 font-semibold"
            // Aplicamos el color al texto destacado
            style={{ color: ACCENT_COLOR_HEX }} 
          >
            Con vos. Con tu hogar. Con tu negocio. Con la seguridad de tus instalaciones.
          </p>
          <p className="text-xl leading-relaxed text-gray-300">
            En <span className="font-bold text-white">Palermo Con</span> trabajamos para que cada proyecto eléctrico funcione de manera <span className="font-bold text-white">segura, eficiente y sin interrupciones</span>.
          </p>
        </div>

        {/* Sección de Servicios y Lista de Puntos */}
        <h3 className="text-3xl font-bold mb-6 mt-12 text-white">
          Nuestros Servicios
        </h3>
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 text-lg">
          
          {/* Servicio 1: Instalaciones (Residenciales/Comerciales) */}
          <li className="flex items-start gap-4">
            {/* Aplicamos el color al ícono */}
            <FaHome className="text-2xl mt-1 flex-shrink-0" style={{ color: ACCENT_COLOR_HEX }} />
            <span className="leading-tight">
              Instalaciones <span className="font-semibold">residenciales y comerciales</span>
            </span>
          </li>
          
          {/* Servicio 2: Mantenimiento y Reparaciones */}
          <li className="flex items-start gap-4">
            {/* Aplicamos el color al ícono */}
            <FaTools className="text-2xl mt-1 flex-shrink-0" style={{ color: ACCENT_COLOR_HEX }} />
            <span className="leading-tight">
              <span className="font-semibold">Mantenimiento y reparaciones</span>
            </span>
          </li>
          
          {/* Servicio 3: Actualización de Tableros */}
          <li className="flex items-start gap-4">
            {/* Aplicamos el color al ícono */}
            <FaShieldAlt className="text-2xl mt-1 flex-shrink-0" style={{ color: ACCENT_COLOR_HEX }} />
            <span className="leading-tight">
              Actualización y modernización de <span className="font-semibold">tableros eléctricos</span>
            </span>
          </li>

          {/* Servicio 4: Sistemas de Iluminación */}
          <li className="flex items-start gap-4">
            {/* Aplicamos el color al ícono */}
            <FaLightbulb className="text-2xl mt-1 flex-shrink-0" style={{ color: ACCENT_COLOR_HEX }} />
            <span className="leading-tight">
              Diseño e instalación de <span className="font-semibold">sistemas de iluminación</span>
            </span>
          </li>
        </ul>

        {/* Cierre de la sección */}
        <p 
          className="text-xl mt-16 font-extrabold flex items-center gap-3"
          // Aplicamos el color al texto de cierre
          style={{ color: ACCENT_COLOR_HEX }}
        >
          <FaUsers className="text-3xl" /> Porque tu tranquilidad también se conecta.
        </p>
        
      </div>
    </section>
  )
}

export default About